// src/sanity/client.ts
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    // 🌟 환경 변수가 우선이지만, 없을 경우 직접 ID를 사용하도록 설정하여 빌드 에러를 방지합니다.
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o656ekmv',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
    return builder.image(source);
}