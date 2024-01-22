import { Component } from "solid-js";
import { createForm, zodForm } from "@modular-forms/solid";
import { postAuthRegister } from "../../api/endpoints/beast-endpoints";
import { TextInput } from "../commons/TextInput";
import { Button } from "../commons/Button";
import { object, string } from "zod";

const registerSchema = object({
  username: string().min(1, "Username is required"),
  password: string().length(8, "You password must have 8 characters or more."),
  confirm: string()
}).refine(data => data?.password === data.confirm, {
  message: "The passwords should match",
  path: ["confirm"]
});

type RegisterForm = Zod.infer<typeof registerSchema>;

export const Register: Component = () => {
  const [, { Form, Field }] = createForm<RegisterForm>({
    validate: zodForm(registerSchema),
    revalidateOn: "input"
  });

  const submit = (value: RegisterForm) => {
    postAuthRegister(value);
  };

  return (
    <Form onSubmit={submit} class="flex flex-col gap-2 m-4">
      <Field name="username">
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
      <Field name="confirm">
        {(field, props) => (
          <TextInput
            {...props}
            type="password"
            label="Confirm password"
            value={field.value}
            error={field.error}
            required
          ></TextInput>
        )}
      </Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
