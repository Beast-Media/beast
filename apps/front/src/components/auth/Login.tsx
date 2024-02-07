import { createForm, required } from "@modular-forms/solid";
import { Component } from "solid-js";
import { TextInput } from "../commons/TextInput";
import { LoginBody } from "../../api/model";
import { Button } from "../commons/Button";
import { A, useNavigate } from "@solidjs/router";
import { logIn } from "../../hooks/auth";
import { getSettingsInitialized } from "../../api/endpoints/beast-endpoints";

type LoginForm = Copy<LoginBody>;

export const Login: Component = () => {
  const nav = useNavigate();
  // const { login: websocketLogin } = useWebsockets();
  const [, { Form, Field }] = createForm<LoginForm>();


  const submit = async (value: LoginForm) => {
    const res = await logIn(value).catch(() => null);
    if (res) {
      // websocketLogin();
      const isInitialized = await getSettingsInitialized();
      if (isInitialized) nav('/');
      else nav('/init');
    }
  };

  return (
    <Form onSubmit={submit} class="flex flex-col gap-4 px-8 py-4 items-center">
      <div class="text-md px-16">Welcome to Beast!</div>
      <div class="flex flex-col gap-2 min-w-96">
        <Field name="email" validate={[required("Please enter your username.")]}>
          {(field, props) => (
            <TextInput
              {...props}
              type="email"
              label="Email"
              placeholder="Enter your email address"
              value={field.value}
              error={field.error}
              required
            ></TextInput>
          )}
        </Field>
        <Field name="password">
          {(field, props) => (
            <TextInput
              {...props}
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={field.value}
              error={field.error}
              required
            ></TextInput>
          )}
        </Field>
        <A href="">Forgot your password?</A>
      </div>
      <Button type="submit" class="py-4 px-8 text-sm bg-beast-main hover:bg-beast-main-2">Sign In</Button>
      <span>You dont't have an account? <A href="/register" class="text-beast-main">Sign Up</A></span>
    </Form>
  );
};
