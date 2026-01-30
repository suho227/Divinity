import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function DepartmentsPage() {
    const t = useTranslations('About.departments');

    const sem1 = [
        { name: t('subjects.otIntro'), type: t('categories.majorReq') },
        { name: t('subjects.ntIntro'), type: t('categories.majorReq') },
        { name: t('subjects.histEd'), type: t('categories.majorElect') },
        { name: t('subjects.philTheo'), type: t('categories.majorElect') },
        { name: t('subjects.psychIntro'), type: t('categories.genReq') },
        { name: t('subjects.theoEng1'), type: t('categories.genElect') },
        { name: t('subjects.bibWorldview'), type: t('categories.other') },
        { name: t('subjects.otBack'), type: t('categories.other') },
    ];

    const sem2 = [
        { name: t('subjects.introEd'), type: t('categories.majorReq') },
        { name: t('subjects.pentateuch'), type: t('categories.majorElect') },
        { name: t('subjects.histDoc'), type: t('categories.majorElect') },
        { name: t('subjects.wisdom'), type: t('categories.majorElect') },
        { name: t('subjects.philIntro'), type: t('categories.genReq') },
        { name: t('subjects.edPsych'), type: t('categories.genReq') },
        { name: t('subjects.theoEng2'), type: t('categories.genElect') },
        { name: t('subjects.ntBack'), type: t('categories.genElect') },
    ];

    return (
        <main className="relative bg-[#FAF7F2] min-h-screen py-24 px-8 overflow-hidden">
            {/* 배경 이미지 및 오버레이 */}
            <div className="absolute inset-0 z-0">
                <Image src="/greeting-bg.jpg" alt="Background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-[#FAF7F2]/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* 1. 페이지 타이틀 */}
                <div className="mb-12">
                    <h1 className="text-4xl font-black text-brand-navy border-l-8 border-brand-navy pl-6 uppercase tracking-tight">
                        {t('pageTitle')}
                    </h1>
                </div>
                {/* 2. 메시지 박스 */}
                <div className="bg-white/50 p-8 md:p-10 shadow-sm rounded-sm border border-blue-100 mb-16">
                    <h2 className="text-xs font-black text-blue-400 mb-4 tracking-widest uppercase italic">Message</h2>
                    <p className="text-gray-600 leading-relaxed text-[16px]">
                        {t('introMessage')}
                    </p>
                </div>

                {/* 🌟 3. 커리큘럼 요약 카드 (왼쪽 정렬로 수정됨) 🌟 */}
                {/* justify-start를 사용하여 왼쪽으로 배치했습니다. */}
                <div className="flex justify-start mb-10">
                    {/* border-l-8로 변경하여 페이지 타이틀과 디자인 일체감을 주었습니다. */}
                    <div className="bg-white/80 p-6 shadow-lg rounded-sm border-l-8 border-brand-navy text-left min-w-[280px]">
                        <p className="text-gray-400 text-[10px] font-bold tracking-widest mb-1 uppercase">
                            {t('degreeName')}
                        </p>
                        <h4 className="text-2xl font-serif font-bold text-brand-navy">
                            {t('yearInfo')}
                        </h4>
                    </div>
                </div>

                {/* 4. 커리큘럼 표 그리드 */}
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* 제 1학기 - 네이비 테마 */}
                    <div className="bg-white shadow-xl rounded-sm overflow-hidden border-t-4 border-brand-navy">
                        <div className="bg-gray-50 px-6 py-5 border-b border-gray-100">
                            {/* 🌟 폰트 색상 변경: 네이비 🌟 */}
                            <h3 className="text-brand-navy font-black text-xl tracking-tighter">
                                {t('semester1')}
                            </h3>
                        </div>
                        <table className="w-full text-left">
                            <tbody>
                                {sem1.map((item, idx) => (
                                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 text-gray-700 font-medium text-[15px]">{item.name}</td>
                                        <td className="px-6 py-4 text-right text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{item.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* 제 2학기 - 오렌지 테마 */}
                    <div className="bg-white shadow-xl rounded-sm overflow-hidden border-t-4 border-brand-orange">
                        <div className="bg-gray-50 px-6 py-5 border-b border-gray-100">
                            {/* 🌟 폰트 색상 변경: 오렌지 🌟 */}
                            <h3 className="text-brand-orange font-black text-xl tracking-tighter">
                                {t('semester2')}
                            </h3>
                        </div>
                        <table className="w-full text-left">
                            <tbody>
                                {sem2.map((item, idx) => (
                                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 text-gray-700 font-medium text-[15px]">{item.name}</td>
                                        <td className="px-6 py-4 text-right text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{item.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}