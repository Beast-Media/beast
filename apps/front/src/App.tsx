import { Router, Route, useNavigate } from "@solidjs/router";
import { Home } from "./components/Home";
import { MainLayout } from "./components/layouts/MainLayout";
import { AuthLayout } from "./components/layouts/AuthLayout";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { ParentComponent, createEffect } from "solid-js";
import { isLoggedIn } from "./hooks/auth";
import { Library } from "./components/Library";
import { TVShow } from "./components/Show";
import { Season } from "./components/Season";
import { Episode } from "./components/Episode";
import { Media } from "./components/Media";

const AuthenticatedGuard: ParentComponent = ({ children }) => {
  const navigate = useNavigate();

  createEffect(() => {
    const isLogged = isLoggedIn();
    if (!isLogged) {
      navigate("/login");
    }
  });

  return children;
};

const LoginGuard: ParentComponent = ({ children }) => {
  const navigate = useNavigate();

  createEffect(() => {
    const isLogged = isLoggedIn();
    if (isLogged) {
      navigate("/");
    }
  });

  return children;
};

export default function App() {
  return (
    <Router>
      <Route path="/" component={AuthenticatedGuard}>
        <Route
          path="/"
          component={() => (
            <MainLayout>
              <Home></Home>
            </MainLayout>
          )}
        />
        <Route
          path="/library/:id"
          component={() => (
            <MainLayout>
              <Library></Library>
            </MainLayout>
          )}
        />
        <Route
          path="/show/:id"
          component={() => (
            <MainLayout>
              <TVShow></TVShow>
            </MainLayout>
          )}
        />
        <Route
          path="/season/:id"
          component={() => (
            <MainLayout>
              <Season></Season>
            </MainLayout>
          )}
        />
        <Route
          path="/episode/:id"
          component={() => (
            <MainLayout>
              <Episode></Episode>
            </MainLayout>
          )}
        />
        <Route
          path="/media/:id"
          component={() => (
            <Media></Media>
          )}
        />
      </Route>
      <Route path="/" component={LoginGuard}>
        <Route
          path="/login"
          component={() => (
            <AuthLayout>
              <Login />
            </AuthLayout>
          )}
        />
        <Route
          path="/register"
          component={() => (
            <AuthLayout>
              <Register />
            </AuthLayout>
          )}
        />
      </Route>
    </Router>
  );
}
