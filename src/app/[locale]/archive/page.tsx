import { useTranslations } from 'next-intl';

export default function ArchivePage() {
    const t = useTranslations('navigation');

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#FAF7F2]">
            <div className="text-center p-10 bg-white shadow-xl rounded-sm border-t-8 border-[#F39200]">
                <h2 className="text-3xl font-black text-[#002855] mb-4">
                    {t('archive')}
                </h2>
                <div className="w-12 h-1 bg-[#F39200] mx-auto mb-6"></div>
                <p className="text-gray-500 leading-relaxed">
                    교회와 성도님들을 위한 신학 자료실을<br />
                    준비 중입니다. 풍성한 자료로 보답하겠습니다.
                </p>
            </div>
        </div>
    );
}