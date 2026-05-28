'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function GreetingPage() {
    const t = useTranslations('About.greeting');

    // 1. 키 명칭 변경: chancellor -> chairman, principal -> dean
    const leaders = [
        { key: 'chairman', image: '/정은주이사장님.png' },
        { key: 'dean', image: '/신기섭목사님.png' }
    ];

    return (
        <main className="relative bg-white min-h-screen py-24 px-8 overflow-hidden">
            {/* 배경 이미지 및 오버레이 */}
            <div className="absolute inset-0 z-0">
                <Image src="/前景.png" alt="Background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-4xl font-black text-brand-navy border-l-8 border-brand-orange pl-6">
                        {t('pageTitle')}
                    </h1>
                </div>

                <div className="flex flex-col gap-24">
                    {leaders.map((leader) => (
                        <div key={leader.key} className="flex flex-col lg:flex-row items-start gap-8">

                            {/* [좌측] 사진, 이름 및 이력 영역 */}
                            <div className="w-full lg:w-1/3 flex flex-col gap-3 sticky top-24">
                                <div className="bg-white p-2 shadow-md rounded-sm border border-gray-100">
                                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                                        <Image
                                            src={leader.image}
                                            alt={t(`${leader.key}.name`)}
                                            fill
                                            className="object-cover"
                                            onError={(event) => {
                                                event.currentTarget.src = '/p_tim.jpg';
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="bg-[#F9F9F7] p-5 shadow-sm rounded-sm border-t-4 border-brand-navy flex flex-col items-center text-center">
                                    <p className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                                        {t(`${leader.key}.role`)}
                                    </p>
                                    <h4 className="text-xl font-serif font-bold text-brand-navy mb-2">
                                        {t(`${leader.key}.name`)}
                                    </h4>
                                    <div className="w-5 h-0.5 bg-brand-orange mb-2"></div>
                                    <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                                        {/* 2. 조건부 이름 로직 수정: chairman일 때 정은주, 아니면 신기정(Shin Kishou) */}
                                        {leader.key === 'chairman' ? 'Jung Eunju' : 'Shin Kishou'}
                                    </p>
                                </div>

                                {/* 3. 이력(Biography) 카드: ${leader.key}를 사용하므로 자동으로 새로운 키 참조 */}
                                {t.has(`${leader.key}.history`) && Array.isArray(t.raw(`${leader.key}.history`)) && (
                                    <div className="bg-white/90 p-5 shadow-sm rounded-sm border border-gray-100">
                                        <h6 className="text-brand-navy font-bold text-xs mb-3 flex items-center">
                                            <span className="w-3 h-[1px] bg-brand-orange mr-2"></span>
                                            略歴 (History)
                                        </h6>
                                        <ul className="space-y-2">
                                            {t.raw(`${leader.key}.history`).map((item: string, index: number) => (
                                                <li key={index} className="text-[11px] text-gray-600 flex items-start leading-snug">
                                                    <span className="text-brand-orange mr-2 mt-1 flex-shrink-0 text-[8px]">●</span>
                                                    <span className="break-keep">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* [우측] 메시지 박스 영역 */}
                            <div className="w-full lg:w-2/3 bg-[#EBF5FF]/60 backdrop-blur-sm p-6 md:p-10 shadow-sm rounded-sm">
                                <div className="w-full border border-brand-navy/20 rounded-xl bg-white/90 py-4 px-6 mb-8">
                                    <h5 className="text-sm md:text-base font-black text-brand-navy text-center leading-relaxed break-keep">
                                        {t.has(`${leader.key}.headline`) ? t(`${leader.key}.headline`) : 'Message'}
                                    </h5>
                                </div>
                                <div className="w-full border border-brand-navy/20 bg-white/90 p-8 md:p-10 min-h-[460px] flex items-center justify-center">
                                    <p className="text-gray-700 leading-[2.1] text-[18px] whitespace-pre-line text-justify font-light w-full">
                                        {t(`${leader.key}.message`)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}