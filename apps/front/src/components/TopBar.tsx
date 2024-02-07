import { Component } from "solid-js";
import { LogoFull } from "./commons/Logo";
import { HomeIcon, MenuIcon, SettingsIcon } from "./commons/Icons";
import { Button } from "./commons/Button";

export const TopBar: Component = () => {
    return (
        <div class="flex h-full w-full justify-between bg-beast-bg-1 items-center shadow-lg">
            <div class="flex gap-3 items-center px-3">
                <Button variant="icon">
                    <MenuIcon></MenuIcon>
                </Button>
                <Button variant="icon" to="/">
                    <HomeIcon></HomeIcon>
                </Button>
                <div class="fill-beast-main"><LogoFull /></div>
            </div>
            <div class="">
                {/* <TextInput></TextInput> */}
            </div>
            <div class="">
                <Button variant="icon" to="/settings">
                    <SettingsIcon></SettingsIcon>
                </Button>
            </div>
        </div>
    )
}