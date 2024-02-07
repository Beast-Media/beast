import { Router, Route, useNavigate } from "@solidjs/router";
import { Home } from "./components/Home";
import { MainLayout } from "./components/layouts/MainLayout";
import { CenterLayout } from "./components/layouts/CenterLayout";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { ParentComponent, Show, createEffect, createResource } from "solid-js";
import { isLoggedIn } from "./hooks/auth";
import { Library } from "./components/Library";
import { TVShow } from "./components/show/Show";
import { Season } from "./components/show/Season";
import { Episode } from "./components/show/Episode";
import { Media } from "./components/Media";
import { Movie } from "./components/movie/Movie";
import { ServerInit } from "./components/initialization/ServerInit";
import { getSettingsInitialized } from "./api/endpoints/beast-endpoints";
import { SettingsLayout } from "./components/layouts/SettingsLayout";
import { Libraries } from "./components/settings/libraries/Libraries";
import { CreateLibrary } from "./components/settings/libraries/CreateLibrary";

const AuthenticatedGuard: ParentComponent = (props) => {
  const navigate = useNavigate();
  const [isLogged] = createResource<boolean>(() => isLoggedIn());

  createEffect(() => {
    const a = isLogged();
    if (!a) {
      navigate("/login");
    }
  });

  return (
    <Show when={!isLogged.loading} fallback="loading">
      {props.children}
    </Show>
  );
};

const LoginGuard: ParentComponent = (props) => {
  const navigate = useNavigate();
  const [isLogged] = createResource<boolean>(() => isLoggedIn());

  createEffect(() => {
    if (isLogged()) {
      navigate("/");
    }
  });

  return (
    <Show when={!isLogged.loading} fallback="loading">
      {props.children}
    </Show>
  );
};

const ServerInitGuard: ParentComponent = (props) => {
  const navigate = useNavigate();
  const [isInitialized] = createResource<boolean>(() =>
    getSettingsInitialized()
  );

  createEffect(async () => {
    if (isInitialized()) {
      navigate("/");
    }
  });

  return (
    <Show when={!isInitialized.loading} fallback="loading">
      {props.children}
    </Show>
  );
};

export default function App() {
  return (
    <div class="bg-beast-bg text-beast-font fill-beast-font">
      <Router>
        <Route path="/" component={AuthenticatedGuard}>
          <Route path="/" component={MainLayout}>
            <Route path="/" component={Home}></Route>
            <Route path="/library/:id" component={Library}></Route>
            <Route path="/movie/:id" component={Movie}></Route>
            <Route path="/show/:id" component={TVShow}></Route>
            <Route path="/season/:id" component={Season}></Route>
            <Route path="/episode/:id" component={Episode}></Route>
          </Route>
          <Route path="/settings" component={SettingsLayout}>
            <Route path="/" component={() => "Nothing there yet"}></Route>
            <Route path="/libraries" component={Libraries}></Route>
            <Route path="/libraries/new" component={CreateLibrary}></Route>
          </Route>
          <Route path="/media/:id" component={Media} />
          <Route path="/init" component={() => (
            <ServerInitGuard>
              <CenterLayout></CenterLayout>
            </ServerInitGuard>
          )}>
            <Route
              path="/"
              component={ServerInit}
            ></Route>
          </Route>
        </Route>
        <Route
          path="/"
          component={() => (
            <LoginGuard>
              <CenterLayout></CenterLayout>
            </LoginGuard>
          )}
        >
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Route>
      </Router>
    </div>
  );
}
