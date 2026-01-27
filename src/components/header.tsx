'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const t = useTranslations('navigation');
    const pathname = usePathname();

    // 현재 경로에서 언어 코드만 바꿔주는 함수 (예: /ko/about -> /ja/about)
    const getNewPath = (lng: string) => {
        const segments = pathname.split('/');
        segments[1] = lng;
        return segments.join('/');
    };

    return (
        <header className="flex justify-between items-center p-4 bg-white text-blue-900 border-b shadow-sm">
            <nav className="flex gap-6 font-bold">
                <Link href="/">{t('about')}</Link>
                <Link href="/">{t('curriculum')}</Link>
                <Link href="/">{t('church')}</Link>
                <Link href="/">{t('admissions')}</Link>
            </nav>

            <div className="flex gap-3 text-sm">
                <Link href={getNewPath('ko')} className="hover:underline">KR</Link>
                <Link href={getNewPath('ja')} className="hover:underline">JP</Link>
                <Link href={getNewPath('en')} className="hover:underline">EN</Link>
            </div>
        </header>
    );
}