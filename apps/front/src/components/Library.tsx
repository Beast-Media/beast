import { useParams } from "@solidjs/router";
import { Component, For, Show, Suspense } from "solid-js";
import { createGetLibrary, createGetLibraryContent, } from "../api/endpoints/beast-endpoints";
import { Card } from "./commons/Card";

export const Library: Component = () => {
    const { id } = useParams<{ id: string }>();

    const library = createGetLibrary(() => ({ params: { libraryId: id } }))
    const libraryContent = createGetLibraryContent(() => ({ params: { libraryId: id } }))

    return (
        <div>
            <Suspense fallback="Loading">
                <div class="flex flex-col w-full px-2">
                    <div class="text-md">{library.data?.name}</div>
                    <div class="flex flex-wrap gap-3">
                        <Show when={libraryContent.data} fallback="Loading">
                            {(libContent) => 
                                <For each={libContent()}>
                                    {(item) => item.type === 'TV_SHOWS' ? 
                                    <Card name={item.data.name} to={`/show/${item.data.id}`} picture={item.data.images.length === 3 ? item.data.images[2] : null}/> : 
                                    <Card name={item.data.name} to={`/movie/${item.data.id}`} />}
                                </For>
                            }
                        </Show>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}