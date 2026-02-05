import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations('NotFound'); // Make sure to add this key to your messages or use a generic one

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] py-20 text-center">
            <h1 className="text-4xl font-bold text-brand-navy mb-4">404</h1>
            <p className="text-xl font-bold mb-2">{t('title')}</p>
            <p className="text-lg text-gray-600 mb-8">{t('description')}</p>
        </div>
    );
}
