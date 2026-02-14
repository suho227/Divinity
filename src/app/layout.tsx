// src/app/layout.tsx
import "@/app/globals.css"; // 🌟 여기서 CSS를 한 번만 불러옵니다.

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // suppressHydrationWarning은 폰트/테마 변경으로 인한 미세한 차이를 무시해줍니다.
        <html suppressHydrationWarning>
            <body className="antialiased" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}