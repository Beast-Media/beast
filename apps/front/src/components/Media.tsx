import { useParams } from "@solidjs/router";
import { Component, Show } from "solid-js";
import { Player } from "./player/Player";
import { useWebsockets } from "../hooks/websockets";

export const Media: Component = () => {
    const { id } = useParams<{ id: string }>();
    const { state } = useWebsockets();

    return (
        <Show when={state().status === 'connected'}>
            <div class="w-full h-screen">
                <Player mediaId={id}></Player>
            </div>
        </Show>
    )
}