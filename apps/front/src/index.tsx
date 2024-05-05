/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { getPlatform } from "./hooks/platform";

import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { ParentComponent } from "solid-js";
import { WebsocketContextC, provideWebsockets } from "./hooks/websockets";

const root = document.getElementById("root");

const queryClient = new QueryClient({});


console.log(getPlatform());

const WebsocketContextProvider: ParentComponent = (props) => {
  const player = provideWebsockets();
  return <WebsocketContextC.Provider value={player}>
      {props.children}
  </WebsocketContextC.Provider>
}


render(
  () => (
    <QueryClientProvider client={queryClient}>
      {/* <WebsocketContextProvider> */}
        <App />
      {/* </WebsocketContextProvider> */}
    </QueryClientProvider>
  ),
  root!
);
