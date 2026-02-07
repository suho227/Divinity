import { useTranslations } from 'next-intl';

export default function HistoryPage() {
    const t = useTranslations('About.history');

    // 연혁 아이템 개수 (추가될 때마다 숫자를 늘려주세요)
    const historyItems = [1];

    return (
        <main className="bg-white min-h-screen py-24 px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-black text-[#002855] mb-16 border-b-2 border-[#F39200] pb-6">
                    {t('pageTitle')}
                </h1>

                {/* 타임라인 레이아웃 */}
                <div className="relative border-l-2 border-gray-100 ml-4 md:ml-32">
                    {historyItems.map((num) => (
                        <div key={num} className="mb-12 relative pl-12 group">
                            {/* 타임라인 포인트 */}
                            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#F39200] border-4 border-white shadow-sm transition-transform group-hover:scale-125"></span>

                            {/* 연도 (왼쪽 배치) */}
                            <span className="absolute left-[-120px] top-0 hidden md:block text-2xl font-serif font-bold text-[#002855]">
                                {t(`items.item${num}.year`)}
                            </span>

                            {/* 사건 내용 */}
                            <div className="bg-gray-50 p-6 rounded-lg group-hover:bg-gray-100 transition-colors">
                                <span className="md:hidden block text-[#F39200] font-bold mb-2">
                                    {t(`items.item${num}.year`)}
                                </span>
                                <p className="text-lg text-gray-700 font-medium">
                                    {t(`items.item${num}.event`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}