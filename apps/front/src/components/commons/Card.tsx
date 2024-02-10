import { A } from "@solidjs/router";
import clsx from "clsx";
import { Component, Show } from "solid-js";
import { getApiUrl } from "../../hooks/url";

export const Card: Component<{ name: string; to: string, picture?: string | null, aspect?: 'portrait' | 'landscape'}> = ({ name, to, picture, aspect = 'portrait' }) => {
    const baseUrl = getApiUrl();
    
    return (
        <A href={to} class={clsx("flex flex-col group ", aspect == 'landscape' && 'w-64 h-40', aspect == 'portrait' && 'w-40 h-64')}>
            <div class={clsx("w-full bg-beast-bg h-64 rounded-md overflow-clip group-hover:bg-beast-bg-1 transition-colors duration-200")}>
                <Show when={picture}>
                    {(picture) => <img src={`${baseUrl}/public/${picture()}`} class="w-full h-full object-cover"></img>} 
                </Show>
            </div>
            <div class="group-hover:underline text-nowrap overflow-ellipsis overflow-clip">{name}</div>
        </A>
    )
};