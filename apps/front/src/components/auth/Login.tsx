import { createForm, required } from "@modular-forms/solid";
import { Component } from "solid-js";
import { TextInput } from "../commons/TextInput";
import { LoginBody } from "../../api/model";
import { Button } from "../commons/Button";
import { A, useNavigate } from "@solidjs/router";
import { logIn } from "../../hooks/auth";
import { useWebsockets } from "../../hooks/websockets";

type LoginForm = Copy<LoginBody>;

export const Login: Component = () => {
  const nav = useNavigate();
  const { login: websocketLogin, onMessage } = useWebsockets();
  const [, { Form, Field }] = createForm<LoginForm>();


  const submit = async (value: LoginForm) => {
    const res = await logIn(value).catch(() => null);
    if (res) {
      websocketLogin();
      nav('/');
    }
  };

  return (
    <Form onSubmit={submit} class="flex flex-col gap-2 m-4">
      <Field name="username" validate={[required("Please enter your username.")]}>
        {(field, props) => (
          <TextInput
            {...props}
            type="text"
            label="Username"
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
            value={field.value}
            error={field.error}
            required
          ></TextInput>
        )}
      </Field>
      <Button type="submit">Submit</Button>
      <A href="/register">Register</A>
    </Form>
  );
};
