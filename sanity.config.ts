import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
    name: "default",
    title: "Divinity Seminary Admin",
    projectId: "o656ekmv", //
    organizationId: "oWQyIjvX6", //
    dataset: "production", //
    plugins: [structureTool()],
    schema,
});