import type { Metadata } from 'next';
import {
  Building2,
  CircleAlert,
  GraduationCap,
  Landmark,
  WalletCards,
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type TuitionRow = {
  key: 'admissionFee' | 'tuition' | 'facilityFee' | 'subtotal';
  values: Array<number | null>;
};

type PeriodColumn = {
  year: string;
  period: string;
};

type YearGroup = {
  label: string;
  count: number;
};

const theologyRows: TuitionRow[] = [
  {
    key: 'admissionFee',
    values: [50000, null, null, null, null, null, null, null],
  },
  {
    key: 'tuition',
    values: [
      150000,
      150000,
      150000,
      150000,
      150000,
      150000,
      150000,
      150000,
    ],
  },
  {
    key: 'facilityFee',
    values: [50000, null, 50000, null, 50000, null, 50000, null],
  },
  {
    key: 'subtotal',
    values: [
      250000,
      150000,
      200000,
      150000,
      200000,
      150000,
      200000,
      150000,
    ],
  },
];

const graduateRows: TuitionRow[] = [
  {
    key: 'admissionFee',
    values: [50000, null, null, null, null, null],
  },
  {
    key: 'tuition',
    values: [180000, 180000, 180000, 180000, 180000, 180000],
  },
  {
    key: 'facilityFee',
    values: [50000, null, 50000, null, 50000, null],
  },
  {
    key: 'subtotal',
    values: [280000, 180000, 230000, 180000, 230000, 180000],
  },
];

function getNumberLocale(locale: string) {
  const localeMap: Record<string, string> = {
    ko: 'ko-KR',
    en: 'en-US',
    ja: 'ja-JP',
    zh: 'zh-CN',
  };

  return localeMap[locale] ?? 'ko-KR';
}

function formatAmount(value: number | null, locale: string) {
  if (value === null) {
    return '-';
  }

  return new Intl.NumberFormat(getNumberLocale(locale)).format(value);
}

type TuitionTableProps = {
  title: string;
  description: string;
  periods: PeriodColumn[];
  yearGroups: YearGroup[];
  rows: TuitionRow[];
  locale: string;
  labels: {
    item: string;
    admissionFee: string;
    tuition: string;
    facilityFee: string;
    subtotal: string;
    currency: string;
  };
};

function TuitionTable({
  title,
  description,
  periods,
  yearGroups,
  rows,
  locale,
  labels,
}: TuitionTableProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-6 sm:px-8">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <GraduationCap aria-hidden="true" className="size-6" />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              {title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-center text-sm">
          <caption className="sr-only">{title}</caption>

          <thead>
            <tr className="bg-indigo-950 text-white">
              <th
                rowSpan={2}
                scope="col"
                className="sticky left-0 z-20 min-w-36 border-r border-indigo-800 bg-indigo-950 px-4 py-4 font-semibold"
              >
                {labels.item}
              </th>

              {yearGroups.map((group) => (
                <th
                  key={group.label}
                  colSpan={group.count}
                  scope="colgroup"
                  className="border-r border-indigo-800 px-4 py-3 font-semibold last:border-r-0"
                >
                  {group.label}
                </th>
              ))}
            </tr>

            <tr className="bg-indigo-900 text-indigo-50">
              {periods.map((column, index) => (
                <th
                  key={`${column.year}-${column.period}-${index}`}
                  scope="col"
                  className="min-w-28 border-r border-indigo-800 px-3 py-3 text-xs font-medium last:border-r-0"
                >
                  {column.period}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => {
              const isSubtotal = row.key === 'subtotal';

              return (
                <tr
                  key={row.key}
                  className={
                    isSubtotal
                      ? 'bg-indigo-50 font-bold text-indigo-950'
                      : rowIndex % 2 === 0
                        ? 'bg-white'
                        : 'bg-slate-50/70'
                  }
                >
                  <th
                    scope="row"
                    className={[
                      'sticky left-0 z-10 border-b border-r border-slate-200 px-4 py-4 text-left font-semibold',
                      isSubtotal
                        ? 'bg-indigo-50 text-indigo-950'
                        : rowIndex % 2 === 0
                          ? 'bg-white text-slate-900'
                          : 'bg-slate-50 text-slate-900',
                    ].join(' ')}
                  >
                    {labels[row.key]}
                  </th>

                  {row.values.map((value, index) => (
                    <td
                      key={`${row.key}-${index}`}
                      className={[
                        'border-b border-r border-slate-200 px-4 py-4 tabular-nums last:border-r-0',
                        value === null
                          ? 'text-slate-400'
                          : isSubtotal
                            ? 'text-indigo-950'
                            : 'text-slate-700',
                      ].join(' ')}
                    >
                      {formatAmount(value, locale)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end border-t border-slate-200 bg-white px-5 py-3 sm:px-8">
        <p className="text-xs font-medium text-slate-500">
          {labels.currency}
        </p>
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'Admission',
  });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default async function AdmissionPage({ params }: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'Admission',
  });

  const theologyPeriods: PeriodColumn[] = [
    {
      year: t('years.year1'),
      period: t('periods.enrollment'),
    },
    {
      year: t('years.year1'),
      period: t('periods.secondSemester'),
    },
    {
      year: t('years.year2'),
      period: t('periods.firstSemester'),
    },
    {
      year: t('years.year2'),
      period: t('periods.secondSemester'),
    },
    {
      year: t('years.year3'),
      period: t('periods.firstSemester'),
    },
    {
      year: t('years.year3'),
      period: t('periods.secondSemester'),
    },
    {
      year: t('years.year4'),
      period: t('periods.firstSemester'),
    },
    {
      year: t('years.year4'),
      period: t('periods.secondSemester'),
    },
  ];

  const graduatePeriods: PeriodColumn[] = [
    {
      year: t('years.year1'),
      period: t('periods.enrollment'),
    },
    {
      year: t('years.year1'),
      period: t('periods.secondSemester'),
    },
    {
      year: t('years.year2'),
      period: t('periods.firstSemester'),
    },
    {
      year: t('years.year2'),
      period: t('periods.secondSemester'),
    },
    {
      year: t('years.year3'),
      period: t('periods.firstSemester'),
    },
    {
      year: t('years.year3'),
      period: t('periods.secondSemester'),
    },
  ];

  const theologyYearGroups: YearGroup[] = [
    { label: t('years.year1'), count: 2 },
    { label: t('years.year2'), count: 2 },
    { label: t('years.year3'), count: 2 },
    { label: t('years.year4'), count: 2 },
  ];

  const graduateYearGroups: YearGroup[] = [
    { label: t('years.year1'), count: 2 },
    { label: t('years.year2'), count: 2 },
    { label: t('years.year3'), count: 2 },
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
    {
      label: t('bank.bankName'),
      value: 'きらぼし銀行',
    },
    {
      label: t('bank.branchName'),
      value: '042 錦糸町',
    },
    {
      label: t('bank.accountNumber'),
      value: '5027969',
    },
    {
      label: t('bank.accountHolder'),
      value: '麻布福音教会東京国際神学校',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-indigo-950">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-40 size-[500px] rounded-full bg-indigo-700/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-48 -left-24 size-[450px] rounded-full bg-sky-500/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur-sm">
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
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Landmark aria-hidden="true" className="size-6" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-700">
                    {t('bank.eyebrow')}
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                    {t('bank.title')}
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {t('bank.description')}
              </p>
            </div>

            <div className="grid flex-1 gap-3 sm:grid-cols-2">
              {bankInformation.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="mt-2 break-words text-sm font-bold text-slate-950 sm:text-base">
                    {item.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-950">
          <CircleAlert
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-amber-600"
          />
          <p className="text-sm leading-6">{t('notice')}</p>
        </div>

        <TuitionTable
          title={t('departments.theology.title')}
          description={t('departments.theology.description')}
          periods={theologyPeriods}
          yearGroups={theologyYearGroups}
          rows={theologyRows}
          locale={locale}
          labels={labels}
        />

        <TuitionTable
          title={t('departments.graduate.title')}
          description={t('departments.graduate.description')}
          periods={graduatePeriods}
          yearGroups={graduateYearGroups}
          rows={graduateRows}
          locale={locale}
          labels={labels}
        />

        <section className="rounded-3xl bg-indigo-950 px-6 py-8 text-white sm:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <Building2 aria-hidden="true" className="size-6" />
            </div>

            <div>
              <h2 className="text-xl font-bold">{t('footerNotice.title')}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-indigo-100">
                {t('footerNotice.description')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}