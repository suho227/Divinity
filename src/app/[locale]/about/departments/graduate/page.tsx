'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function GraduatePage() {
    // 🌟 'About.departments.graduate' 경로를 기본으로 설정합니다.
    const t = useTranslations('About.departments.graduate');

    // JSON에서 콤마(,)로 구분된 문자열을 가져와서 배열로 만듭니다.
    const curriculum = [
        { year: t('years.y1'), subjects: t('subjects.y1').split(', ') },
        { year: t('years.y2'), subjects: t('subjects.y2').split(', ') },
        { year: t('years.y3'), subjects: t('subjects.y3').split(', ') },
        { year: t('years.common'), subjects: t('subjects.common').split(', ') }
    ];

    return (
        <main className="relative bg-[#FAF7F2] min-h-screen py-24 px-8">
            {/* 배경 설정 (생략 - 기존과 동일) */}

            <div className="relative z-10 max-w-7xl mx-auto">
                <h1 className="text-4xl font-black text-[#002855] border-l-8 border-[#F39200] pl-6 mb-12 uppercase">
                    {t('pageTitle')}
                </h1>

                {/* 메시지 섹션 */}
                <div className="bg-[#002855]/5 border border-[#002855]/10 p-8 rounded-sm mb-16">
                    <p className="text-[#002855] font-bold text-lg mb-2">“ {t('intro')} ”</p>
                    <p className="text-[#F39200] font-black text-sm tracking-widest uppercase">{t('partner')}</p>
                </div>

                {/* 커리큘럼 그리드 */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {curriculum.map((item, idx) => (
                        <div key={idx} className="bg-white shadow-xl border-t-4 border-[#002855]">
                            <div className="bg-gray-50 p-5 border-b border-gray-100">
                                <h3 className="text-[#002855] font-black text-xl text-center">{item.year}</h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {item.subjects.map((sub, sIdx) => (
                                        <li key={sIdx} className="text-gray-600 text-sm flex items-start gap-2 border-b border-gray-50 pb-2">
                                            <span className="text-[#F39200] mt-1">▪</span>
                                            <span className="break-keep">{sub}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}