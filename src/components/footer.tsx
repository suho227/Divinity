'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('navigation');

    return (
        <footer className="bg-[#001529] text-white pt-16 pb-8 px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                {/* 1. 로고 및 학교 정보 섹션 */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white">
                            <Image src="/logo2.jpg" alt="Logo" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-[10px] text-brand-orange font-bold tracking-widest uppercase mb-1">
                                {t('subTitle')}
                            </p>
                            <p className="text-xl font-bold tracking-tight">
                                {t('schoolName')}
                            </p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400 leading-loose">
                        <p>〒133-0051
                            東京都江戸川区北小岩3-13-11</p>
                        <p>TEL: 03-3865-4442</p>
                        <p>EMAIL: info@tits.ac.jp</p>
                    </div>
                </div>

                {/* 2. 사이트 맵 (Quick Links) */}
                <div>
                    <h4 className="text-brand-orange font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                    <ul className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                        <li><Link href="/about" className="hover:text-white transition-colors">{t('about')}</Link></li>
                        <li><Link href="/departments" className="hover:text-white transition-colors">{t('departments')}</Link></li>
                        <li><Link href="/worship" className="hover:text-white transition-colors">{t('worship')}</Link></li>
                        <li><Link href="/notice" className="hover:text-white transition-colors">{t('notice')}</Link></li>
                        <li><Link href="/archive" className="hover:text-white transition-colors">{t('archive')}</Link></li>
                    </ul>
                </div>

                {/* 3. 소셜 미디어 또는 기타 정보 (아자부 교회 스타일) */}
                <div>
                    <h4 className="text-brand-orange font-bold mb-6 uppercase tracking-wider text-sm">Social Media</h4>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all cursor-pointer">
                            <span className="text-xs">FB</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all cursor-pointer">
                            <span className="text-xs">YT</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all cursor-pointer">
                            <span className="text-xs">IG</span>
                        </div>
                    </div>
                    <p className="mt-6 text-xs text-gray-500 italic">
                        &quot;Your life with the Gospel of Jesus Christ.&quot;
                    </p>
                </div>
            </div>

            {/* 하단 저작권 표시 바 */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
                <p>© 2026 Tokyo International Seminary. All rights reserved.</p>
                <div className="flex gap-6 uppercase tracking-tighter">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}