import { A } from "@solidjs/router";
import clsx from "clsx";
import { ComponentProps, ParentComponent } from "solid-js";

export const Button: ParentComponent<ComponentProps<"button"> & { to?: string }> = ({ children, to, ...props }) => {
  if (to) {
    return <A href={to} class={clsx(props.class, "p-2 bg-gray-500 hover:bg-gray-300 rounded-md")}>{children}</A>
  }

  return (
    <button {...props} class={clsx(props.class, "p-2 bg-gray-500 hover:bg-gray-300 rounded-md")}>
      {children}
    </button>
  );
};
