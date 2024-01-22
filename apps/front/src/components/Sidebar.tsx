import { Component, For, Suspense } from "solid-js";
import { createGetLibraryAll } from "../api/endpoints/beast-endpoints";
import { A } from "@solidjs/router";

export const Sidebar: Component = () => {
  const libraries = createGetLibraryAll(() => ({}));

  return (
    <div class="w-full p-2">
      <h1 class="text-lg font-bold uppercase">Beast</h1>
      <Suspense fallback="Loading">
        <For each={libraries.data}>
          {
            library => <A href={`/library/${library.id}`} class="bg-gray-500 hover:bg-gray-400 p-2 rounded-md block">{library.name}</A >
          }
        </For>
      </Suspense>
    </div>
  );
};
