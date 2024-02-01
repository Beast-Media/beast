import clsx from "clsx";
import { Component, createSignal } from "solid-js";
import { MuteIcon, VolumeIcon } from "../commons/Icons";

export const VolumeControl: Component<{
  volume: number;
  toggleMute: () => void;
  changeVolume: (volume: number) => void;
}> = (props) => {
  let slider!: HTMLDivElement;

  const [drag, setDrag] = createSignal(false);

  const onWheel = (e: WheelEvent) => {
    props.changeVolume(
      Math.min(1, Math.max(0, props.volume - e.deltaY / 1000))
    );
  };

  const updateVolume = (clientY: number) => {
    const { height, top } = slider.getBoundingClientRect();
    const offset = Math.min(height, Math.max(0, height - (clientY - top)));
    props.changeVolume(offset / height);
  };

  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setDrag(true);

    updateVolume(e.clientY);

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
  };

  const onMouseUp = () => {
    setDrag(false);

    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!drag()) return;
    updateVolume(e.clientY);
  };

  return (
    <div class="group relative" onWheel={onWheel}>
      <div
        class={clsx(
          "w-full group-hover:visible bottom-0 pb-12 absolute flex justify-center",
          drag() ? "visible" : "invisible"
        )}
      >
        <div class="h-32 rounded-full bg-beast-bg flex justify-center p-2">
          <div class="relative" ref={slider} onMouseDown={onMouseDown}>
            <div class="h-full w-2 bg-beast-bg-4 rounded-full"></div>
            <div
              class="w-2 bg-beast-main absolute bottom-0 rounded-full"
              style={{ height: `${props.volume * 100}%` }}
            ></div>
            <div class="h-full w-2 absolute bottom-0 opacity-0 rounded-full"></div>
          </div>
        </div>
      </div>
      <div class="relative" onClick={props.toggleMute}>
        {props.volume === 0 ? <MuteIcon></MuteIcon> : <VolumeIcon></VolumeIcon>}
      </div>
    </div>
  );
};
