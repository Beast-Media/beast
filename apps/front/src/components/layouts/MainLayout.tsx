import { ParentComponent } from "solid-js";
import { Sidebar } from "../Sidebar";
import { TopBar } from "../TopBar";

export const MainLayout: ParentComponent = ({ children }) => {
  return (
      <div class="grid w-full h-screen" style={{ 
        "grid-template": `
          "t t" 60px
          "s c" calc(100% - 60px)
          / 200px calc(100% - 200px)
        ` 
        }}>
        <div style={{ "grid-area": 't' }}>
          <TopBar></TopBar>
        </div>
        <div style={{ "grid-area": 's' }} class="overflow-y-auto">
          <Sidebar></Sidebar>
        </div>
        <div style={{ "grid-area": 'c' }} class="overflow-y-auto">
          {children}
        </div>
      </div>
  );
};
