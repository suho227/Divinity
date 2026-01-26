import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('navigation');
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-4xl font-bold">{t('about')}</h1>
            <p className="text-xl">{t('curriculum')}</p>
            <p className="text-xl">{t('church')}</p>
            <p className="text-xl">{t('admissions')}</p>
            <p className="text-xl">{t('news')}</p>
            <p className="text-xl">{t('lang_ja')}</p>
            <p className="text-xl">{t('lang_ko')}</p>
            <p className="text-xl">{t('lang_en')}</p>
        </div>
    );
}
