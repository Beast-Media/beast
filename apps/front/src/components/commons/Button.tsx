import { A } from "@solidjs/router";
import clsx from "clsx";
import { ComponentProps, ParentComponent, createMemo, mergeProps } from "solid-js";

interface BtnProps extends ComponentProps<"button"> { 
  to?: string, 
  variant?: 'primary' | 'secondary' | 'icon',
  block?: boolean
}

export const Button: ParentComponent<BtnProps> = (props) => {
  const merged = mergeProps({ variant: 'primary', block: false, type: 'button' } satisfies BtnProps, props);

  const variantClasses = createMemo(() => {
    const varantMap: Record<Exclude<BtnProps['variant'], undefined>, string> = {
      primary: clsx('rounded-md bg-beast-main hover:bg-beast-main p-2'),
      secondary: clsx('rounded-md bg-beast-bg-2 hover:bg-beast-bg-3 p-2'),
      icon: clsx('rounded-full p-2 flex justify-center items-center fill-beast-font hover:bg-beast-bg-2'),
    }
    return clsx(varantMap[merged.variant], merged.block && `block`);
  })

  if (merged.to) {
    return <A href={merged.to} class={clsx(variantClasses(), merged.class)}>{merged.children}</A>
  }

  return (
    <button {...merged} class={clsx(variantClasses(), merged.class)}>
      {merged.children}
    </button>
  );
};
