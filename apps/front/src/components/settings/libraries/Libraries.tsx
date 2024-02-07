import { Component, For, Switch } from "solid-js";
import { Button } from "../../commons/Button";
import { createGetLibraryAll, deleteLibrary } from "../../../api/endpoints/beast-endpoints";
import { Match } from "solid-js";
import { DeleteIcon, MovieIcon, TVIcon } from "../../commons/Icons";
import { LibraryDTO } from "../../../api/model";

export const Libraries: Component = () => {
  const libraries = createGetLibraryAll(() => ({}));

  const onDeleteLib = async (libraryId: LibraryDTO['id']) => {
    await deleteLibrary({ libraryId });
    libraries.refetch();
  }

  return (
    <div class="flex flex-col gap-4 w-full p-4">
      <div class="flex justify-between">
        <div class="text-md">Libraries Settings</div>
        <Button to="/settings/libraries/new">ADD LIBRARY</Button>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <For each={libraries.data}>
          {(library) => (
            <div
              class="bg-beast-bg-2 fill-beast-bg-4 p-2 rounded-md flex justify-between items-center gap-2"
            >
                <Switch>
                  <Match when={library.type === "MOVIES"}>
                    <MovieIcon></MovieIcon>
                  </Match>
                  <Match when={library.type === "TV_SHOWS"}>
                    <TVIcon></TVIcon>
                  </Match>
                </Switch>
                {library.name} ({library.path})
                <Button variant="icon" onClick={() => onDeleteLib(library.id)}><DeleteIcon/></Button>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
