import { useParams } from "@solidjs/router";
import { Component, Show } from "solid-js";
import { createGetMovie } from "../../api/endpoints/beast-endpoints";
import { Button } from "../commons/Button";

export const Movie: Component = () => {
    const params = useParams<{ id: string }>();
    const movie = createGetMovie(() => ({ params: { movieId: params.id } }));

    return (
        <>
            <Show when={movie.data} fallback="Loading">
                <div class="flex flex-col w-full px-2">
                    <div class="text-md">{movie.data?.name}</div>
                    <div class="text-sm">{movie.data?.overview}</div>
                    <Button to={`/media/${movie.data?.mediaId}`}>PLAY</Button>
                </div>
            </Show>
        </>
    )
} 