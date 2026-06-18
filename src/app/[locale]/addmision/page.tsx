import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const programTones = [
    'from-[#1A2B4C] to-[#2f4d86]',
    'from-[#6f3f16] to-[#E88B2E]',
    'from-[#163d3a] to-[#2e8b7a]',
];

type ProgramCard = {
    title: string;
    degree: string;
    method: string;
    seats: string;
};

type ScheduleStep = {
    title: string;
    date: string;
    content: string;
};

type DocumentRow = {
    category: string;
    docs: string;
};

export default function AdmissionPage() {
    const t = useTranslations('Admission');
    const programCards = t.raw('programs.cards') as ProgramCard[];
    const qualifications = t.raw('eligibility.items') as string[];
    const documentRows = t.raw('documents.rows') as DocumentRow[];
    const scheduleRows = t.raw('process.steps') as ScheduleStep[];
    const notices = t.raw('notice.items') as string[];
    const methods = t.raw('methods') as string[];

    return (
        <main className="min-h-screen overflow-hidden bg-[#f7efe0] text-brand-navy">
            <section className="relative isolate px-6 pb-20 pt-20 md:pb-28 md:pt-28">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(232,139,46,0.24),transparent_34%),radial-gradient(circle_at_85%_5%,rgba(26,43,76,0.22),transparent_30%),linear-gradient(135deg,#fffaf0_0%,#f7efe0_48%,#edf3f5_100%)]" />
                <div className="absolute left-1/2 top-12 -z-10 h-72 w-72 rounded-full border border-brand-orange/20 md:h-[34rem] md:w-[34rem]" />
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <p className="mb-5 inline-flex rounded-full border border-brand-orange/30 bg-white/70 px-5 py-2 text-xs font-black uppercase tracking-[0.42em] text-brand-orange shadow-sm backdrop-blur">
                            {t('heroEyebrow')}
                        </p>
                        <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-7xl">
                            {t('heroTitleLine1')}<br />{t('heroTitleLine2')}
                        </h1>
                        <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-slate-700 md:text-xl">
                            {t('heroDescription')}
                        </p>
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <a href="#admission-process" className="inline-flex items-center justify-center rounded-full bg-brand-navy px-8 py-4 text-sm font-black text-white shadow-xl shadow-brand-navy/20 transition hover:-translate-y-1 hover:bg-brand-orange">
                                {t('processCta')}
                            </a>
                            <Link href="/notice" className="inline-flex items-center justify-center rounded-full border border-brand-navy/20 bg-white/80 px-8 py-4 text-sm font-black text-brand-navy transition hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange">
                                {t('noticeCta')}
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-brand-navy/15 backdrop-blur">
                            <div className="rounded-[1.5rem] bg-brand-navy p-7 text-white">
                                <p className="text-sm font-black uppercase tracking-[0.36em] text-brand-orange">{t('intakeEyebrow')}</p>
                                <h2 className="mt-5 text-3xl font-black leading-tight">{t('intakeTitleLine1')}<br />{t('intakeTitleLine2')}</h2>
                                <div className="mt-8 grid gap-3">
                                    {methods.map((item) => (
                                        <div key={item} className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 text-sm font-bold">
                                            <span>{item} {t('applicationSuffix')}</span>
                                            <span className="text-brand-orange">{t('available')}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-24">
                <SectionHeader eyebrow={t('programs.eyebrow')} title={t('programs.title')} description={t('programs.description')} />
                <div className="grid gap-5 md:grid-cols-3">
                    {programCards.map((program, index) => (
                        <article key={program.title} className={`rounded-[1.75rem] bg-gradient-to-br ${programTones[index]} p-7 text-white shadow-xl shadow-brand-navy/10`}>
                            <p className="text-sm font-black text-white/65">{program.degree}</p>
                            <h3 className="mt-4 text-2xl font-black leading-tight">{program.title}</h3>
                            <div className="mt-8 flex items-end justify-between border-t border-white/20 pt-5">
                                <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold">{program.method}</span>
                                <span className="text-3xl font-black">{program.seats}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-white px-6 py-24">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div id="admission-eligibility">
                        <SectionHeader eyebrow={t('eligibility.eyebrow')} title={t('eligibility.title')} description={t('eligibility.description')} />
                        <div className="grid gap-4">
                            {qualifications.map((item, index) => (
                                <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-black text-white">{index + 1}</span>
                                    <p className="font-bold leading-8 text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="admission-process">
                        <SectionHeader eyebrow={t('process.eyebrow')} title={t('process.title')} description={t('process.description')} />
                        <div className="relative space-y-4 before:absolute before:left-7 before:top-7 before:h-[calc(100%-3.5rem)] before:w-px before:bg-brand-orange/30">
                            {scheduleRows.map((row, index) => (
                                <article key={row.title} className="relative flex gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <span className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-sm font-black text-white">{String(index + 1).padStart(2, '0')}</span>
                                    <div>
                                        <h3 className="text-xl font-black text-brand-navy">{row.title}</h3>
                                        <p className="mt-2 font-black text-brand-orange">{row.date}</p>
                                        <p className="mt-1 leading-7 text-slate-600">{row.content}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr]">
                <div id="admission-documents" className="rounded-[2rem] bg-white p-6 shadow-xl shadow-brand-navy/10 md:p-8">
                    <SectionHeader eyebrow={t('documents.eyebrow')} title={t('documents.title')} description={t('documents.description')} compact />
                    <div className="mt-8 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200">
                        {documentRows.map((row) => (
                            <div key={row.category} className="grid gap-2 bg-white p-5 md:grid-cols-[10rem_1fr] md:gap-6">
                                <strong className="text-brand-navy">{row.category}</strong>
                                <p className="leading-7 text-slate-600">{row.docs}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="admission-notice" className="rounded-[2rem] bg-brand-navy p-6 text-white shadow-xl shadow-brand-navy/20 md:p-8">
                    <SectionHeader eyebrow={t('notice.eyebrow')} title={t('notice.title')} description={t('notice.description')} compact dark />
                    <div className="mt-8 space-y-4">
                        {notices.map((notice, index) => (
                            <div key={notice} className="rounded-2xl bg-white/10 p-5 leading-7">
                                <span className="mb-2 block text-sm font-black text-brand-orange">{t('notice.label')} {index + 1}</span>
                                {notice}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 pb-24">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-orange to-[#f2b56f] p-8 text-brand-navy shadow-2xl shadow-brand-orange/20 md:flex md:items-center md:justify-between md:p-12">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.34em] text-white/80">{t('help.eyebrow')}</p>
                        <h2 className="mt-3 text-3xl font-black md:text-4xl">{t('help.title')}</h2>
                        <p className="mt-3 font-bold text-brand-navy/75">{t('help.description')}</p>
                    </div>
                    <Link href="/notice" className="mt-8 inline-flex rounded-full bg-brand-navy px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-brand-navy md:mt-0">
                        {t('help.cta')}
                    </Link>
                </div>
            </section>
        </main>
    );
}

function SectionHeader({ eyebrow, title, description, compact = false, dark = false }: { eyebrow: string; title: string; description: string; compact?: boolean; dark?: boolean }) {
    return (
        <div className={compact ? '' : 'mb-10'}>
            <p className="text-sm font-black uppercase tracking-[0.34em] text-brand-orange">{eyebrow}</p>
            <h2 className={`mt-3 text-3xl font-black tracking-[-0.03em] md:text-4xl ${dark ? 'text-white' : 'text-brand-navy'}`}>{title}</h2>
            <p className={`mt-4 leading-8 ${dark ? 'text-white/70' : 'text-slate-600'}`}>{description}</p>
        </div>
    );
}