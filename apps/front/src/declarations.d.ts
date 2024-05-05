/// <reference types="user-agent-data-types" />

declare module "swipe-listener";

type Copy<T> = { [K in keyof T]: T[K] };

interface Window {
    __TAURI__: unknown;
}
