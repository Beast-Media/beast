import { Component } from "solid-js";
import { createForm, zodForm } from "@modular-forms/solid";
import { postAuthRegister } from "../../api/endpoints/beast-endpoints";
import { TextInput } from "../commons/TextInput";
import { Button } from "../commons/Button";
import { object, string } from "zod";
import { A, useNavigate } from "@solidjs/router";

const registerSchema = object({
  email: string().email("Invalid email address").min(1, "Email is required"),
  password: string().length(8, "You password must have 8 characters or more."),
  confirm: string(),
}).refine((data) => data?.password === data.confirm, {
  message: "The passwords should match",
  path: ["confirm"],
});

type RegisterForm = Zod.infer<typeof registerSchema>;

export const Register: Component = () => {
  const nav = useNavigate();

  const [, { Form, Field }] = createForm<RegisterForm>({
    validate: zodForm(registerSchema),
    revalidateOn: "input",
  });

  const submit = async (value: RegisterForm) => {
    await postAuthRegister(value);
    nav('/login')
  };

  return (
    <Form onSubmit={submit} class="flex flex-col gap-4 px-8 py-4 items-center">
      <div class="text-md px-16">Welcome to Beast!</div>
      <div class="flex flex-col gap-2 min-w-96">
        <Field name="email">
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
        <Field name="confirm">
          {(field, props) => (
            <TextInput
              {...props}
              type="password"
              label="Confirm password"
              placeholder="Confirm your password"
              value={field.value}
              error={field.error}
              required
            ></TextInput>
          )}
        </Field>
      </div>
      <Button type="submit" class="py-4 px-8 text-sm bg-beast-main hover:bg-beast-main-2">Sign Up</Button>
      <span>You already have an account? <A href="/login" class="text-beast-main">Sign In</A></span>
    </Form>
  );
};
