import { createSignal, onCleanup, onMount } from "solid-js";
import { useWebsockets } from "../../hooks/websockets";

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

  const { send } = useWebsockets();

  
  let video: HTMLVideoElement | undefined;
  const [playerStatus, setStatus] = createSignal<{
    time: number;
    duration: number;
    buffer: number;
  }>({ time: 0, duration: 0, buffer: 0 });

  const createPlayer = () => {
    if (!video) return;
    video.addEventListener("timeupdate", (ev) => {
      if (!video) return;
      setStatus({ time: video.currentTime, duration: 5000, buffer: 0 });
    });
  };

  const createMediaStream = () => {
    if (!window.MediaSource) {
      throw new Error("MediaSource API is not supported in this browser");
    }
    const mediaSource = new MediaSource();
    return URL.createObjectURL(mediaSource);
  }

  onMount(() => {
    if (!video) return;
    send({ data: { type: 'client/player/start', mediaId } })

    createPlayer();
    video.src = createMediaStream();
  });

  onCleanup(() => {
    send({ data: { type: 'client/player/end' } })
  })

  // const onSeek = (pos: number) => {
  //   if (!video) return;
  //   console.log(pos);
  //   video.src = `http://172.30.21.127:3000/media/play?seek=${video.duration * (pos / 100)}&media=${mediaId}`;
  //   video.play();
  // };

  return (
    <div>
      <video ref={video}></video>
      <div class="flex flex-col w-full">
        <button onClick={() => video?.play()}>PLAY</button>
        <button onClick={() => video?.pause()}>PAUSE</button>
        <Slider
          initialValue={playerStatus().time}
          bufferValue={0}
          maxValue={playerStatus().duration}
          // onChange={onSeek}
        ></Slider>
      </div>
    </div>
  );
}
