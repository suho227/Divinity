import { useTranslations } from 'next-intl';
import Image from 'next/image';

type CurriculumRow = [string, string, string, string];

export default function DepartmentsPage() {
    const t = useTranslations('About.departments');

  const curriculumHeaders = t.raw('curriculum.headers') as string[];
    const curriculumRows = t.raw('curriculum.rows') as CurriculumRow[];
    const yearCurricula = curriculumHeaders.slice(0, 3).map((header, columnIndex) => ({
        header,
        subjects: curriculumRows.map((row) => row[columnIndex]).filter(Boolean),
    }));
    const sharedCurriculum = {
        header: curriculumHeaders[3],
        subjects: curriculumRows.map((row) => row[3]).filter(Boolean),
    };
    return (
        <main className="relative bg-[#FAF7F2] min-h-screen py-24 px-8 overflow-hidden">
            {/* 배경 이미지 및 오버레이 */}
            <div className="absolute inset-0 z-0">
                <Image src="/前景.png" alt="Background" fill sizes="100vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-[#FAF7F2]/90 backdrop-blur-sm"></div>
            </div>


                  <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-black text-brand-navy border-l-8 border-brand-navy pl-6 uppercase tracking-tight">
                        {t('pageTitle')}
                    </h1>
                </div>
                {/* 2. 메시지 박스 */}
                <div className="bg-white/50 p-8 md:p-10 shadow-sm rounded-sm border border-blue-100 mb-12">
                    <h2 className="text-xs font-black text-blue-400 mb-4 tracking-widest uppercase italic">Message</h2>
                    <p className="text-gray-600 leading-relaxed text-[16px]">
                        {t('introMessage')}
                    </p>
                </div>

                  <section className="grid gap-6 lg:grid-cols-3">
                    {yearCurricula.map((group) => (
                        <article
                            key={group.header}
                            className="flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-xl border-t-4 border-brand-navy"
                        >
                            <div className="bg-gray-50 px-6 py-5 border-b border-gray-100">
                                <h3 className="text-2xl font-black text-brand-navy break-keep">
                                    {group.header}
                                </h3>
                            </div>
                            <ul className="grid gap-2 p-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                {group.subjects.map((subject) => (
                                    <li
                                        key={subject}
                                        className="rounded-md border border-gray-100 bg-[#FAF7F2]/70 px-3 py-2 text-sm font-semibold leading-relaxed text-gray-700 break-keep"
                                    >
                                        {subject}
                                    </li>
                                ))}
      </ul>
                        </article>
                    ))}
                </section>
                <section className="mt-8 overflow-hidden rounded-sm bg-white shadow-xl border-t-4 border-brand-orange">
                    <div className="bg-gray-50 px-6 py-5 border-b border-gray-100">
                        <h3 className="text-2xl font-black text-brand-navy break-keep">
                            {sharedCurriculum.header}
                        </h3>
                        <p className="text-brand-orange font-bold text-sm mt-2">
                            {t('graduate.sharedCourses.provider')}
                        </p>
                    </div>
                    <div className="px-6 py-6">
                        <ul className="grid gap-3 p-5 md:grid-cols-2 xl:grid-cols-3">
                        {sharedCurriculum.subjects.map((subject) => (
                            <li
                                key={subject}
                                className="rounded-md border border-gray-100 bg-white px-4 py-3 text-sm font-semibold leading-relaxed text-gray-700 shadow-sm break-keep"
                            >
                                {subject}
                            </li>
                        ))}
                    </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
