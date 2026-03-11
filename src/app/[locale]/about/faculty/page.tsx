'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const facultyMembers = [
    { key: 'shinKwang', image: '/faculty/shinKwang.jpg' },
    { key: 'inyong', image: '/faculty/inyong.jpg' },
    { key: 'kwonseok', image: '/faculty/kwonseok.jpg' },
    { key: 'daeyoung', image: '/faculty/daeyoung.jpg' },
    { key: 'woonghwa', image: '/faculty/woonghwa.jpg' },
    { key: 'sungjin', image: '/faculty/sungjin.jpg' },
    { key: 'giseob', image: '/faculty/giseob.jpg' },
    { key: 'sangmin', image: '/faculty/sangmin.jpg' },
    { key: 'daesung', image: '/faculty/daesung.jpg' },
    { key: 'donghwi', image: '/faculty/donghwi.jpg' },
    { key: 'eunju', image: '/faculty/eunju.jpg' },
    { key: 'hangon', image: '/faculty/hangon.jpg' },
    { key: 'seongsam', image: '/faculty/seongsam.jpg' },
    { key: 'kwangseop', image: '/faculty/kwangseop.jpg' }
] as const;

export default function FacultyPage() {
    const t = useTranslations('About.faculty');

    return (
        <main className="relative bg-[#FAF7F2] min-h-screen py-24 px-8 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src="/greeting-bg.jpg" alt="Background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-[#FAF7F2]/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl font-black text-[#002855] border-l-8 border-[#F39200] pl-6 uppercase tracking-tight">
                        {t('pageTitle')}
                    </h1>
                    <p className="mt-6 text-gray-700 text-lg break-keep">{t('description')}</p>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facultyMembers.map((member) => (
                        <article key={member.key} className="bg-white border border-blue-50 shadow-sm p-6 text-center flex flex-col items-center gap-5">
                            <div className="relative w-28 h-36 overflow-hidden border border-gray-200 bg-gray-100">
                                <Image
                                    src={member.image}
                                    alt={t(`members.${member.key}`)}
                                    fill
                                    sizes="112px"
                                    className="object-cover"
                                    onError={(event) => {
                                        event.currentTarget.src = '/faculty/default-profile.svg';
                                    }}
                                />
                            </div>
                            <p className="text-xl font-black text-[#001529] break-keep">{t(`members.${member.key}`)}</p>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}