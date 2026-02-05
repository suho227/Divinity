import { useTranslations } from 'next-intl';

export default function WorshipPage() {
    const t = useTranslations('navigation');
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#FAF7F2]">
            <div className="text-center p-10 bg-white shadow-xl rounded-sm border-t-8 border-[#F39200]">
                <h2 className="text-3xl font-black text-[#002855] mb-4">
                    {t('worship')}
                </h2>
                <div className="w-12 h-1 bg-[#F39200] mx-auto mb-6"></div>
                <p className="text-gray-500 leading-relaxed">
                    현재 예배 안내 및 온라인 예배 시스템을<br />
                    정밀하게 구축하고 있습니다. 곧 찾아뵙겠습니다.
                </p>
            </div>
        </div>
    );
}