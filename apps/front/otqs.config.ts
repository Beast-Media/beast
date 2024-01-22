import { defineConfig } from "otqs";

export default defineConfig({
  petstore: {
    output: {
      mode: "split",
      target: "src/api/endpoints/beast-endpoints.ts",
      schemas: "src/api/model",
      client: "solid-query",
      //   mock: true,
      prettier: true,
      baseUrl: "http://localhost:3000",
      override: {
        mutator: {
          path: './src/custom-axios-instance.ts',
          name: 'customInstance',
        },
        // operations: {
        //   listPets: {
        //     query: {
        //       useQuery: true,
        //       useInfinite: true,
        //       useInfiniteQueryParam: 'limit',
        //     },
        //   }
        // }
      }
    },
    input: {
      target: "../backend/swagger.json" //or json format
    }
  }
});
