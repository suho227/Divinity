import { useTranslations } from 'next-intl';

export default function LocationPage() {
    const t = useTranslations('About.location');

    return (
        <main className="bg-white min-h-screen">
            {/* 상단 배너 섹션 */}
            <div className="bg-brand-navy py-24 text-center">
                <h1 className="text-4xl font-black text-white uppercase tracking-widest">{t('title')}</h1>
                <p className="text-brand-orange mt-4 font-bold tracking-tight">{t('subtitle')}</p>
                <div className="w-12 h-1 bg-brand-orange mx-auto mt-6"></div>
            </div>

            <div className="max-w-6xl mx-auto py-20 px-8">
                {/* 1. 구글 지도 (에도가와 성산교회 위치로 임베드 주소를 교체하세요) */}
                <div className="w-full h-[500px] bg-gray-100 rounded-sm overflow-hidden shadow-xl mb-16 border border-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.5582256646917!2d139.8912664!3d35.7370819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601885d5e866aaab%3A0xaccfc818150e73ab!2z64-Z6rK97ISx7IKw6re466as7Iqk64-E6rWQ7ZqM!5e0!3m2!1sko!2sjp!4v1769662909862!5m2!1sko!2sjp"
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
                    <div className="bg-[#F8FAFC] p-10 shadow-sm border-l-8 border-brand-navy">
                        <h3 className="text-brand-navy font-black text-xl mb-6 flex items-center gap-2">
                            <span>📍</span> ADDRESS
                        </h3>
                        <p className="text-gray-700 text-[17px] leading-relaxed whitespace-pre-line">
                            {t('address')}
                        </p>
                        <p className="mt-6 text-brand-navy font-bold">
                            TEL: {t('tel')}
                        </p>
                    </div>

                    <div className="bg-[#FFFBF5] p-10 shadow-sm border-l-8 border-brand-orange">
                        <h3 className="text-brand-orange font-black text-xl mb-6 flex items-center gap-2">
                            <span>🚃</span> ACCESS
                        </h3>
                        <p className="text-gray-700 text-[17px] leading-relaxed whitespace-pre-line">
                            {t('transport')}
                        </p>
                    </div>
                </div>
            </div>
        </main >
    );
}