import { useParams } from "@solidjs/router";
import { Component, For, Show } from "solid-js";
import { Card } from "../commons/Card";
import { createGetShow } from "../../api/endpoints/beast-endpoints";

export const TVShow: Component = () => {
    const { id } = useParams<{ id: string }>();

    const show = createGetShow(() => ({ params: { showId: id } }))

    return (
        <div>
            <Show when={show.data} fallback="Loading">
                <div class="flex flex-col w-full px-2">
                    <div class="text-md">{show.data?.name}</div>
                    <div class="text-sm">{show.data?.overview}</div>
                    <div class="flex flex-wrap gap-3">
                        <For each={show.data?.seasons}>
                            {(season) => <Card name={season.name} to={`/season/${season.id}`} picture={season.images.length === 3 ? season.images[2] : null}></Card>}
                        </For>
                    </div>
                </div>
            </Show>
        </div>
    )
}