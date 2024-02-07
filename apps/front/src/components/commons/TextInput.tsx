import clsx from "clsx";
import { JSX, createMemo, mergeProps, splitProps } from "solid-js";

type TextInputProps = {
  variant?: 'primary' | 'secondary',
  name: string;
  type: "text" | "email" | "tel" | "password" | "url" | "date";
  label?: string;
  placeholder?: string;
  value: string | undefined;
  error: string;
  required?: boolean;
  ref: (element: HTMLInputElement) => void;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
};

export function TextInput(props: TextInputProps) {
  const [, inputProps] = splitProps(props, ["value", "label", "error"]);
  const merged = mergeProps({ variant: 'primary' } satisfies Partial<TextInputProps>, props);

  const variantClasses = createMemo(() => {
    const varantMap: Record<Exclude<TextInputProps['variant'], undefined>, string> = {
      primary: clsx("bg-beast-bg rounded-md p-2 placeholder:text-beast-bg-2"),
      secondary: clsx("bg-beast-bg-1 rounded-md p-2 placeholder:text-beast-bg-3"),
    }
    return clsx(varantMap[merged.variant], merged.error && 'outline-1 outline outline-beast-accent-error');
  })

  return (
    <div class="flex flex-col gap-1 py-1">
      {props.label && (
        <label for={props.name}>
          {props.label} {props.required && <span>*</span>}
        </label>
      )}
      <input
        {...inputProps}
        class={clsx(variantClasses())}
        id={props.name}
        value={props.value || ""}
        required={!!props.required}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
      />
      {props.error && <div id={`${props.name}-error`} class="text-beast-accent-error">{props.error}</div>}
    </div>
  );
}
