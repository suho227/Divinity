'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const facultyMembers = [
    { key: 'DongyaulTae', image: '/태동열교수님(조직신학).png' },
    { key: 'jaeSungKim', image: '/김재성교수(조직신학).png' },
    { key: 'AYunKim', image: '/김아윤 교수(구약학).png' },
    { key: 'JiHyeLee', image: '/이지혜교수(신약학).png' },
    { key: 'JungHwaLee', image: '/이정화 교수(신약학).png' },
    { key: 'ShinKwangChoi', image: '/최신광교수(교회사).png' },
    { key: 'PungRyongKim', image: '/김풍룡교수(교회사).png' },
    { key: 'ByungWooJung', image: '/정병우교수(성경신학).png' },
    { key: 'DongJinPark', image: '/박동진교수(실천신학).png' }
    // { key: 'donghwi', image: '/faculty/donghwi.jpg' },
    // { key: 'eunju', image: '/faculty/eunju.jpg' },
    // { key: 'hangon', image: '/faculty/hangon.jpg' },
    // { key: 'seongsam', image: '/faculty/seongsam.jpg' },
    // { key: 'kwangseop', image: '/faculty/kwangseop.jpg' }
] as const;

type FacultyMember = (typeof facultyMembers)[number];
type FacultyMemberKey = FacultyMember['key'];


export default function FacultyPage() {
    const t = useTranslations('About.faculty');

    const [selectedMemberKey, setSelectedMemberKey] = useState<FacultyMemberKey | null>(null);
    const selectedMember = facultyMembers.find((member) => member.key === selectedMemberKey);

    useEffect(() => {
        if (!selectedMemberKey) {
            return;
        }

       const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedMemberKey(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedMemberKey]);

return (
        <main className="relative bg-[#FAF7F2] min-h-screen py-24 px-8 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src="/前景.png" alt="Background" fill sizes="100vw" className="object-cover" priority />
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


    <div className="relative">
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
                                <button
                                    type="button"
                                    aria-label={t('openProfile', { name: t(`members.${member.key}`) })}
                                    onClick={() => setSelectedMemberKey(member.key)}
                                    className="absolute -bottom-2 -right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#F39200] text-lg font-black leading-none text-white shadow-md transition hover:bg-[#d67f00] focus:outline-none focus:ring-2 focus:ring-[#002855] focus:ring-offset-2"
                                >
                                    +
                                </button>
                            </div>
                            <p className="text-xl font-black text-[#001529] break-keep">{t(`members.${member.key}`)}</p>
                        </article>
                    ))}
                </section>
            </div>

            {selectedMember ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#001529]/70 px-4 py-8"
                    role="presentation"
                    onClick={() => setSelectedMemberKey(null)}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="faculty-profile-title"
                        aria-describedby="faculty-profile-description"
                        className="relative w-full max-w-2xl overflow-hidden bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label={t('closeProfile')}
                            onClick={() => setSelectedMemberKey(null)}
                            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-[#002855] shadow transition hover:bg-[#F39200] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#002855]"
                        >
                            ×
                        </button>

                        <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                            <div className="relative min-h-72 bg-gray-100 md:min-h-full">
                                <Image
                                src={selectedMember.image}
                                    alt={t(`members.${selectedMember.key}`)}
                                    fill
                                     sizes="(min-width: 768px) 220px, 100vw"
                                    className="object-cover"
                                    onError={(event) => {
                                        event.currentTarget.src = '/faculty/default-profile.svg';
                                    }}
                                />
                            </div>
                                           <div className="p-8 md:p-10">
                                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F39200]">{t('profileModalTitle')}</p>
                                <h2 id="faculty-profile-title" className="mt-3 text-3xl font-black text-[#001529] break-keep">
                                    {t(`members.${selectedMember.key}`)}
                                </h2>
                                <p id="faculty-profile-description" className="mt-6 whitespace-pre-line text-base leading-8 text-gray-700 break-keep">
                                    {t(`profiles.${selectedMember.key}`)}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            ) : null}
        </main>
    );
}