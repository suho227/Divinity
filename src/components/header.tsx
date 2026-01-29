'use client';

import { Link, usePathname } from '@/navigation'; // 반드시 @/navigation인지 확인하세요!
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const languages = [
    { code: 'ko', name: '한국어' },
    { code: 'ja', name: '日本語' },
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
];

export default function Header() {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const pathname = usePathname();

    // About Us 하위 메뉴 데이터
    const aboutSubMenus = [
        { name: 'greeting', href: '/about/greeting' },
        { name: 'intro', href: '/about/intro' },
        { name: 'location', href: '/about/location' },
    ];

    return (
        <header className="w-full sticky top-0 z-50 shadow-2xl font-sans">
            {/* 1. 상단 블랙 바 */}
            <div className="bg-black py-2.5 px-8 flex justify-between items-center border-b border-white/10">
                <div className="flex gap-6 text-[11px] text-white/70 font-bold tracking-widest">
                    <span>TEL. 03-3865-4442</span>
                    <span>EMAIL. [EMAIL_ADDRESS]</span>
                </div>
                <div className="relative group">
                    {/* 트리거 버튼: 현재 선택된 언어 표시 */}
                    <button className="flex items-center gap-2 text-white/80 hover:text-brand-orange transition-all text-[11px] font-black tracking-widest uppercase py-1">
                        <span className="text-brand-orange">🌐</span>
                        {languages.find(l => l.code === locale)?.name}
                        <span className="text-[8px] transition-transform group-hover:rotate-180 ml-1">▼</span>
                    </button>

                    {/* 실제 드롭다운 목록: 평소엔 숨겨져 있다가 group-hover 시 나타남 */}
                    <ul className="absolute top-full right-0 mt-1 w-32 bg-black border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <Link
                                    href={pathname} // 현재 경로 유지
                                    locale={lang.code}
                                    className={`block px-4 py-2 text-[11px] font-bold transition-all border-b border-white/5 
                                    ${locale === lang.code ? 'text-brand-orange bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                                >
                                    {lang.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 2. 메인 바: 로고 + 중앙 메뉴(드롭다운 포함) */}
            <div className="bg-[#001529] px-8 py-5 flex items-center relative h-24">
                {/* [좌측] 로고 */}
                <Link href="/" className="flex items-center gap-4 z-20 shrink-0">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-orange bg-white">
                        <Image src="/logo2.jpg" alt="Logo" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col text-white">
                        <span className="text-[10px] text-brand-orange font-black tracking-[0.2em] uppercase leading-none mb-1">{t('subTitle')}</span>
                        <span className="text-xl md:text-2xl font-black tracking-tighter">{t('schoolName')}</span>
                    </div>
                </Link>

                {/* [중앙] 네비게이션 메뉴 */}
                <nav className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div className="flex gap-10 pointer-events-auto">

                        {/* 🌟 About Us 드롭다운 메뉴 🌟 */}
                        <div className="relative group">
                            <Link href="/about/intro" className="text-white font-bold text-[17px] hover:text-brand-orange transition-all py-8 flex items-center gap-1">
                                {t('about')}
                                <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>
                            </Link>

                            {/* 드롭다운 박스 */}
                            <ul className="absolute top-full left-1/2 -translate-x-1/2 w-40 bg-[#001529] border-t-2 border-brand-orange shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                {aboutSubMenus.map((sub) => (
                                    <li key={sub.name}>
                                        <Link href={sub.href} className="block px-6 py-4 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all border-b border-white/5">
                                            {t(sub.name)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 나머지 단일 메뉴들 */}
                        {['departments', 'worship', 'notice', 'archive'].map((item) => (
                            <Link key={item} href={`/${item}`} className="text-white font-bold text-[17px] hover:text-brand-orange transition-all py-8">
                                {t(item)}
                            </Link>
                        ))}
                    </div>
                </nav>
                <div className="w-[300px] hidden xl:block"></div>
            </div>
        </header>
    );
}