import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarClock,
  CircleAlert,
  FileText,
  GraduationCap,
  Landmark,
  WalletCards,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{ locale: string }>;
};

type TuitionRow = {
  key: 'admissionFee' | 'tuition' | 'facilityFee' | 'subtotal';
  values: Array<number | null>;
};

type YearGroup = {
  label: string;
  count: number;
};

type ScheduleRow = {
  label: string;
  time: string;
  isBreak?: boolean;
};

const theologyRows: TuitionRow[] = [
  { key: 'admissionFee', values: [50000, null, null, null, null, null, null, null] },
  { key: 'tuition', values: [150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000] },
  { key: 'facilityFee', values: [50000, null, 50000, null, 50000, null, 50000, null] },
  { key: 'subtotal', values: [250000, 150000, 200000, 150000, 200000, 150000, 200000, 150000] },
];

const graduateRows: TuitionRow[] = [
  { key: 'admissionFee', values: [50000, null, null, null, null, null] },
  { key: 'tuition', values: [180000, 180000, 180000, 180000, 180000, 180000] },
  { key: 'facilityFee', values: [50000, null, 50000, null, 50000, null] },
  { key: 'subtotal', values: [280000, 180000, 230000, 180000, 230000, 180000] },
];

function getNumberLocale(locale: string) {
  return ({ ko: 'ko-KR', en: 'en-US', ja: 'ja-JP', zh: 'zh-CN' } as Record<string, string>)[locale] ?? 'ko-KR';
}

function formatAmount(value: number | null, locale: string) {
  return value === null ? '-' : new Intl.NumberFormat(getNumberLocale(locale)).format(value);
}

function TuitionTable({
  title,
  description,
  groups,
  periods,
  rows,
  locale,
  labels,
}: {
  title: string;
  description: string;
  groups: YearGroup[];
  periods: string[];
  rows: TuitionRow[];
  locale: string;
  labels: Record<TuitionRow['key'] | 'item' | 'currency', string>;
}) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-6 sm:px-8">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <GraduationCap aria-hidden="true" className="size-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-center text-sm">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr className="bg-indigo-950 text-white">
              <th rowSpan={2} className="sticky left-0 z-20 min-w-36 border-r border-indigo-800 bg-indigo-950 px-4 py-4">
                {labels.item}
              </th>
              {groups.map((group) => (
                <th key={group.label} colSpan={group.count} className="border-r border-indigo-800 px-4 py-3 last:border-r-0">
                  {group.label}
                </th>
              ))}
            </tr>
            <tr className="bg-indigo-900 text-indigo-50">
              {periods.map((period, index) => (
                <th key={`${period}-${index}`} className="min-w-28 border-r border-indigo-800 px-3 py-3 text-xs last:border-r-0">
                  {period}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const isSubtotal = row.key === 'subtotal';
              const rowBackground = isSubtotal
                ? 'bg-indigo-50'
                : rowIndex % 2 === 0
                  ? 'bg-white'
                  : 'bg-slate-50';

              return (
                <tr key={row.key} className={isSubtotal ? 'bg-indigo-50 font-bold' : rowBackground}>
                  <th className={`sticky left-0 z-10 border-b border-r border-slate-200 px-4 py-4 text-left ${rowBackground}`}>
                    {labels[row.key]}
                  </th>
                  {row.values.map((value, index) => (
                    <td key={`${row.key}-${index}`} className="border-b border-r border-slate-200 px-4 py-4 tabular-nums last:border-r-0">
                      {formatAmount(value, locale)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end border-t border-slate-200 px-5 py-3 sm:px-8">
        <p className="text-xs font-medium text-slate-500">{labels.currency}</p>
      </div>
    </section>
  );
}

function ScheduleCard({
  title,
  day,
  badge,
  rows,
}: {
  title: string;
  day: string;
  badge?: string;
  rows: ScheduleRow[];
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-5 sm:px-7">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-slate-950 sm:text-xl">{title}</h3>
            {badge && (
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                {badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm font-medium text-slate-500">{day}</p>
        </div>
        <CalendarClock aria-hidden="true" className="size-6 text-indigo-600" />
      </div>

      <div className="divide-y divide-slate-200">
        {rows.map((row) => (
          <div
            key={`${row.label}-${row.time}`}
            className={`grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 sm:px-7 ${row.isBreak ? 'bg-amber-50' : 'bg-white'}`}
          >
            <span className={`font-semibold ${row.isBreak ? 'text-amber-800' : 'text-slate-700'}`}>
              {row.label}
            </span>
            <time className={`whitespace-nowrap font-bold tabular-nums ${row.isBreak ? 'text-amber-900' : 'text-slate-950'}`}>
              {row.time}
            </time>
          </div>
        ))}
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Admission.tuition' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default function AdmissionPage() {
  const t = useTranslations('Admission.tuition');
  const locale = useLocale();

  const theologyGroups: YearGroup[] = [
    { label: t('years.year1'), count: 2 },
    { label: t('years.year2'), count: 2 },
    { label: t('years.year3'), count: 2 },
    { label: t('years.year4'), count: 2 },
  ];

  const graduateGroups: YearGroup[] = [
    { label: t('years.year1'), count: 2 },
    { label: t('years.year2'), count: 2 },
    { label: t('years.year3'), count: 2 },
  ];

  const theologyPeriods = [
    t('periods.enrollment'), t('periods.secondSemester'),
    t('periods.firstSemester'), t('periods.secondSemester'),
    t('periods.firstSemester'), t('periods.secondSemester'),
    t('periods.firstSemester'), t('periods.secondSemester'),
  ];

  const graduatePeriods = [
    t('periods.enrollment'), t('periods.secondSemester'),
    t('periods.firstSemester'), t('periods.secondSemester'),
    t('periods.firstSemester'), t('periods.secondSemester'),
  ];

  const labels = {
    item: t('table.item'),
    admissionFee: t('table.admissionFee'),
    tuition: t('table.tuition'),
    facilityFee: t('table.facilityFee'),
    subtotal: t('table.subtotal'),
    currency: t('table.currency'),
  };

  const bankInformation = [
    { label: t('bank.bankName'), value: 'きらぼし銀行' },
    { label: t('bank.branchName'), value: '042 錦糸町' },
    { label: t('bank.accountNumber'), value: '5027969' },
    { label: t('bank.accountHolder'), value: '麻布福音教会東京国際神学校' },
  ];

  const theologySchedule: ScheduleRow[] = [
    { label: t('schedule.theology.period1'), time: '19:00 - 19:50' },
    { label: t('schedule.theology.period2'), time: '20:00 - 20:50' },
    { label: t('schedule.theology.period3'), time: '21:00 - 21:50' },
  ];

  const graduateSchedule: ScheduleRow[] = [
    { label: t('schedule.graduate.period1'), time: '09:00 - 09:50' },
    { label: t('schedule.graduate.period2'), time: '10:00 - 10:50' },
    { label: t('schedule.graduate.period3'), time: '11:00 - 11:50' },
    { label: t('schedule.graduate.lunch'), time: '12:00 - 13:00', isBreak: true },
    { label: t('schedule.graduate.period4'), time: '13:00 - 13:50' },
    { label: t('schedule.graduate.period5'), time: '14:00 - 14:50' },
    { label: t('schedule.graduate.period6'), time: '15:00 - 15:50' },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-indigo-950">
        <div className="absolute -right-32 -top-40 size-[500px] rounded-full bg-indigo-700/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100">
              <WalletCards aria-hidden="true" className="size-4" />
              {t('hero.badge')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-indigo-100 sm:text-lg">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-10 px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Landmark aria-hidden="true" className="size-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-700">{t('bank.eyebrow')}</p>
                  <h2 className="text-2xl font-bold text-slate-950">{t('bank.title')}</h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{t('bank.description')}</p>
            </div>

            <dl className="grid flex-1 gap-3 sm:grid-cols-2">
              {bankInformation.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <dt className="text-xs font-semibold text-slate-500">{item.label}</dt>
                  <dd className="mt-2 break-words text-sm font-bold text-slate-950 sm:text-base">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-950">
          <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-600" />
          <p className="text-sm leading-6">{t('notice')}</p>
        </div>

        <TuitionTable
          title={t('departments.theology.title')}
          description={t('departments.theology.description')}
          groups={theologyGroups}
          periods={theologyPeriods}
          rows={theologyRows}
          locale={locale}
          labels={labels}
        />

        <TuitionTable
          title={t('departments.graduate.title')}
          description={t('departments.graduate.description')}
          groups={graduateGroups}
          periods={graduatePeriods}
          rows={graduateRows}
          locale={locale}
          labels={labels}
        />

        <section>
          <div className="mb-6 flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <CalendarClock aria-hidden="true" className="size-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-sky-700">{t('schedule.eyebrow')}</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{t('schedule.title')}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{t('schedule.description')}</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ScheduleCard
              title={t('schedule.theology.title')}
              badge={t('schedule.theology.badge')}
              day={t('schedule.day')}
              rows={theologySchedule}
            />
            <ScheduleCard
              title={t('schedule.graduate.title')}
              day={t('schedule.day')}
              rows={graduateSchedule}
            />
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-indigo-200 bg-white shadow-sm">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <FileText aria-hidden="true" className="size-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-indigo-700">{t('documents.eyebrow')}</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">{t('documents.title')}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{t('documents.description')}</p>
              </div>
            </div>

            <Link
              href={`/${locale}/addmision/forms`}
              aria-label={t('documents.buttonAriaLabel')}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-indigo-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              {t('documents.button')}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
