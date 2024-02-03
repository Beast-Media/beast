import { Component, For, Match, Suspense, Switch } from "solid-js";
import { createGetLibraryAll } from "../api/endpoints/beast-endpoints";
import { A } from "@solidjs/router";
import { MovieIcon, TVIcon } from "./commons/Icons";

export const Sidebar: Component = () => {
  const libraries = createGetLibraryAll(() => ({}));

  return (
    <div class="w-full h-full p-2 bg-beast-bg-1 flex flex-col gap-2">
      Libraries
      <Suspense fallback="Loading">
        <For each={libraries.data}>
          {
            library => <A href={`/library/${library.id}`} class="bg-beast-bg-2 hover:text-beast-main fill-beast-bg-4 hover:fill-beast-main p-2 rounded-md flex gap-2 items-center">
              <Switch>
                <Match when={library.type === 'MOVIES'}><MovieIcon></MovieIcon></Match>
                <Match when={library.type === 'TV_SHOWS'}><TVIcon></TVIcon></Match>
              </Switch>
              {library.name}
            </A>
          }
        </For>
      </Suspense>
    </div>
  );
};
