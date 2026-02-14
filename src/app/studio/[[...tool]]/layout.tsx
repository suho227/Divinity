// 🌟 여기는 'use client'를 쓰지 않습니다 (서버 컴포넌트)
export { metadata, viewport } from 'next-sanity/studio';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return <section className="min-h-screen">{children}</section>;
}