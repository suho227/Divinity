import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function GreetingPage() {
    const t = useTranslations('About.greeting');
    return (
        <main className="bg-brand-cream min-h-screen py-20 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-brand-orange font-bold tracking-widest mb-4 uppercase">{t('subtitle')}</h2>
                <h1 className="text-4xl md:text-5xl font-black text-brand-navy mb-12">{t('title')}</h1>
                <div className="relative w-48 h-48 mx-auto mb-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image src="/principal.jpg" alt="Principal" fill className="object-cover" />
                </div>
                <p className="text-lg text-gray-700 leading-loose whitespace-pre-line text-left bg-white p-10 shadow-sm">
                    {t('content')}
                </p>
            </div>
        </main>
    );
}