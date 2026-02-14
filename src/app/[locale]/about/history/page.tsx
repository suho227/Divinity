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
                <div className="relative border-l-2 border-gray-100 ml-2 md:ml-32">
                    {historyItems.map((num) => (
                        <div key={num} className="mb-10 md:mb-12 relative pl-8 md:pl-12 group">
                            {/* 타임라인 점 위치 조정 */}
                            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#F39200] border-4 border-white shadow-sm"></span>

                            {/* 데스크탑 연도 (왼쪽) */}
                            <span className="absolute left-[-120px] top-0 hidden md:block text-2xl font-bold text-[#002855]">
                                {t(`items.item${num}.year`)}
                            </span>

                            <div className="bg-gray-50 p-5 md:p-6 rounded-lg">
                                {/* 모바일 연도 (내용 위) */}
                                <span className="md:hidden block text-[#F39200] font-bold text-sm mb-1">
                                    {t(`items.item${num}.year`)}
                                </span>
                                <p className="text-base md:text-lg text-gray-700 font-medium break-keep">
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