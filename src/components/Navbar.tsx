'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Navbar() {
    const t = useTranslations('Navigation');

    return (
        <nav className="w-full bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
            {/* 왼쪽: 로고 */}
            <div className="text-xl font-bold text-blue-900 tracking-tight">
                <Link href="/">DIVINITY SEMINARY</Link>
            </div>

            {/* 중간: 메뉴 (간격 조절) */}
            <div className="hidden md:flex gap-10 font-medium text-gray-600">
                <Link href="/about" className="hover:text-blue-900 transition">{t('intro')}</Link>
                <Link href="/curriculum" className="hover:text-blue-900 transition">{t('curriculum')}</Link>
                <Link href="/church" className="hover:text-blue-900 transition">{t('church')}</Link>
                <Link href="/admission" className="hover:text-blue-900 transition">{t('admission')}</Link>
            </div>

            {/* 오른쪽: 언어 선택 */}
            <div className="flex gap-4 text-xs font-bold text-gray-400">
                <Link href="/ko" className="hover:text-black">KR</Link>
                <span className="text-gray-200">|</span>
                <Link href="/ja" className="hover:text-black">JP</Link>
                <span className="text-gray-200">|</span>
                <Link href="/en" className="hover:text-black">EN</Link>
            </div>
        </nav>
    );
}