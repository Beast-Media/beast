import { ParentComponent, Show } from "solid-js";
import { Sidebar } from "../Sidebar";
import { useWebsockets } from "../../hooks/websockets";

export const MainLayout: ParentComponent = ({ children }) => {
  const { state } = useWebsockets();

  return (
    // <Show when={state().status === 'connected'} fallback="LOADING">
      <div class="flex w-full">
        <div class="flex flex-col h-screen bg-red-600 max-w-[200px] w-full">
          <Sidebar></Sidebar>
        </div>
        <div class="flex flex-col h-screen bg-blue-400 flex-grow">
          <div class="h-full overflow-y-scroll">{children}</div>
        </div>
      </div>
    // </Show>
  );
};
