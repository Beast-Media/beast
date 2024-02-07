import { createForm, setValue, zodForm } from "@modular-forms/solid";
import { Component, For, Show, createSignal } from "solid-js";
import { nativeEnum, object, string } from "zod";
import { LibraryType } from "../../../api/model";
import { TextInput } from "../../commons/TextInput";
import { RadioInput } from "../../commons/RadioInput";
import { Button } from "../../commons/Button";
import { createGetLibraryShowFilesystem, postLibraryNew } from "../../../api/endpoints/beast-endpoints";
import { ArrowIcon, HomeIcon } from "../../commons/Icons";
import clsx from "clsx";
import { useNavigate } from "@solidjs/router";

const createLandingSchema = object({
  name: string().min(1, "Email is required"),
  type: nativeEnum(LibraryType),
  path: string().min(1, "Path is required"),
});

type CreateLandingForm = Zod.infer<typeof createLandingSchema>;

export const LibraryFolderSelector: Component<{
  onChange: (root: string) => void;
  value?: string;
  error?: string;
}> = (props) => {
  const [root, setRoot] = createSignal(props.value ?? "");

  const FoldersList: Component<{
    root: string;
    onSelect: (folder: string) => void;
  }> = (props) => {
    const folders = createGetLibraryShowFilesystem(() => ({
      params: { root: props.root },
    }));
    return (
      <div class="flex flex-col gap-2 max-h-96 overflow-y-auto">
        <Show when={folders.data} fallback="loading">
          <For each={folders.data}>
            {(folder) => (
              <div
                class="p-2 rounded-md hover:bg-beast-bg-2"
                onClick={() => props.onSelect(folder)}
              >
                {folder.split("/").reverse()[0]}
              </div>
            )}
          </For>
        </Show>
      </div>
    );
  };

  const onSelect = (folder: string) => {
    setRoot(folder);
    props.onChange(`/${folder}`);
  };

  const goBack = () => {
    const parts = root().split("/");
    if (parts.length > 0) {
      parts.pop();
      setRoot(parts.join("/"));
    }
  };

  const goHome = () => {
    setRoot("");
  };

  return (
    <div>
      <div class={clsx(props.error && 'text-beast-accent-error')}>Library Folder</div>
      <div class={clsx(props.error && 'outline outline-1 outline-beast-accent-error', "flex flex-col bg-beast-bg rounded-md outline-1 p-2 gap-2")}>
        <div class="flex gap-2 items-center pb-2 border-b-2 border-b-beast-bg-2">
          <Button variant="icon" onClick={goBack}>
            <ArrowIcon />
          </Button>
          <Button variant="icon" onClick={goHome}>
            <HomeIcon />
          </Button>
          /{root()}
        </div>
        <FoldersList root={root()} onSelect={onSelect}></FoldersList>
      </div>
    </div>
  );
};

export const CreateLibrary: Component = () => {
  const nav = useNavigate();

  const [form, { Form, Field }] = createForm<CreateLandingForm>({
    validate: zodForm(createLandingSchema),
    initialValues: { type: "MOVIES" },
    revalidateOn: "input",
  });

  const submit = async (value: CreateLandingForm) => {
    const res = await postLibraryNew(value);
    if (res) {
      nav('/settings/libraries')
    }
  };

  return (
    <div class="flex flex-col gap-4 w-full p-4">
      <div class="flex justify-between">
        <div class="text-md">Create a new library</div>
      </div>
      <Form
        class="flex flex-col bg-beast-bg-1 rounded-md p-4 gap-2 shadow-md"
        onSubmit={submit}
      >
        <Field name="name">
          {(field, props) => (
            <TextInput
              {...props}
              type="text"
              label="Library Name"
              placeholder="Enter the name of the library"
              value={field.value}
              error={field.error}
              required
            ></TextInput>
          )}
        </Field>
        <div class="gap-1 flex flex-col">
          <div>Library Content</div>
          <div class="grid grid-cols-2 gap-2">
            <For
              each={[
                { label: "Movies", value: "MOVIES" },
                { label: "TV Shows", value: "TV_SHOWS" },
              ]}
            >
              {({ label, value }) => (
                <Field name="type">
                  {(field, props) => (
                    <RadioInput
                      {...props}
                      error={field.error}
                      value={value}
                      selectedValue={field.value}
                    >
                      {label}
                    </RadioInput>
                  )}
                </Field>
              )}
            </For>
          </div>
        </div>
        <Field name="path">
          {(field) => (
            <LibraryFolderSelector
              value={field.value}
              error={field.error}
              onChange={(root) => setValue(form, "path", root)}
            ></LibraryFolderSelector>
          )}
        </Field>
        <Button type="submit">Create</Button>
      </Form>
    </div>
  );
};
