'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CalendarPage() {
    const t = useTranslations('About.departments.graduate.calendar');
    const now = new Date();
    const [viewDate, setViewDate] = useState(new Date(now.getFullYear(), 2, 1)); // 3월 기준

    const currentYear = viewDate.getFullYear();
    const currentMonth = viewDate.getMonth();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blankDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const handlePrevMonth = () => setViewDate(new Date(currentYear, currentMonth - 1, 1));
    const handleNextMonth = () => setViewDate(new Date(currentYear, currentMonth + 1, 1));

    // 데이터 파싱
    const eventRawData = t.has(`events.m${currentMonth + 1}`) ? t(`events.m${currentMonth + 1}`) : "";
    const eventDays = eventRawData ? eventRawData.split(', ').map(item => item.split(':')[0].trim()) : [];
    const displayEvents = eventRawData ? eventRawData.split(', ').filter((item, index, self) =>
        index === self.findIndex((t) => t.split(':')[1] === item.split(':')[1])
    ) : [];

    return (
        <main className="relative bg-[#FAF7F2] min-h-screen py-24 px-8 overflow-hidden">
            {/* 배경 이미지 */}
            <div className="absolute inset-0 z-0">
                <Image src="/前景.png" alt="Background" fill sizes="100vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl font-black text-[#002855] border-l-8 border-[#F39200] pl-6 uppercase tracking-tight">
                        {t('pageTitle')}
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* [왼쪽] 달력 영역 */}
                    <div className="w-full lg:w-[450px] bg-white shadow-2xl rounded-sm border border-gray-100 shrink-0">
                        {/* 달력 헤더 */}
                        <div className="bg-[#002855] p-6 flex justify-between items-center text-white">
                            <button onClick={handlePrevMonth} className="hover:text-[#F39200] text-xl px-2">◀</button>
                            <div className="text-center">
                                <span className="block text-[10px] tracking-[0.3em] text-[#F39200] font-bold uppercase mb-1">{currentYear}</span>
                                <h2 className="text-2xl font-black">
                                    {t('monthName', { month: currentMonth + 1 })}
                                </h2>
                            </div>
                            <button onClick={handleNextMonth} className="hover:text-[#F39200] text-xl px-2">▶</button>
                        </div>

                        {/* 요일 표시 (SUN, MON...) - 다시 추가됨 */}
                        <div className="grid grid-cols-7 border-b border-gray-50 bg-gray-50/30">
                            {weekDays.map(day => (
                                <div key={day} className={`py-3 text-center text-[10px] font-black ${day === 'SUN' ? 'text-red-500' : 'text-gray-400'}`}>{day}</div>
                            ))}
                        </div>

                        {/* 날짜 그리드 */}
                        <div className="grid grid-cols-7 p-4">
                            {blankDays.map(b => <div key={`b-${b}`} className="aspect-square"></div>)}
                            {daysArray.map(d => {
                                const hasEvent = eventDays.includes(String(d).padStart(2, '0')) || eventDays.includes(String(d));
                                return (
                                    <div key={d} className="relative aspect-square flex items-center justify-center">
                                        <span className={`text-sm font-bold ${hasEvent ? 'text-[#002855]' : 'text-gray-700'}`}>{d}</span>
                                        {hasEvent && <div className="absolute bottom-2 w-6 h-1 bg-[#F39200] rounded-full animate-pulse"></div>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* [오른쪽] 일정 리스트 영역 */}
                    <div className="flex-grow w-full">
                        <div className="bg-white/90 p-10 md:p-14 shadow-xl border-t-8 border-[#F39200] relative">
                            <div className="mb-12 border-b border-gray-100 pb-6 flex justify-between items-end">
                                <h3 className="text-3xl font-black text-[#002855]">
                                    {t('monthName', { month: currentMonth + 1 })} {t('majorSchedule')}
                                </h3>
                                <span className="text-[#F39200] font-serif italic hidden md:block">Academic Calendar</span>
                            </div>

                            {displayEvents.length > 0 ? (
                                <ul className="space-y-10 relative z-10">
                                    {displayEvents.map((item, i) => {
                                        const [date, content] = item.split(':');
                                        return (
                                            <li key={i} className="flex items-start gap-8 group">
                                                <div className="flex flex-col items-center min-w-[50px] pt-1">
                                                    <span className="text-[#F39200] font-black text-3xl leading-none">{date}</span>
                                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">Day</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-xl font-bold text-gray-800 leading-relaxed whitespace-pre-line group-hover:text-[#002855] transition-colors">
                                                        {content}
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <div className="py-32 text-center text-gray-300 italic text-lg">{t('noEvent')}</div>
                            )}
                            {/* 배경 숫자 장식 */}
                            <span className="absolute -bottom-10 -right-6 text-[200px] font-black text-gray-400/5 pointer-events-none italic">
                                {String(currentMonth + 1).padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}