import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocalizedLayout({
    children,
    params
}: LayoutProps) {
    const { locale } = await params; //
    const messages = await getMessages();

    return (
        // ❌ <html>, <body> 태그를 삭제했습니다. 부모(RootLayout)가 이미 가지고 있으니까요!
        <NextIntlClientProvider messages={messages} locale={locale}>
            <Header />
            <main>{children}</main>
            <Footer />
        </NextIntlClientProvider>
    );
}