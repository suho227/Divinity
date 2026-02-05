import { useTranslations } from 'next-intl';

export default function JapaneseDepartmentPage() {
    const t = useTranslations('navigation');

    return (
        <main className="container mx-auto py-24 px-8 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-[#1A2B4C] mb-12">
                {t('dept_japanese')}
            </h1>
            <p className="text-center text-gray-600">
                Coming Soon...
            </p>
        </main>
    );
}
