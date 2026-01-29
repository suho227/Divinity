import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function IntroPage() {
    const t = useTranslations('About.intro');
    return (
        <main className="relative bg-white min-h-screen py-20 px-8 overflow-hidden">
            {/* 🌟 [추가됨] 배경 이미지 및 오버레이 영역 🌟 */}
            <div className="absolute inset-0 z-0">
                {/* 1. 배경 이미지 */}
                {/* src에 실제 사용하실 이미지 경로를 넣어주세요. 예: /intro-bg.jpg */}
                <Image
                    src="/logo1.jpg" // 임시로 logo1.jpg를 사용했습니다. 원하는 이미지로 변경하세요.
                    alt="Intro Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* 2. 흰색 반투명 오버레이 */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
            </div>

            {/* 실제 콘텐츠 영역 */}
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-brand-orange font-bold tracking-widest mb-4 uppercase">{t('subtitle')}</h2>
                    <h1 className="text-4xl md:text-5xl font-black text-brand-navy">{t('title')}</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white/95 backdrop-blur-sm p-12 rounded-sm shadow-xl border-t-4 border-brand-orange">
                        <h3 className="text-2xl font-bold mb-6 text-brand-navy">설립 이념</h3>
                        <p className="leading-relaxed text-gray-600">{t('philosophy')}</p>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-12 rounded-sm shadow-xl border-t-4 border-brand-orange">
                        <h3 className="text-2xl font-bold mb-6 text-brand-navy">연혁</h3>
                        <p className="leading-relaxed text-gray-600">{t('history')}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}