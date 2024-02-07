import { Component } from "solid-js";
import { Button } from "../commons/Button";

export const SettingsSidebar: Component = () => {
    return (
        <>
            <Button to={`/settings/libraries`} variant="secondary" block class="w-full">
              Libraries
            </Button>
        </>
    )
}