

import { useParams } from "@solidjs/router";
import { Component, For, Show } from "solid-js";
import { Card } from "../commons/Card";
import { createGetShowSeason } from "../../api/endpoints/beast-endpoints";

export const Season: Component = () => {
    const params = useParams<{ id: string }>();

    const season = createGetShowSeason(() => ({ params: { seasonId: params.id } }))

    return (
        <div>
            <Show when={season.data} fallback="Loading">
                <div class="flex flex-col w-full px-2">
                    <div class="text-md">{season.data?.name}</div>
                    <div class="text-sm">{season.data?.overview}</div>
                    <div class="flex flex-wrap gap-3">
                        <For each={season.data?.episodes.sort(({ episode_number: a }, { episode_number: b }) => a - b)}>
                            {(episode) => <Card name={episode.name} to={`/episode/${episode.id}`} picture={episode.images.length === 3 ? episode.images[2] : null} aspect="landscape"></Card>}
                        </For>
                    </div>
                </div>
            </Show>
        </div>
    )
}