'use client';

import { useState } from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const languages = [
    { code: 'ko', name: '한국어' },
    { code: 'ja', name: '日本語' },
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
];

const externalMenuLinks = [
    { labelKey: 'acsLinkLabel', href: 'https://www.acs-ed.jp/?lang=zh', ariaLabelKey: 'acsLinkAriaLabel' },
    { labelKey: 'azabuLinkLabel', href: 'https://azabufukuin.com/', ariaLabelKey: 'azabuLinkAriaLabel' },
];

function ExternalLinkIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M9 5H5.75C5.33579 5 5 5.33579 5 5.75V18.25C5 18.6642 5.33579 19 5.75 19H18.25C18.6642 19 19 18.6642 19 18.25V15"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13 5H19V11"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.5 13.5L19 5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default function Header() {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const aboutSubMenus = [
        { name: 'greeting', href: '/about/greeting' },
        { name: 'intro', href: '/about/intro' },
        { name: 'faculty', href: '/about/faculty' },
        { name: 'history', href: '/about/history' },
        { name: 'location', href: '/about/location' },
    ];

    const deptMenuItems = [
        { href: '/about/departments/bth', label: 'dept_bth' },
        { href: '/about/departments/japanese', label: 'dept_japanese' },
        { href: '/about/departments/calendar', label: 'dept_calendar' }
    ];

   const admissionMenuItems = [
        { href: '/admission', label: 'admissionGuide' },
        { href: '/admission/forms', label: 'admissionForms' },
        { href: '/admission/consultation', label: 'admissionConsultation' },
    ];


    return (
        <header className="w-full sticky top-0 z-50 shadow-2xl font-sans">
            {/* 상단바: 여기도 중앙 정렬을 맞춰주는 것이 좋습니다 */}
            <div className="bg-black py-2 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                    <div className="flex gap-3 md:gap-6 text-[10px] md:text-[11px] text-white/70 font-bold tracking-widest">
                        {/* <span className="hidden sm:inline">TEL. 03-3865-4442</span>
                        <span className="sm:hidden">03-3865-4442</span> */}
                    </div>
                    <div className="relative group">
                        <button className="flex items-center gap-2 text-white/80 hover:text-brand-orange transition-all text-[10px] md:text-[11px] font-black tracking-widest uppercase">
                            <span className="text-brand-orange">🌐</span>
                            {languages.find(l => l.code === locale)?.name}
                            <span className="text-[8px] transition-transform group-hover:rotate-180 ml-1">▼</span>
                        </button>
                        <ul className="absolute top-full right-0 mt-1 w-32 bg-black border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
                            {languages.map((lang) => (
                                <li key={lang.code}>
                                    <Link href={pathname} locale={lang.code} className={`block px-4 py-2 text-[11px] font-bold transition-all border-b border-white/5 ${locale === lang.code ? 'text-brand-orange bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
                                        {lang.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* 메인 네비게이션: 핵심 수정 구간 */}
            <div className="bg-[#001529] h-20 md:h-24 flex items-center">
                {/* 🌟 7xl 박스가 로고와 메뉴 전체를 감싸야 합니다! */}
                <div className="w-full px-4 md:px-8 lg:px-10 flex lg:grid lg:grid-cols-[auto_1fr_auto] items-center justify-between gap-6">                    <Link href="/" className="flex items-center gap-3 z-20 shrink-0">
                        <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-brand-orange bg-white">
                            <Image src="/logo2.jpg" alt="Logo" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="text-[8px] md:text-[10px] text-brand-orange font-black tracking-[0.2em] uppercase leading-none mb-1">{t('subTitle')}</span>
                            <span className="text-lg md:text-2xl font-black tracking-tighter break-keep">{t('schoolName')}</span>
                        </div>
                    </Link>

                    {/* 데스크탑 메뉴 */}
                    <div className="hidden lg:flex flex-1 items-center justify-end gap-8">
                    <nav className="hidden lg:flex items-center justify-center gap-10 px-8">
                        <div className="relative group">
                                <Link href="/about/intro" className="text-white font-bold text-[16px] hover:text-brand-orange transition-all py-8 flex items-center gap-1">
                                    {t('about')} <span className="text-[8px] group-hover:rotate-180 transition-transform">▼</span>
                                </Link>
                                <ul className="absolute top-full left-1/2 -translate-x-1/2 w-40 bg-[#001529] border-t-2 border-brand-orange shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    {aboutSubMenus.map((sub) => (
                                        <li key={sub.name}>
                                            <Link href={sub.href} className="block px-6 py-4 text-sm text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5 transition-all">
                                                {t(sub.name)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                             <div className="relative group">
                                <Link href="/about/departments/bth" className="text-white font-bold text-[16px] hover:text-brand-orange transition-all py-8 flex items-center gap-1">
                                    {t('departments')} <span className="text-[8px] group-hover:rotate-180 transition-transform">▼</span>
                                </Link>
                                <ul className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#001529] border-t-2 border-brand-orange shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    {deptMenuItems.map((item) => (
                                        <li key={item.label}>
                                            <Link href={item.href} className="block px-6 py-4 text-sm text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5 transition-all break-keep">
                                                {t(item.label)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

 <div className="relative group">
                            <Link href="/admission" className="text-white font-bold text-[16px] hover:text-brand-orange transition-all py-8 flex items-center gap-1">
                                {t('admissionInfo')} <span className="text-[8px] group-hover:rotate-180 transition-transform">▼</span>
                            </Link>
                            <ul className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#001529] border-t-2 border-brand-orange shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                {admissionMenuItems.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="block px-6 py-4 text-sm text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5 transition-all break-keep">
                                            {t(item.label)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <Link href="/notice" className="text-white font-bold text-[16px] hover:text-brand-orange transition-all py-8">
                                {t('notice')}
                            </Link>
                                           {/* 자료실 탭 임시 비노출: 다시 사용할 때 아래 링크를 주석 해제하세요. */}
                            {/*
                            <Link href="/archive" className="text-white font-bold text-[16px] hover:text-brand-orange transition-all py-8">
                                {t('archive')}
                            </Link>
                            */}
                        </nav>

 {/* 데스크탑 외부 링크 버튼 */}
                    <div className="hidden lg:flex shrink-0 items-center justify-end gap-3">
                        {externalMenuLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t(link.ariaLabelKey)}
                                className="group/link inline-flex items-center gap-2 rounded-full border border-brand-orange/70 px-4 py-2 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-brand-orange hover:text-[#001529] hover:shadow-lg hover:shadow-black/20"
                            >
                                <ExternalLinkIcon className="h-5 w-5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                <span>{t(link.labelKey)}</span>
                            </a>
                        ))}
                    </div>


                    </div>


                    {/* 모바일 메뉴 버튼 */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white p-2"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                            <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* 모바일 사이드바 메뉴 (동일) */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm">
                    <div className="absolute right-0 top-0 h-full w-64 bg-[#001529] p-8 shadow-2xl">
                        <button onClick={() => setIsMenuOpen(false)} className="text-white absolute top-6 right-6 text-2xl">✕</button>
                        <ul className="mt-12 space-y-6">
                            <li>
                                <p className="text-brand-orange font-black text-xs mb-3">{t('about')}</p>
                                <div className="space-y-3 pl-4 border-l border-white/10">
                                    {aboutSubMenus.map(sub => (
                                        <Link key={sub.name} href={sub.href} onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm hover:text-white">{t(sub.name)}</Link>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <p className="text-brand-orange font-black text-xs mb-3">{t('departments')}</p>
                                <div className="space-y-3 pl-4 border-l border-white/10">
                                    {deptMenuItems.map(item => (
                                        <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm hover:text-white">{t(item.label)}</Link>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <p className="text-brand-orange font-black text-xs mb-3">{t('admissionInfo')}</p>
                                <div className="space-y-3 pl-4 border-l border-white/10">
                                    {admissionMenuItems.map(item => (
                                        <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm hover:text-white">{t(item.label)}</Link>
                                    ))}
                                </div>
                            </li>
                             <li>
                                <p className="text-brand-orange font-black text-xs mb-3">{t('admissionInfo')}</p>
                                <div className="space-y-3 pl-4 border-l border-white/10">
                                    {admissionMenuItems.map(item => (
                                        <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm hover:text-white">{t(item.label)}</Link>
                                    ))}
                                </div>
                            </li>
                       {/* 자료실 모바일 메뉴 임시 비노출: 다시 사용할 때 아래 링크를 주석 해제하세요. */}
                            {/*
                            <li>
                                <Link href="/archive" onClick={() => setIsMenuOpen(false)} className="block text-white font-bold">{t('archive')}</Link>
                            </li>
                            */}
 {externalMenuLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={t(link.ariaLabelKey)}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex w-full items-center justify-between rounded-xl border border-brand-orange/70 px-4 py-3 text-white font-black transition-all hover:bg-brand-orange hover:text-[#001529]"
                                    >
                                        <span>{t(link.labelKey)}</span>
                                        <ExternalLinkIcon className="h-5 w-5" />
                                    </a>
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>
            )}
        </header>
    );
}