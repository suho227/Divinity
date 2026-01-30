import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

    // 모든 메시지 가져오기 (Client Component에서 사용하기 위함)
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            {/* 🌟 만약 여기에 'flex items-center...' 클래스가 있다면 반드시 지우세요! */}
            <body suppressHydrationWarning className="antialiased">
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}