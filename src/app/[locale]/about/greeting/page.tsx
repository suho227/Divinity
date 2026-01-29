import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function GreetingPage() {
    const t = useTranslations('About.greeting');

    const leaders = [
        { key: 'chancellor', image: '/chancellor.jpg' },
        { key: 'principal', image: '/principal.jpg' }
    ];

    return (
        <main className="relative bg-white min-h-screen py-24 px-8 overflow-hidden">
            {/* 배경 이미지 및 오버레이 (기존 유지) */}
            <div className="absolute inset-0 z-0">
                <Image src="/greeting-bg.jpg" alt="Background" fill className="object-cover" priority />
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
                        <div key={leader.key} className="flex flex-col lg:flex-row items-stretch gap-8">

                            {/* [좌측] 분리된 카드 영역 */}
                            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                                {/* 1. 사진 카드: 심플하고 깨끗하게 */}
                                <div className="bg-white p-4 shadow-md rounded-sm border border-gray-100 relative group">
                                    <div className="relative w-full aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image
                                            src={leader.image}
                                            alt={t(`${leader.key}.name`)}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* 2. 이름 및 직함 카드: 따뜻한 베이지/그레이 톤 적용 */}
                                <div className="bg-[#F9F9F7] p-8 shadow-sm rounded-sm border-t-4 border-brand-navy flex flex-col items-center text-center">
                                    <p className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                                        {t(`${leader.key}.role`)}
                                    </p>
                                    <h4 className="text-3xl font-serif font-bold text-brand-navy mb-2">
                                        {t(`${leader.key}.name`)}
                                    </h4>
                                    <div className="w-8 h-0.5 bg-brand-orange mb-3"></div>
                                    <p className="text-sm text-gray-400 font-medium tracking-widest uppercase">
                                        {leader.key === 'chancellor' ? 'Shin Kishou' : 'Principal Name'}
                                    </p>
                                </div>
                            </div>

                            {/* [우측] 메시지 박스 영역: 라이트 블루 혹은 동일한 톤으로 유지 */}
                            <div className="w-full lg:w-2/3 bg-[#EBF5FF]/60 backdrop-blur-sm p-10 md:p-14 shadow-sm relative rounded-sm border border-blue-50/50 flex items-center">
                                <span className="absolute top-6 left-6 text-4xl text-blue-200/50 font-serif">“</span>
                                <div className="w-full">
                                    <h5 className="text-xs font-black text-brand-orange mb-6 tracking-widest uppercase">Message</h5>
                                    <p className="text-gray-700 leading-[2.2] text-[17px] whitespace-pre-line text-justify relative z-20">
                                        {t(`${leader.key}.message`)}
                                    </p>
                                </div>
                                <span className="absolute bottom-6 right-6 text-4xl text-blue-200/50 font-serif">”</span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}