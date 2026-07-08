import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"; // 최신 버전은 deskTool 대신 structureTool을 권장합니다.
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