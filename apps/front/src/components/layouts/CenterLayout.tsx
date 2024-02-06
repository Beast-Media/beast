import { ParentComponent } from "solid-js";
import { LogoFull } from "../commons/Logo";

export const CenterLayout: ParentComponent = ({ children }) => {
  return (
    <div class="relative w-full h-screen">
      <div class="w-full h-screen flex flex-col justify-center items-center">
        <div class="flex flex-col gap-4">
          <div class="flex justify-center fill-beast-main"><LogoFull width={300}></LogoFull></div>
          <div class="bg-beast-bg-1 p-4 rounded-lg shadow-lg">{children}</div>
        </div>
      </div>
      <div class="absolute top-0 left-0">
        {/** ADD IMAGES */}
      </div>
    </div>
   
  );
};
