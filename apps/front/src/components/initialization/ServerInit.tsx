import { Component } from "solid-js";
import { object, string } from "zod";
import { createForm, zodForm } from "@modular-forms/solid";
import { TextInput } from "../commons/TextInput";
import { Button } from "../commons/Button";
import { postSettingsInit } from "../../api/endpoints/beast-endpoints";
import { useNavigate } from "@solidjs/router";

const initServerSchema = object({
    name: string().min(1, "Name is required")
})

type ServerInitForm = Zod.infer<typeof initServerSchema>;


export const ServerInit: Component = () => {
    const nav = useNavigate();

    const [, { Form, Field }] = createForm<ServerInitForm>({
        validate: zodForm(initServerSchema),
        revalidateOn: 'input'
    });

    const submit = async (value: ServerInitForm) => {
        await postSettingsInit({ name: value.name })
        nav('/')
    }  

    return (
        <Form onSubmit={submit} class="flex flex-col gap-4 px-8 py-4 items-center">
            <div class="text-sm px-16">Welcome to the initial setup of Beast!</div>
            <div class="flex flex-col gap-2 min-w-96">
                <Field name="name">
                    {(field, props) => (
                        <TextInput
                            {...props}
                            type="text"
                            label="Name"
                            placeholder="Enter your server name"
                            value={field.value}
                            error={field.error}
                            required
                        ></TextInput>
                    )}
                </Field>
            </div>
            <Button>
                Next Step
            </Button>
        </Form> 
    )
}