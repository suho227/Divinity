'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'; // 최신 버전은 deskTool 대신 structureTool을 권장합니다.
import about from './src/sanity/schemas/schemaTypes/about';
import notice from './src/sanity/schemas/schemaTypes/notice';

export default defineConfig({
    name: 'default',
    title: 'Divinity Seminary Admin',

    // 🌟 이 두 줄은 client.ts에서만 쓰이므로 여기서는 삭제해도 됩니다.
    // apiVersion: '2023-05-03',
    // useCdn: false,

    projectId: 'o656ekmv', //
    organizationId: 'oWQyIjvX6', //
    dataset: 'production', //

    plugins: [structureTool()],

    schema: {
        // 🌟 about과 notice가 정상적으로 등록되었습니다.
        types: [about, notice],
    },
});