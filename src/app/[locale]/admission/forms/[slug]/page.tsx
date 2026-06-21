import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { Download } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { client, urlFor } from '@/sanity/client';
import { Link } from '@/navigation';

type PageProps = {
    params: Promise<{ locale: string; slug: string }>;
};

function getLocalizedText(value: Record<string, string> | undefined, locale: string) {
    return value?.[locale] || value?.ko || value?.ja || value?.en || value?.zh || '';
}

const components = {
    types: {
        image: ({ value }: any) => (
            <div className="relative my-8 h-[260px] w-full md:h-[460px]">
                <Image src={urlFor(value).url()} alt="Admission form content" fill className="rounded-xl object-contain" />
            </div>
        ),
    },
};

export async function generateMetadata({ params }: PageProps) {
    const { locale, slug } = await params;
    const notice = await client.fetch(`*[_type == "admissionFormNotice" && slug.current == $slug][0]{title}`, { slug });

    return { title: `${getLocalizedText(notice?.title, locale)} | 도쿄국제신학교` };
}

export default async function AdmissionFormsDetailPage({ params }: PageProps) {
    const { locale, slug } = await params;
    const t = await getTranslations('AdmissionForms');
    const notice = await client.fetch(`*[_type == "admissionFormNotice" && slug.current == $slug][0]`, { slug });

    if (!notice) notFound();

    const title = getLocalizedText(notice.title, locale);
    const content = notice.content?.[locale] || notice.content?.ko || notice.content?.ja || notice.content?.en || notice.content?.zh || [];

    return (
        <main className="min-h-screen bg-[#f3f4f9] px-4 py-16 md:py-24">
            <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-sm">
                <header className="border-b border-slate-200 px-6 py-8 md:px-10">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        {notice.isImportant && <span className="rounded bg-[#2d6fdf] px-2.5 py-1 text-xs font-bold text-white">NEW</span>}
                        <time dateTime={notice.publishedAt}>{notice.publishedAt ? new Date(notice.publishedAt).toLocaleDateString(locale) : ''}</time>
                    </div>
                    <h1 className="break-keep text-3xl font-black leading-tight text-slate-950 md:text-4xl">{title}</h1>
                </header>

                <div className="min-h-[360px] px-6 py-10 md:px-10">
                    <div className="prose prose-slate max-w-none prose-a:text-[#2d6fdf] prose-img:mx-auto">
                        <PortableText value={content} components={components} />
                    </div>

                    {notice.fileUrl && (
                        <a href={notice.fileUrl} className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1b3f91] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2d6fdf]" target="_blank" rel="noreferrer">
                            <Download aria-hidden="true" className="size-4" />
                            {t('download')}
                        </a>
                    )}
                </div>
            </article>

            <div className="mt-10 text-center">
                <Link href="/admission/forms" className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-bold text-[#1b3f91] shadow-sm transition-colors hover:bg-[#1b3f91] hover:text-white">
                    ← {t('backToList')}
                </Link>
            </div>
        </main>
    );
}