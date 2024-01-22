import { ParentComponent } from "solid-js";
import { Sidebar } from "../Sidebar";

export const MainLayout: ParentComponent = ({ children }) => {
  return (
    <div class="flex w-full">
      <div class="flex flex-col h-screen bg-red-600 max-w-[200px] w-full">
        <Sidebar></Sidebar>
      </div>
      <div class="flex flex-col h-screen bg-blue-400 flex-grow">
        <div class="h-full overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};
