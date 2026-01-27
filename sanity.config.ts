import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import about from './src/sanity/schemas/about'; // 방금 만든 파일 임포트

export default defineConfig({
    name: 'default',
    title: 'Divinity Seminary Admin',

    projectId: 'c0fa6a1b-fb4b-4af8-8842-ad37c1c9b53b', // 이미 적혀있을 거예요
    dataset: 'production',

    plugins: [deskTool()],

    schema: {
        types: [about], // 여기에 추가해야 관리자 화면에 나타납니다!
    },
});