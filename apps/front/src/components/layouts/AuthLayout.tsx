import { ParentComponent } from "solid-js";

export const AuthLayout: ParentComponent = ({ children }) => {
  return (
    <div class="w-full h-screen flex flex-col justify-center items-center">
      <div class="bg-red-500">{children}</div>
    </div>
  );
};
