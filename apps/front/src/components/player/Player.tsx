import { createSignal, onCleanup, onMount } from "solid-js";
import { postPlayerEnd, postPlayerStart } from "../../api/endpoints/beast-endpoints";
import { StartedPlayerInfos } from "../../api/model";
import Hls from "hls.js";

interface SliderProps {
  initialValue: number;
  bufferValue: number;
  maxValue: number;
  onChange?: (value: number) => void;
}
const Slider = (props: SliderProps) => {
  const handleChange = (event: Event) => {
    if (props.onChange) {
      props.onChange(+(event.target as HTMLInputElement).value);
    }
  };

  const calculateBufferWidth = () => {
    return `${(props.bufferValue / props.maxValue) * 100}%`;
  };

  const calculateSeekWidth = () => {
    return `${(props.initialValue / props.maxValue) * 100}%`;
  };

  return (
    <div class="relative w-full h-2 bg-gray-200 rounded">
      <div
        class="absolute top-0 left-0 h-2 bg-blue-300 rounded"
        style={{ width: calculateBufferWidth() }}
      ></div>
      <div
        class="absolute top-0 left-0 h-2 bg-blue-600 rounded"
        style={{ width: calculateSeekWidth() }}
      ></div>
      <input
        type="range"
        min="0"
        max={props.maxValue}
        value={props.initialValue}
        onInput={handleChange}
        class="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
      />
    </div>
  );
};

export function Player({ mediaId }: { mediaId: string }) {
  // const { sendWithAck, send, onMessage, socket } = useWebsockets();
  const [playerStatus, setStatus] = createSignal<{
    time: number;
    duration: number;
    buffer: number;
  }>({ time: 0, duration: 0, buffer: 0 });

  let video: HTMLVideoElement;
  let hls = new Hls();
  let player: StartedPlayerInfos;
 
  const timeupdate = () => {
    setStatus({ time: player.settings.seek + video.currentTime, duration: 1200, buffer: 0 });
  }

  const closePlayer = async () => {
    hls.destroy();
    await postPlayerEnd({ id: player.id })
  }

  const initHls = () => {
    const source = `http://localhost:3000/public/transcodes/${player.id}/master.m3u8`;
    hls = new Hls();
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      console.log('video and hls.js are now bound together !');
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level',
      );
    });
    hls.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log('fatal media error encountered, try to recover', data);
            // hls.recoverMediaError();
            break;
          case Hls.ErrorTypes.NETWORK_ERROR:
            console.error('fatal network error encountered', data);
            break;
          default:
            // cannot recover
            hls.destroy();
            closePlayer()
            break;
        }
      }
    });
    hls.loadSource(source);
    hls.attachMedia(video);
  }

  onMount(async () => {
    if (import.meta.hot) {
      import.meta.hot.dispose(async (data) => {
        // cleanup side effect
        await closePlayer()
      })
    }

    video.addEventListener("timeupdate", timeupdate);
    window.addEventListener('beforeunload', closePlayer, true)
    window.addEventListener('popstate', closePlayer, true);
    player = await postPlayerStart({ mediaId, seek: 0 })
    initHls();
  });

  const seek = async (seek: number) => {
    await closePlayer();
    player = await postPlayerStart({ mediaId, seek })
    initHls();
    video.autoplay = true;
  }

  onCleanup(async () => {
    await closePlayer();
    video.removeEventListener("timeupdate", timeupdate);
    window.removeEventListener('beforeunload', closePlayer, true)
    window.removeEventListener('popstate', closePlayer, true);
  })

  return (
    <div  class="relative">
      <video ref={video!} class="w-full h-screen"></video>
      <div class="absolute bottom-0 left-0 h-20 flex flex-col w-full">
        <div>
          <button onClick={() => video?.play()}>PLAY</button>
          <button onClick={() => video?.pause()}>PAUSE</button>
          {playerStatus().time}
        </div>
        <Slider
            initialValue={playerStatus().time}
            bufferValue={0}
            maxValue={playerStatus().duration}
            onChange={seek}
        ></Slider>
      </div>
    </div>
  );
}
