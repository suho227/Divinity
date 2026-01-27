import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/header'; // 헤더 컴포넌트 임포트
import '../globals.css'; // 전역 스타일 임포트

// 1. Props의 정체를 정의합니다 (이름표 만들기)
interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
    children,
    params
}: LayoutProps) {
    // 2. params에서 locale 정보를 가져옵니다.
    // (Next.js 버전에 따라 await params; 가 필요할 수도 있습니다)
    const { locale } = await params;

    // 3. 해당 언어의 번역 데이터를 가져옵니다.
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className="bg-white text-black min-h-screen">
                <NextIntlClientProvider messages={messages}>
                    {/* 모든 페이지 상단에 나타날 네비게이션 바 */}
                    <Header />

                    {/* 실제 페이지 내용이 들어가는 부분 */}
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}