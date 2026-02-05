import { useTranslations } from 'next-intl';

export default function NoticePage() {
    // 대소문자 주의: 소문자 'navigation'을 사용합니다.
    const t = useTranslations('navigation');

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#FAF7F2]">
            <div className="text-center p-10 bg-white shadow-xl rounded-sm border-t-8 border-[#F39200]">
                {/* 제목: JSON의 navigation.notice 값을 가져옵니다. */}
                <h2 className="text-3xl font-black text-[#002855] mb-4">
                    {t('notice')}
                </h2>
                {/* 오렌지색 포인트 라인 */}
                <div className="w-12 h-1 bg-[#F39200] mx-auto mb-6"></div>
                {/* 안내 문구 */}
                <p className="text-gray-500 leading-relaxed">
                    도쿄국제신학교의 새로운 소식과 안내를<br />
                    준비 중입니다. 곧 업데이트될 예정입니다.
                </p>
            </div>
        </div>
    );
}