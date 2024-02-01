import {
  Component,
  For,
  ParentComponent,
  Show,
  createMemo,
  onCleanup,
  onMount,
} from "solid-js";
import { MediaWithStreamsStreamsItem, PlayerSettings } from "../../api/model";
import { ArrowIcon, SettingsIcon } from "../commons/Icons";
import { createSignal } from "solid-js";
import clsx from "clsx";

const SettingType: Component<{
  title: string;
  label: string;
  value: string;
  onSelect: (label: string) => void;
}> = (props) => (
  <div
    class="flex justify-between text-nowrap gap-6 hover:bg-beast-bg-2 rounded-md px-4 py-2"
    onClick={() => props.onSelect(props.label)}
  >
    <div>{props.title}</div>
    <div class="text-nowrap max-w-32 text-ellipsis overflow-clip">{props.value}</div>
  </div>
);

const SettingMenu: ParentComponent<{
  title: string;
  label: string;
  selected: string | null;
  close: () => void;
}> = (props) => (
  <div
    class={clsx(
      "flex flex-col gap-4",
      props.selected === props.label ? "visible" : "hidden"
    )}
  >
    <div onClick={props.close} class="flex gap-3 hover:gap-5 transition-all">
      <ArrowIcon size={20} /> {props.title}
    </div>
    <div class="max-h-64 overflow-y-auto p-2 flex flex-col gap-2">
      {props.children}
    </div>
  </div>
);

export const SettingsControl: Component<{
  settings: PlayerSettings;
  streams: MediaWithStreamsStreamsItem[];
  updateSettings: (settings: PlayerSettings) => void;
}> = (props) => {
  let settingsDiv!: HTMLDivElement;

  const [open, setOpen] = createSignal(false);
  const [selectedSetting, setSelectedSetting] = createSignal<string | null>(
    null
  );

  const closeSettings = () => {
    setOpen(false);
    setSelectedSetting(null);
  };

  const toggleSettings = () => {
    const isOpen = open();

    if (isOpen) closeSettings();
    else setOpen(true);
  };

  const onGlobalClick = (e: MouseEvent) => {
    if (open() && e.target && !settingsDiv.contains(e.target as Node)) {
      e.preventDefault();
      e.stopPropagation();
      closeSettings();
    }
  };

  onMount(() => {
    document.addEventListener("click", onGlobalClick);
  });

  onCleanup(() => {
    document.removeEventListener("click", onGlobalClick);
  });

  const closeSetting = () => setSelectedSetting(null);

  const chooseStream = (stream: MediaWithStreamsStreamsItem) => {
    const foundStream = props.settings.streams.findIndex(
      ({ type }) => stream.type === type
    );
    if (foundStream !== -1) {
      props.settings.streams.splice(foundStream, 1);
    }

    if (
      stream.type === "video" ||
      stream.type === "subtitle" ||
      stream.type === "audio"
    )
      props.settings.streams.push({
        type: stream.type,
        index: stream.streamIndex,
      });
    props.updateSettings(props.settings);
    closeSettings();
  };

  const foundAudioTrack = createMemo(
    () =>
      props.streams.find(
        ({ streamIndex }) =>
          props.settings.streams.find(({ type }) => type === "audio")?.index ===
          streamIndex
      )?.name
  );

  const foundSubtitleTrack = createMemo(
    () =>
      props.streams.find(
        ({ streamIndex }) =>
          props.settings.streams.find(({ type }) => type === "subtitle")
            ?.index === streamIndex
      )?.name
  );

  return (
    <div class="relative" ref={settingsDiv}>
      <div
        class={clsx(
          "bottom-12 -translate-x-full p-4 ml-8 absolute bg-beast-bg rounded-lg  overflow-clip",
          !open() && "invisible"
        )}
      >
        <div class="overflow-hidden relative">
          <div
            class={clsx("flex flex-col gap-1 transition-transform")}
            style={{
              transform:
                selectedSetting() !== null ? "translateX(-100%)" : undefined,
              height: selectedSetting() !== null ? 0 : undefined,
            }}
          >
            <Show when={foundAudioTrack()}>
              {(track) => (
                <SettingType
                  title="Audio Track"
                  value={track()}
                  label="audio"
                  onSelect={setSelectedSetting}
                ></SettingType>
              )}
            </Show>
            <Show when={foundSubtitleTrack()}>
              {(track) => (
                <SettingType
                  title="Subtitles"
                  value={track()}
                  label="subtitle"
                  onSelect={setSelectedSetting}
                ></SettingType>
              )}
            </Show>
            {/* <SettingType
              title="Quality"
              value="Original"
              label="quality"
              onSelect={setSelectedSetting}
            ></SettingType> */}
          </div>
          <div
            class="w-full transition-transform"
            style={{
              transform:
                selectedSetting() !== null
                  ? "translateX(0%)"
                  : "translateX(100%)",
            }}
          >
            <SettingMenu
              selected={selectedSetting()}
              title="Audio Track"
              label="audio"
              close={closeSetting}
            >
              <For each={props.streams.filter(({ type }) => type === "audio")}>
                {(stream) => (
                  <div
                    class="text-nowrap max-w-64 text-ellipsis overflow-clip hover:underline"
                    onClick={() => chooseStream(stream)}
                    title={stream.name}
                  >
                    {stream.name}
                  </div>
                )}
              </For>
            </SettingMenu>
            <SettingMenu
              title="Subtitles"
              label="subtitle"
              close={closeSetting}
              selected={selectedSetting()}
            >
              <For
                each={props.streams.filter(({ type }) => type === "subtitle")}
              >
                {(stream) => (
                  <div
                    class="text-nowrap max-w-64 text-ellipsis overflow-clip hover:underline"
                    onClick={() => chooseStream(stream)}
                    title={stream.name}
                  >
                    {stream.name}
                  </div>
                )}
              </For>
            </SettingMenu>
            <SettingMenu
              title="Quality"
              label="quality"
              close={closeSetting}
              selected={selectedSetting()}
            >
              <div>Original</div>
              <div>1080p</div>
              <div>720p</div>
              <div>480p</div>
            </SettingMenu>
          </div>
        </div>
      </div>
      <div class="relative" onClick={toggleSettings}>
        <SettingsIcon class={clsx(open() && "fill-beast-main")}></SettingsIcon>
      </div>
    </div>
  );
};
