import { createSignal, onCleanup, onMount } from "solid-js";
import hls, { TimelineController } from 'hls.js'
import 'plyr/dist/plyr.css'
import { useWebsockets } from "../../hooks/websockets";
import { postPlayerEnd, postPlayerSeek, postPlayerStart } from "../../api/endpoints/beast-endpoints";
import Hls from "hls.js";
import { StartPlayerResponse } from "../../api/model";

interface SliderProps {
  initialValue: number;
  bufferValue: number;
  maxValue: number;
  onChange?: (value: number) => void;
}
const Slider = (props: SliderProps) => {
  const [value, setValue] = createSignal(props.initialValue || 0);

  const handleChange = (event: Event) => {
    const newValue = +(event.target as HTMLInputElement).value;
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const calculateBufferWidth = () => {
    return `${(props.bufferValue / props.maxValue) * 100}%`;
  };

  const calculateSeekWidth = () => {
    return `${(value() / props.maxValue) * 100}%`;
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
        value={value()}
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
  let player: StartPlayerResponse;
 

  const closePlayer = async () => {
    await postPlayerEnd({ id: player.id })
  }

  const initHls = () => {
    console.log('init')
    hls = new Hls();
    const source = `http://localhost:3000/public/transcodes/${player.id}/master.m3u8`;
    hls.on(Hls.Events.MEDIA_ATTACHED, function (a, ab) {
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
            // All retries and media options have been exhausted.
            // Immediately trying to restart loading could cause loop loading.
            // Consider modifying loading policies to best fit your asset and network
            // conditions (manifestLoadPolicy, playlistLoadPolicy, fragLoadPolicy).
            break;
          default:
            // cannot recover
            hls.destroy();
            break;
        }
      }
    });
    hls.loadSource(source);
    hls.attachMedia(video);
    video.autoplay = true;
  }

  if (import.meta.hot) {
    import.meta.hot.dispose(async (data) => {
      // cleanup side effect
      await closePlayer()
    })
  }

  onMount(async () => {
    if (!video) return;

    video.addEventListener("timeupdate", (ev) => {
      if (!video) return;
      console.log(video.currentTime)
      setStatus({ time: video.currentTime, duration: 1200, buffer: 0 });
    });

    window.addEventListener('beforeunload', closePlayer, true)
    window.addEventListener('popstate', closePlayer, true);
    player = await postPlayerStart({ media: mediaId, seek: 0 })
    console.log(player.duration)
    setStatus({ time: video.currentTime, duration: player.duration, buffer: 0 });
    // await new Promise((resolve) => setTimeout(resolve, 4000));
    initHls();
  });

  const seek = async (seek: number) => {
    console.log(seek)
    hls.destroy();
    await closePlayer();
    player = await postPlayerStart({ media: mediaId, seek })
    // dash.attachSource(`http://localhost:3000/public/transcodes/${playerId}/video.mpd`, 0)
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    initHls();
  }

  onCleanup(() => {
    hls.destroy();
    window.removeEventListener('beforeunload', closePlayer, true)
    window.removeEventListener('popstate', closePlayer, true);
    // player.destroy()
  })

  return (
    <div  class="relative">
      <video ref={video!} class="w-full h-screen"></video>
      <div class="absolute bottom-0 left-0 h-20 flex flex-col w-full">
        <div>
          <button onClick={() => video?.play()}>PLAY</button>
          <button onClick={() => video?.pause()}>PAUSE</button>
        </div>
        <Slider
            initialValue={playerStatus().time}
            bufferValue={0}
            maxValue={playerStatus().duration}
            onChange={seek}
        ></Slider>
      </div>
    
      {/* <video ref={video} controls class="w-full h-screen" autoplay muted></video> */}
      {/* <div class="flex flex-col w-full">
        <button onClick={() => video?.play()}>PLAY</button>
        <button onClick={() => video?.pause()}>PAUSE</button>
        <Slider
          initialValue={playerStatus().time}
          bufferValue={0}
          maxValue={playerStatus().duration}
          // onChange={onSeek}
        ></Slider>
      </div> */}
    </div>
  );
}
