import { useParams } from "@solidjs/router";
import { Component, Show } from "solid-js";
import { Button } from "../commons/Button";
import { createGetShowEpisode } from "../../api/endpoints/beast-endpoints";

export const Episode: Component = () => {
    const params = useParams<{ id: string }>();
    const episode = createGetShowEpisode(() => ({ params: { episodeId: params.id } }))

    return (
        <div>
            <Show when={episode.data} fallback="Loading">
                <div class="flex flex-col w-full px-2">
                    <div class="text-md">{episode.data?.name}</div>
                    <div class="text-sm">{episode.data?.overview}</div>
                    <Button to={`/media/${episode.data?.mediaId}`}>PLAY</Button>
                </div>
            </Show>
        </div>
    )
}