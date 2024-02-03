import { Component } from "solid-js";
import { LogoFull } from "./commons/Logo";
import { MenuIcon } from "./commons/Icons";


export const TopBar: Component = (props) => {
    return (
        <div class="flex h-full w-full justify-between bg-beast-bg-1 items-center shadow-lg">
            <div class="flex gap-3 items-center px-3">
                <MenuIcon size={40}></MenuIcon>
                <div class="fill-beast-main"><LogoFull /></div>
            </div>
            <div class="">SEARCH</div>
            <div class="">SETTINGS</div>
        </div>
    )

}