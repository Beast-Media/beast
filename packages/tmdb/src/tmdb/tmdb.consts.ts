import { ConfigurableModuleBuilder } from "@nestjs/common";
import { TMDBConfig } from "./tmdb.dto";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<TMDBConfig>().build();