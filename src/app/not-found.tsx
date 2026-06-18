import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default async function NotFound() {
    const locale = await getLocale();
    const messages = await getMessages();
    const t = await getTranslations('NotFound');
return (
     <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="flex min-h-[70vh] items-center justify-center px-6 py-20 text-center">
                <div>
                    <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-brand-orange">404 Error</p>
                    <h1 className="text-4xl font-black text-brand-navy md:text-6xl">{t('title')}</h1>
                    <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
                        {t('description')}
                    </p>
                    <Link
                        href="/"
                        className="mt-8 inline-flex rounded-full bg-[#1A2B4C] px-8 py-4 text-sm font-black text-white shadow-lg shadow-[#1A2B4C]/20 ring-2 ring-[#E88B2E] transition hover:-translate-y-1 hover:bg-[#E88B2E] hover:text-[#1A2B4C]"
                    >
                        {t('homeLabel')}
                    </Link>
                </div>
                   </main>
            <Footer />
        </NextIntlClientProvider>
    );
}