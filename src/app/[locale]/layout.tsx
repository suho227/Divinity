import "@/app/globals.css";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>; // 🌟 Next.js 15는 Promise 타입입니다.
}

// 🌟 반드시 async 함수여야 합니다!
export default async function RootLayout({
    children,
    params
}: LayoutProps) {

    // 🌟 여기서 await를 해야 locale("ko", "ja" 등)을 인식합니다.
    const { locale } = await params;

    return (
        <html lang={locale} suppressHydrationWarning>
            {/* 🌟 만약 여기에 'flex items-center...' 클래스가 있다면 반드시 지우세요! */}
            <body suppressHydrationWarning className="antialiased">
                {children}
            </body>
        </html>
    );
}