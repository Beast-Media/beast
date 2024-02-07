import { ParentComponent } from "solid-js";
import { TopBar } from "../TopBar";
import { SettingsSidebar } from "../settings/SettingsSidebar";

export const SettingsLayout: ParentComponent = ({ children }) => {
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
        <div style={{ "grid-area": 's' }} class="overflow-y-auto w-full h-full p-2 bg-beast-bg-1">
          <SettingsSidebar></SettingsSidebar>
        </div>
        <div style={{ "grid-area": 'c' }} class="overflow-y-auto">
          {children}
        </div>
      </div>
  );
};
