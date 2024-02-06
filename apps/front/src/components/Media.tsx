import { useParams } from "@solidjs/router";
import { Component } from "solid-js";
import { Player } from "./player/Player";

export const Media: Component = () => {
    const params = useParams<{ id: string }>();

    return (
        <div class="w-full h-screen">
            <Player mediaId={params.id}></Player>
        </div>
    )
}