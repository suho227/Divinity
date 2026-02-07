import { useTranslations } from 'next-intl';

export default function HistoryPage() {
    const t = useTranslations('About.history');

    return (
        <main className="bg-white min-h-screen py-24 px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-black text-brand-navy mb-16 border-b-2 border-brand-orange pb-6">
                    {t('pageTitle')}
                </h1>

                {/* 타임라인 레이아웃 (여기에 데이터를 추가하세요) */}
                <div className="relative border-l-2 border-gray-100 ml-4 md:ml-32">
                    <div className="mb-12 relative pl-12">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-sm"></span>
                        <span className="absolute left-[-120px] top-0 hidden md:block text-2xl font-serif font-bold text-brand-navy">2026</span>
                        <p className="text-lg text-gray-700">도쿄국제신학교 설립</p>
                    </div>
                    {/* ... 추가 연혁 아이템 ... */}
                </div>
            </div>
        </main>
    );
}