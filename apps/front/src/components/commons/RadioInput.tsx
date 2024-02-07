import clsx from "clsx";
import { JSX, ParentComponent } from "solid-js";

export interface RadioProps {
    selectedValue?: string;
    value: string | undefined;
    error: string;

    ref: (element: HTMLInputElement) => void;
    onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
    onChange: JSX.EventHandler<HTMLInputElement, Event>;
    onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
}

export const RadioInput: ParentComponent<RadioProps> = (props) => {
    return (
        <label class={clsx("bg-beast-bg hover:bg-beast-bg-3 rounded-md p-4", props.selectedValue === props.value && 'bg-beast-bg-2', props.error && 'outline outline-1 outline-beast-accent-error')}>
            <input {...props} type="radio" value={props.value} class="hidden"></input> 
            {props.children}
        </label>
    )
}