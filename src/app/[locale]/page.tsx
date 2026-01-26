import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('Index');
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-4xl font-bold">{t('title')}</h1>
            <p className="text-xl">{t('welcome')}</p>
        </div>
    );
}
