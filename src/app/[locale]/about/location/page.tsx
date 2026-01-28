import { useTranslations } from 'next-intl';

export default function LocationPage() {
    const t = useTranslations('About.location');
    return (
        <main className="bg-brand-cream min-h-screen py-20 px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-black text-brand-navy mb-12">{t('title')}</h1>

                {/* 구글 지도 (실제 주소로 임베드 코드를 교체하세요) */}
                <div className="w-full h-[500px] bg-gray-200 mb-12 shadow-inner overflow-hidden rounded-sm">
                    <iframe
                        src="https://maps.app.goo.gl/wapzKzHGMhoHvbdHA"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    ></iframe>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                    <div className="bg-white p-8 border-l-4 border-brand-navy shadow-sm">
                        <h4 className="font-bold text-brand-navy mb-2">주소 (Address)</h4>
                        <p className="text-gray-600">{t('address')}</p>
                    </div>
                    <div className="bg-white p-8 border-l-4 border-brand-orange shadow-sm">
                        <h4 className="font-bold text-brand-navy mb-2">교통 안내 (Access)</h4>
                        <p className="text-gray-600">{t('transport')}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}