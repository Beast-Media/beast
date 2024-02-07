import { ConfigurableModuleBuilder } from "@nestjs/common";

export interface ServerDBConfig {
    database_url: string;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ServerDBConfig>().setExtras<{ isGlobal?: boolean }>({ isGlobal: true }, (definition, extras) =>
  ({ ...definition, global: extras.isGlobal })
).build();