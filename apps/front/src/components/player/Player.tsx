import {
  Component,
  ComponentProps,
  ParentComponent,
  Show,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import {
  getMediaContext,
  getMediaDetail,
  postPlayerEnd,
  postPlayerKeepalive,
  postPlayerStart,
} from "../../api/endpoints/beast-endpoints";
import { MediaWithContext, MediaWithStreams, PlayerResolution, PlayerSettings } from "../../api/model";
import Hls from "hls.js";
import { createMutable, modifyMutable, reconcile } from "solid-js/store";
import { ArrowIcon, PauseIcon, PiPIcon, PlayIcon } from "../commons/Icons";
import clsx from "clsx";
import dayjs from "dayjs";
import { SettingsControl } from "./PlayerSettings";
import { VolumeControl } from "./PlayerVolume";
import { Slider } from "./PlayerSlider";
import { debounce } from "@solid-primitives/scheduled";
import { Logo } from "../commons/Logo";
import { getApiUrl } from "../../hooks/url";
import { Button } from "../commons/Button";
import { useNavigate } from "@solidjs/router";
import { createMemo } from "solid-js";

interface PlayerStatusBase<T extends string> {
  status: T;
  media: MediaWithStreams;
  context: MediaWithContext;
  hls: Hls;
  playerId: string;
  settings: PlayerSettings;
  availableResolutions: PlayerResolution[]
  buffering: boolean;
  playing: boolean;
  absoluteSeek: number;
  volume: number;
  prevVolume: number;
  pip: boolean;
  showControls: boolean;
}

type PlayerStore =
  | { status: "init"; showControls: boolean }
  | PlayerStatusBase<"mounted">;

const MiddleControl: ParentComponent<ComponentProps<"div">> = (props) => {
  return (
    <div
      {...props}
      class={clsx(
        props.class,
        "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
      )}
    >
      {props.children}
    </div>
  );
};

const Loader: Component<ComponentProps<"div">> = (props) => {
  return (
    <MiddleControl>
      <div {...props} class={clsx(props.class, "animate-pulse")}>
        <Logo />
      </div>
    </MiddleControl>
  );
};

const TogglePlaying: Component<{ togglePlay: () => void; playing: boolean }> = (
  props
) => {
  return (
    <MiddleControl onClick={props.togglePlay}>
      <div
        class={clsx(
          "bg-beast-main flex justify-center items-center rounded-full p-4",
          "transition-opacity duration-300",
          props.playing ? "opacity-0" : "opacity-100"
        )}
      >
        <PlayIcon size={60} />
      </div>
    </MiddleControl>
  );
};

export function Player({ mediaId }: { mediaId: string }) {
  const nav = useNavigate();
  const player = createMutable<PlayerStore>({
    status: "init",
    showControls: true,
  });
  const [time, setTime] = createSignal("--:-- XX");

  const mouseMoving = debounce(() => (player.showControls = false), 1000);

  let video!: HTMLVideoElement;

  const clock = setInterval(() => {
    // TODO change based on i18n
    setTime(dayjs().format("hh:mm A"));
  }, 1000);

  const keepAlive = setInterval(() => {
    if (player.status == "mounted") {
      postPlayerKeepalive({ id: player.playerId });
    }
  }, 5000);

  const endPlayer = async () => {
    if (player.status == "mounted") {
      player.hls.destroy();
      await postPlayerEnd({ id: player.playerId });
    }
  };

  const startPlayer = async (settings: Omit<PlayerSettings, "mediaId">) => {
    const start = await postPlayerStart({ mediaId, ...settings });
    const hls = new Hls();
    // hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    //   console.log("video and hls.js are now bound together !");
    // });
    // hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
    //   console.log(
    //     "manifest loaded, found " + data.levels.length + " quality level"
    //   );
    // });
    const baseUrl = getApiUrl();
    const source = `${baseUrl}/public/transcodes/${start.id}/master.m3u8`;
    hls.loadSource(source);
    hls.attachMedia(video);
    return {
      start,
      hls,
    };
  };

  const togglePlay = () => {
    if (video.paused) video.play();
    else video.pause();
  };

  const seek = async (position: number) => {
    if (player.status !== "mounted") return;
    player.absoluteSeek = position;
    await updateSettings(player.settings);
  };

  const onPlayerClose = async () => {
    await endPlayer();
  };

  const whenCanplaythrough = () => {
    if (player.status !== "mounted") return;
    player.buffering = false;
  };

  const whenWaiting = () => {
    if (player.status !== "mounted") return;
    player.buffering = true;
  };

  const whenPlayingChange = () => {
    if (player.status !== "mounted") return;
    player.playing = !video.paused;
    if (player.playing) {
      player.buffering = false;
    }
  };

  const whenProgressChange = () => {
    if (player.status !== "mounted") return;
    player.absoluteSeek = player.settings.seek + video.currentTime;
  };

  const whenVolumeChange = () => {
    if (player.status !== "mounted") return;
    player.volume = video.volume;
  };

  const changeVolume = (volume: number) => {
    if (player.status !== "mounted") return;
    video.volume = volume;
    player.prevVolume = player.volume;
    player.volume = volume;
  };

  const toggleMute = () => {
    if (player.status !== "mounted") return;
    if (player.volume !== 0) changeVolume(0);
    else changeVolume(player.prevVolume);
  };

  const whenPiP = () => {
    if (player.status !== "mounted") return;
    player.pip = !!document.pictureInPictureElement;
  };

  const togglePiP = () => {
    if (player.status !== "mounted") return;

    if (player.pip) {
      document.exitPictureInPicture();
    } else {
      video.requestPictureInPicture();
    }
  };

  const updateSettings = async (settings: PlayerSettings) => {
    if (player.status !== "mounted") return;
    player.buffering = true;
    video.autoplay = true;
    await endPlayer();
    const { start, hls } = await startPlayer({
      ...settings,
      seek: player.absoluteSeek,
    });

    player.hls = hls;
    player.settings = start.settings;
    player.playerId = start.id;
    player.absoluteSeek = start.settings.seek;
  };

  const onMouseMove = () => {
    player.showControls = true;
    mouseMoving();
  };

  const goBack = () => {
    nav(-1);
  }

  onMount(async () => {
    video.addEventListener("canplaythrough", whenCanplaythrough);
    video.addEventListener("waiting", whenWaiting);
    video.addEventListener("play", whenPlayingChange);
    video.addEventListener("pause", whenPlayingChange);
    video.addEventListener("progress", whenProgressChange);
    video.addEventListener("volumechange", whenVolumeChange);
    video.addEventListener("enterpictureinpicture", whenPiP);
    video.addEventListener("leavepictureinpicture", whenPiP);
    window.addEventListener("beforeunload", onPlayerClose, true);
    window.addEventListener("popstate", onPlayerClose, true);

    if (import.meta.hot) {
      // Does it need cleanup?
      import.meta.hot.dispose(async () => await endPlayer());
    }

    // Fetch the media informations
    const media = await getMediaDetail({ mediaId });
    const { start, hls } = await startPlayer({ seek: 0, streams: [] });
    const context = await getMediaContext({ mediaId })
    
    modifyMutable(
      player,
      reconcile({
        status: "mounted",
        media,
        context,
        hls,
        playerId: start.id,
        settings: start.settings,
        buffering: true,
        playing: false,
        absoluteSeek: start.settings.seek,
        availableResolutions: start.availableResolutions,
        volume: video.volume,
        prevVolume: 0,
        pip: false,
        showControls: true,
      })
    );
  });

  onCleanup(async () => {
    video.removeEventListener("canplaythrough", whenCanplaythrough);
    video.removeEventListener("waiting", whenWaiting);
    video.removeEventListener("play", whenPlayingChange);
    video.removeEventListener("pause", whenPlayingChange);
    video.removeEventListener("progress", whenProgressChange);
    video.removeEventListener("volumechange", whenVolumeChange);
    video.removeEventListener("enterpictureinpicture", whenPiP);
    video.removeEventListener("leavepictureinpicture", whenPiP);
    window.removeEventListener("beforeunload", onPlayerClose, true);
    window.removeEventListener("popstate", onPlayerClose, true);
    clearInterval(keepAlive);
    clearInterval(clock);
    await endPlayer();
  });

  const playerTitle = createMemo(() => {
    if (player.status !== 'mounted')
      return 'Loading';
    const context = player.context;
    if (context.data.type === 'MOVIES')
      return context.data.movie.name;
    else if (context.data.type === 'TV_SHOWS')
      return context.data.show.name;
    return 'Unknown'
  })

  return (
    <div class={clsx("w-full h-screen relative", !player.showControls && 'cursor-none')} onMouseMove={onMouseMove}>
      <video ref={video} class="w-full h-screen bg-black object-contain"></video>
      <Show
        when={player.status === "mounted" && player}
        fallback={<Loader></Loader>}
      >
        {(player) => (
          <>
            {player().buffering && <Loader></Loader>}
            <TogglePlaying playing={player().playing} togglePlay={togglePlay} />
            <Show when={player().showControls}>
              <div class="absolute top-0 left-0 w-full h-screen flex flex-col justify-between pointer-events-none">
                <div class="flex justify-between h-24 px-4 items-center pointer-events-auto bg-gradient-to-b from-beast-bg">
                  <Button variant="icon" onClick={goBack}>
                    <ArrowIcon />
                  </Button>
                  <div class="text-lg">{playerTitle()}</div>
                  <div>{time()}</div>
                </div>
                <div class="flex px-4 items-center h-24 gap-4 pointer-events-auto bg-gradient-to-t from-beast-bg">
                  <div
                    class="bg-beast-main flex justify-center items-center rounded-full p-2"
                    onClick={togglePlay}
                  >
                    {player().playing ? (
                      <PauseIcon size={40} />
                    ) : (
                      <PlayIcon size={40} />
                    )}
                  </div>
                  <div class="flex flex-grow pointer-events-auto">
                    <Slider
                      initialValue={player().absoluteSeek}
                      bufferValue={0}
                      duration={player().media.duration}
                      onSeek={seek}
                    ></Slider>
                  </div>
                  <div class="flex gap-4 pointer-events-auto">
                    {document.pictureInPictureEnabled && (
                      <PiPIcon
                        onClick={togglePiP}
                        class={clsx(player().pip && "fill-beast-main")}
                      ></PiPIcon>
                    )}
                    <SettingsControl
                      streams={player().media.streams}
                      settings={player().settings}
                      availableResolutions={player().availableResolutions}
                      updateSettings={updateSettings}
                    ></SettingsControl>
                    <VolumeControl
                      volume={player().volume}
                      toggleMute={toggleMute}
                      changeVolume={changeVolume}
                    ></VolumeControl>
                  </div>
                </div>
              </div>
            </Show>
          </>
        )}
      </Show>
    </div>
  );
}
