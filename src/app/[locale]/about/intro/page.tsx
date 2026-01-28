import { useTranslations } from 'next-intl';

export default function IntroPage() {
    const t = useTranslations('About.intro');
    return (
        <main className="bg-brand-cream min-h-screen py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-brand-orange font-bold tracking-widest mb-4 uppercase">{t('subtitle')}</h2>
                    <h1 className="text-4xl md:text-5xl font-black text-brand-navy">{t('title')}</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-brand-navy text-white p-12 rounded-sm shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-brand-orange">설립 이념</h3>
                        <p className="leading-relaxed opacity-90">{t('philosophy')}</p>
                    </div>
                    <div className="bg-white p-12 rounded-sm shadow-xl border-t-4 border-brand-orange">
                        <h3 className="text-2xl font-bold mb-6 text-brand-navy">연혁</h3>
                        <p className="leading-relaxed text-gray-600">{t('history')}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}