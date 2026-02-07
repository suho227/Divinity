'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function LocationPage() {
    const t = useTranslations('About.location');
    const locale = useLocale();

    // 1. 구글이 가장 잘 알아듣는 언어별 [교회명 + 상세주소] 조합
    const queryMap: Record<string, string> = {
        en: '3 Chome-13-11 Kitakoiwa, Edogawa City, Tokyo 133-0051',
        zh: '日本东京都江户川区北小岩3丁目13-11 133-0051'
    };

    const mapLocale = locale === 'zh' ? 'zh-CN' : locale;
    const isStrictLocale = locale === 'ko' || locale === 'ja';

    // 2. 한/일은 기존의 정교한 pb 주소 사용, 영/중은 보강된 주소 키워드로 검색
    const mapSrc = isStrictLocale
        ? `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6477.115304385699!2d139.891272!3d35.737096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601885d5e866aaab%3A0xaccfc818150e73ab!2z64-Z6rK97ISx7IKw6re466as7Iqk64-E6rWQ7ZqM!5e0!3m2!1s${locale}!2sjp&hl=${locale}`
        : `https://www.google.com/maps/embed/v1/place?key=YOUR_FREE_API_KEY_OR_SEARCH_URL&q=${encodeURIComponent(queryMap[locale] || queryMap['en'])}&hl=${mapLocale}`;

    // 💡 만약 API Key가 없다면 아래와 같은 검색 우회 URL을 사용합니다 (가장 추천)
    const finalMapSrc = isStrictLocale
        ? `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6477.115304385699!2d139.891272!3d35.737096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601885d5e866aaab%3A0xaccfc818150e73ab!2z64-Z6rK97ISx7IKw6re466as7Iqk64-E6rWQ7ZqM!5e0!3m2!1s${locale}!2sjp&hl=${locale}`
        : `https://www.google.com/maps?q=${encodeURIComponent(queryMap[locale] || queryMap['en'])}&output=embed&hl=${mapLocale}`;
    return (
        <main className="bg-white min-h-screen">
            {/* 상단 배너 섹션 동일 */}
            <div className="max-w-6xl mx-auto py-20 px-8">
                <div className="w-full h-[500px] bg-gray-100 rounded-sm overflow-hidden shadow-xl mb-16 border border-gray-200">
                    <iframe
                        src={finalMapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* 2. 상세 정보 카드 */}
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-[#F8FAFC] p-10 shadow-sm border-l-8 border-[#002855]">
                        <h3 className="text-[#002855] font-black text-xl mb-6 flex items-center gap-2">
                            <span>📍</span> ADDRESS
                        </h3>
                        <p className="text-gray-700 text-[17px] leading-relaxed whitespace-pre-line">
                            {t('address')}
                        </p>
                        <p className="mt-6 text-[#002855] font-bold">
                            TEL: {t('tel')}
                        </p>
                    </div>

                    <div className="bg-[#FFFBF5] p-10 shadow-sm border-l-8 border-[#F39200]">
                        <h3 className="text-[#F39200] font-black text-xl mb-6 flex items-center gap-2">
                            <span>🚃</span> ACCESS
                        </h3>
                        <p className="text-gray-700 text-[17px] leading-relaxed whitespace-pre-line">
                            {t('transport')}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}