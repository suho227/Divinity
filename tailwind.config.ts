import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        // 현재 src 폴더 안에 모든 파일이 있으므로 아래 경로가 가장 중요합니다.
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    cream: "#F9F3E5",
                    navy: "#1A2B4C",
                    orange: "#E88B2E",
                },
            },
        },
    },
    plugins: [],
};
export default config;