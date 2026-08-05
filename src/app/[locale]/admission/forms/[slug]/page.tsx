import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Download } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { client, urlFor } from "@/sanity/client";
import { Link } from "@/navigation";

type PageProps = {
    params: Promise<{ locale: string; slug: string }>;
};

type LocalizedText = Record<string, string | undefined>;
type PortableTextContent = Parameters<typeof PortableText>[0]["value"];

type Attachment = {
    _key?: string;
    asset?: {
        url?: string;
        originalFilename?: string;
    };
};

type AdmissionFormNotice = {
    title?: LocalizedText;
    content?: Record<string, PortableTextContent>;
    publishedAt?: string;
    isImportant?: boolean;
    attachments?: Attachment[];
};

const admissionFormNoticeQuery = `
    *[_type == "admissionFormNotice" && (slug.current == $slug || _id == $slug)][0]{
        title,
        content,
        publishedAt,
        isImportant,
        attachments[]{
            _key,
            asset->{
                url,
                originalFilename
            }
        }
    }
`;

const attachmentLabels: Record<string, string> = {
    ko: "첨부파일",
    ja: "添付ファイル",
    en: "Attachments",
    zh: "附件",
};

function getLocalizedText(value: LocalizedText | undefined, locale: string) {
    return (
        value?.[locale] || value?.ko || value?.ja || value?.en || value?.zh || ""
    );
}

function getLocalizedContent(
    value: AdmissionFormNotice["content"],
    locale: string,
): PortableTextContent {
    return (
        value?.[locale] ||
        value?.ko ||
        value?.ja ||
        value?.en ||
        value?.zh ||
        []
    );
}

function getAttachmentName(attachment: Attachment, locale: string) {
    return (
        attachment.asset?.originalFilename ||
        attachmentLabels[locale] ||
        attachmentLabels.ko
    );
}

function getAttachmentDownloadUrl(attachment: Attachment, locale: string) {
    if (!attachment.asset?.url) return "";

    const separator = attachment.asset.url.includes("?") ? "&" : "?";
    const filename = encodeURIComponent(getAttachmentName(attachment, locale));

    return `${attachment.asset.url}${separator}dl=${filename}`;
}

function getAttachmentFileType(attachment: Attachment) {
    const source = attachment.asset?.originalFilename || attachment.asset?.url || "";
    const filename = source.split("?")[0];
    const extension = filename.split(".").pop();

    if (!extension || extension === filename) return "";

    return extension.toUpperCase();
}

const components = {
    types: {
        image: ({ value }: any) => (
            <div className="relative my-8 h-[300px] w-full md:h-[500px]">
                <Image
                    src={urlFor(value).url()}
                    alt="Admission form content"
                    fill
                    className="rounded-lg object-contain"
                />
            </div>
        ),
    },
};

export async function generateMetadata({ params }: PageProps) {
    const { locale, slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const notice = await client.fetch<Pick<AdmissionFormNotice, "title">>(
        admissionFormNoticeQuery,
        { slug: decodedSlug },
    );
    const title = getLocalizedText(notice?.title, locale);
    return { title: `${title || "입학서식"} | 도쿄국제신학교` };
}

export default async function AdmissionFormsDetailPage({ params }: PageProps) {
    const { locale, slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const t = await getTranslations("AdmissionForms");
    const notice = await client.fetch<AdmissionFormNotice>(
        admissionFormNoticeQuery,
        { slug: decodedSlug },
    );

    if (!notice) notFound();

    const title = getLocalizedText(notice.title, locale);
    const content = getLocalizedContent(notice.content, locale);
    const attachments = (notice.attachments || []).filter(
        (attachment) => attachment.asset?.url,
    );

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-16 md:py-24">
            <div className="mx-auto max-w-4xl">
                <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
                    <header className="relative bg-[#1A2B4C] p-10 text-white md:p-14">
                        <div className="mb-6 flex items-center gap-3">
                            {notice.isImportant && (
                                <span className="rounded bg-[#E88B2E] px-2 py-1 text-[10px] font-bold text-white">
                                    IMPORTANT
                                </span>
                            )}
                            <time
                                className="font-serif text-sm opacity-70"
                                dateTime={notice.publishedAt}
                            >
                                {notice.publishedAt
                                    ? new Date(notice.publishedAt).toLocaleDateString(locale)
                                    : ""}
                            </time>
                        </div>

                        {attachments.length > 0 && (
                            <details className="group absolute right-6 top-6 md:right-10 md:top-10">
                                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#1A2B4C] shadow-md transition-colors hover:bg-[#E88B2E] hover:text-white md:text-sm [&::-webkit-details-marker]:hidden">
                                    <Download aria-hidden="true" className="size-4" />
                                    {attachmentLabels[locale] || attachmentLabels.ko}
                                    <span className="text-[11px] opacity-70 md:text-xs">
                                        {attachments.length}
                                    </span>
                                </summary>
                                <div className="absolute right-0 z-20 mt-2 flex min-w-64 flex-col overflow-hidden rounded-2xl bg-white py-2 text-[#1A2B4C] shadow-xl ring-1 ring-black/5">
                                    {attachments.map((attachment, index) => (
                                        <a
                                            key={attachment._key || attachment.asset?.url || index}
                                            href={getAttachmentDownloadUrl(attachment, locale)}
                                            className="flex items-center gap-2 px-4 py-3 text-sm font-bold transition-colors hover:bg-gray-100"
                                            download={getAttachmentName(attachment, locale)}
                                        >
                                            <Download aria-hidden="true" className="size-4 shrink-0" />
                                            <span className="flex flex-1 items-center justify-between gap-3">
                                                <span className="break-keep">
                                                    {getAttachmentName(attachment, locale)}
                                                </span>
                                                {getAttachmentFileType(attachment) && (
                                                    <span className="shrink-0 rounded-full bg-[#1A2B4C]/10 px-2 py-0.5 text-[10px] font-black tracking-wide text-[#1A2B4C]">
                                                        {getAttachmentFileType(attachment)}
                                                    </span>
                                                )}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </details>
                        )}

                        <h1 className="break-keep text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                            {title}
                        </h1>
                    </header>

                    <div className="min-h-[400px] p-10 md:p-16">
                        <div className="prose prose-lg max-w-none font-light leading-relaxed text-gray-700 prose-img:mx-auto">
                            <PortableText value={content} components={components} />
                        </div>
                    </div>
                </article>

                <div className="mt-12 text-center">
                    <Link
                        href="/admission/forms"
                        className="group inline-flex items-center gap-3 rounded-full border border-gray-100 bg-white px-8 py-4 font-bold text-[#1A2B4C] shadow-md transition-all hover:bg-[#E88B2E] hover:text-white"
                    >
                        <span className="transition-transform group-hover:-translate-x-1">←</span>
                        <span>{t("backToList")}</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}