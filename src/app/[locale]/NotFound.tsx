import { useTranslations } from 'next-intl';

export default function NotFound() {
    // 1. t 변수를 반드시 선언해야 번역 문구를 가져올 수 있습니다.
    const t = useTranslations('NotFound');

    return (
        // 2. 불필요하게 중첩된 div를 하나로 합치고 구문을 정리했습니다.
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 text-center bg-white">
            <h1 className="text-6xl font-black text-brand-navy mb-4">404</h1>
            <p className="text-2xl font-bold text-gray-800 mb-2">{t('title')}</p>
            <p className="text-lg text-gray-600 mb-8">{t('description')}</p>

            {/* 홈으로 이동하는 버튼을 추가하면 사용자 경험이 더 좋아집니다. */}
            <a
                href="/"
                className="px-8 py-3 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-navy transition-all"
            >
                ホームに戻る
            </a>
        </div>
    );
}