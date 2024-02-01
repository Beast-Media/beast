import { Component, createEffect, createSignal } from "solid-js";

export const Slider: Component<{
  initialValue: number;
  bufferValue: number;
  duration: number;
  onSeek: (position: number) => void;
}> = (props) => {
  let slider!: HTMLDivElement;
  const [drag, setDrag] = createSignal(false);
  const [seek, setSeek] = createSignal(props.initialValue);

  createEffect(() => {
    setSeek(props.initialValue);
  });

  const calculateBufferWidth = () => {
    return `${(props.bufferValue / props.duration) * 100}%`;
  };

  const calculateSeekWidth = () => {
    return `${(seek() / props.duration) * 100}%`;
  };

  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setDrag(true);

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    const width = slider.getBoundingClientRect().width;
    const newTime = (e.offsetX * props.duration) / width;
    setSeek(newTime);
  };

  const onMouseUp = () => {
    setDrag(false);

    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
    props.onSeek(seek());
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!drag()) return;
    const { width, left } = slider.getBoundingClientRect();
    const offset = Math.min(width, Math.max(0, e.clientX - left));
    const seek = (offset * props.duration) / width;
    setSeek(seek);
  };

  return (
    <div
      class="relative w-full h-2 bg-beast-bg-4 rounded-full"
      ref={slider}
      onMouseDown={onMouseDown}
    >
      <div
        class="absolute top-0 left-0 h-2 bg-beast-main-3 rounded-full"
        style={{ width: calculateBufferWidth() }}
      ></div>
      <div
        class="absolute top-0 left-0 h-2 bg-beast-main rounded-full"
        style={{ width: calculateSeekWidth() }}
      ></div>
      <div
        class="absolute h-[16px] w-[16px] -top-[4px] bg-beast-bg-4 rounded-full shadow-md"
        style={{ left: `calc(${calculateSeekWidth()} - 8px)` }}
      ></div>
    </div>
  );
};
