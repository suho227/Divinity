import { getTranslations } from 'next-intl/server';

export default async function DepartmentsPage() {
    const t = await getTranslations('About.departments');

    // 1학기 과목 리스트 (JSON의 subjects 키를 활용)
    const semester1Subjects = [
        { category: 'majorReq', name: 'otIntro' },
        { category: 'majorReq', name: 'ntIntro' },
        { category: 'genReq', name: 'histEd' },
        { category: 'genReq', name: 'philTheo' },
        { category: 'genElect', name: 'psychIntro' },
        { category: 'other', name: 'theoEng1' },
    ];

    // 2학기 과목 리스트
    const semester2Subjects = [
        { category: 'majorReq', name: 'pentateuch' },
        { category: 'majorReq', name: 'histDoc' },
        { category: 'genReq', name: 'introEd' },
        { category: 'genElect', name: 'philIntro' },
        { category: 'genElect', name: 'edPsych' },
        { category: 'other', name: 'theoEng2' },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-20 font-sans">
            {/* 상단 헤더 */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-black text-[#001529] mb-4">{t('pageTitle')}</h1>
                <div className="w-16 h-1 bg-brand-orange mx-auto mb-8"></div>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
                    "{t('introMessage')}"
                </p>
            </div>

            {/* 학위 정보 섹션 */}
            <section className="mb-20">
                <div className="bg-gray-50 p-8 border-l-4 border-brand-orange shadow-sm">
                    <h2 className="text-2xl font-bold text-[#001529] mb-2">{t('degreeName')}</h2>
                    <p className="text-brand-orange font-bold">{t('yearInfo')}</p>
                </div>
            </section>

            {/* 커리큘럼 테이블 */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* 1학기 */}
                <CurriculumTable
                    title={t('semester1')}
                    subjects={semester1Subjects}
                    t={t}
                />
                {/* 2학기 */}
                <CurriculumTable
                    title={t('semester2')}
                    subjects={semester2Subjects}
                    t={t}
                />
            </div>
        </div>
    );
}

// 테이블 컴포넌트 분리
function CurriculumTable({ title, subjects, t }: { title: string; subjects: any[]; t: any }) {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <div className="bg-[#001529] py-4 px-6">
                <h3 className="text-white font-bold text-lg">{title}</h3>
            </div>
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 text-gray-600 text-sm">
                    <tr>
                        <th className="py-4 px-6 border-b">{t('categories.other')}</th>
                        <th className="py-4 px-6 border-b">과목명</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {subjects.map((sub, idx) => (
                        <tr key={idx} className="hover:bg-orange-50/30 transition-colors">
                            <td className="py-4 px-6 text-sm">
                                <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-500 font-medium">
                                    {t(`categories.${sub.category}`)}
                                </span>
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-800">
                                {t(`subjects.${sub.name}`)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}