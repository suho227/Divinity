import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function IntroPage() {
    const t = useTranslations('About.intro');
    const philosophies = [1, 2, 3, 4, 5];
    const mottos = [1, 2, 3];
    return (
        <main className="relative bg-[#FAF7F2] min-h-screen py-24 px-8 overflow-hidden">
            {/* 배경 이미지 및 오버레이 */}
            <div className="absolute inset-0 z-0">
                <Image src="/greeting-bg.jpg" alt="Background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-[#FAF7F2]/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* 1. 페이지 제목 */}
                <div className="mb-24">
                    <h1 className="text-4xl font-black text-[#002855] border-l-8 border-[#F39200] pl-6 uppercase tracking-tight">
                        {t('pageTitle')}
                    </h1>
                </div>

                {/* 2. 교육 이념 섹션 (5개 항목 - 여유로운 그리드) */}
                <section className="mb-40">
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-[#F39200] font-bold tracking-[0.3em] text-xs mb-3 uppercase">{t('philosophy.subtitle')}</span>
                        <h2 className="text-4xl font-black text-[#002855]">{t('philosophy.title')}</h2>
                        <div className="w-12 h-1 bg-[#002855] mt-6"></div>
                    </div>

                    {/* 5개 항목 배치: 1~3번은 3열, 4~5번은 아래쪽에 넓게 배치 */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {philosophies.map((num) => (
                            <div key={num}
                                className={`bg-white p-10 shadow-sm border border-blue-50 flex flex-col items-center text-center transition-all hover:shadow-md ${num > 3 ? 'lg:mx-auto lg:w-[100%] lg:max-w-[380px]' : ''}`}>
                                <span className="w-10 h-10 bg-[#002855] text-white rounded-full flex items-center justify-center font-serif mb-6 text-sm">
                                    0{num}
                                </span>
                                <p className="text-xl font-bold text-gray-800 leading-snug break-keep">
                                    {t(`philosophy.item${num}`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. 교훈 섹션 (3개 항목 - 명시적 색상 적용) */}
                <section>
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-[#F39200] font-bold tracking-[0.3em] text-xs mb-3 uppercase">{t('motto.subtitle')}</span>
                        <h2 className="text-4xl font-black text-[#002855]">{t('motto.title')}</h2>
                        <div className="w-12 h-1 bg-[#F39200] mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mottos.map((num) => (
                            <div key={num} className="relative group">
                                {/* bg-brand-navy 대신 직접 코드를 넣어 확실히 보이게 했습니다. */}
                                <div className="bg-[#002855] p-14 shadow-xl border-b-8 border-[#F39200] text-center transition-transform group-hover:scale-[1.02]">
                                    <h3 className="text-2xl font-bold text-white mb-2 break-keep">
                                        {t(`motto.item${num}`)}
                                    </h3>
                                    <div className="w-6 h-0.5 bg-white/20 mx-auto mt-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}