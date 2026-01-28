import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';

export default function HomePage() {
    const t = useTranslations('Index');

    return (
        <main className="bg-brand-cream">
            {/* 히어로 섹션: 배경 사진(前景.png) 적용 */}
            <section className="relative h-[85vh] flex items-center justify-center">
                <Image
                    src="/前景.png"
                    alt="Main Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-brand-navy/50" />
                <div className="relative z-10 text-center text-white px-6">
                    <p className="text-brand-orange font-bold tracking-[0.4em] mb-6 uppercase text-lg drop-shadow-md">{t('subTitle')}</p>
                    <h1 className="text-5xl md:text-8xl font-bold mb-10 tracking-tight drop-shadow-2xl">{t('title')}</h1>
                    <div className="w-24 h-1.5 bg-brand-orange mx-auto mb-10"></div>
                    <p className="text-2xl md:text-3xl font-medium mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">{t('description')}</p>
                    <Link
                        href="/admission"
                        className="
        /* 기본 스타일: 오렌지 배경 + 흰색 글씨 */
        px-14 py-5 
        bg-brand-orange 
        text-white 
        font-black 
        text-xl 
        rounded-sm 
        shadow-xl
        
        /* 호버 효과: 튀어나오는 입체감 강조 */
        transition-all duration-300 ease-out
        hover:bg-brand-orange      /* 배경색 유지 (혹은 아주 살짝만 밝게) */
        hover:text-[#001529]       /* 글자색을 진한 네이비로 변경하여 선명도 확보 */
        hover:-translate-y-2       /* 위로 튀어나오는 효과 */
        hover:scale-105            /* 크기가 5% 커짐 */
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] /* 깊은 그림자로 공중에 뜬 느낌 */
    "
                    >
                        {/* 에러 방지를 위해 번역 키가 없을 때의 기본값 설정 */}
                        {t('admission')} →
                    </Link>
                </div>
            </section>

            {/* 소개 섹션: 크림 배경 */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative h-[500px] shadow-2xl rounded-sm overflow-hidden">
                        <Image src="/前景.png" alt="School Life" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-brand-orange font-bold tracking-widest mb-4 uppercase">
                            {t('introSubtitle')}
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight whitespace-pre-line">
                            {t('introTitle')}
                        </h3>
                        <p className="text-lg text-gray-700 leading-loose mb-10">
                            {t('introDescription')}
                        </p>
                        <Link href="/about" className="inline-block px-8 py-3 border-2 border-brand-navy text-brand-navy font-bold hover:bg-brand-navy hover:text-white transition-all">
                            {t('introMore')}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}