import { A } from "@solidjs/router";
import clsx from "clsx";
import { ComponentProps, ParentComponent } from "solid-js";

export const Button: ParentComponent<ComponentProps<"button"> & { to?: string }> = (props) => {
  if (props.to) {
    return <A href={props.to} class={clsx(props.class, "p-2 bg-gray-500 hover:bg-gray-300 rounded-md")}>{props.children}</A>
  }

  return (
    <button {...props} class={clsx(props.class, "p-2 bg-gray-500 hover:bg-gray-300 rounded-md")}>
      {props.children}
    </button>
  );
};
