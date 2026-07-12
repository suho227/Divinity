import { client, urlFor } from '@/sanity/client';
import { PortableText } from '@portabletext/react';
//import type { TypedObject } from '@portabletext/types';
import { Download } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';

type Attachment = {
    _key?: string;
    displayName?: Record<string, string | undefined>;
    asset?: {
        url?: string;
        originalFilename?: string;
    };
};

const noticeQuery = `
    *[_type == "notice" && slug.current == $slug][0]{
        title,
        content,
        publishedAt,
        isImportant,
        attachments[]{
            _key,
            displayName,
            asset->{
                url,
                originalFilename
            }
        }
    }
`;

const attachmentLabels: Record<string, string> = {
    ko: '첨부파일',
    ja: '添付ファイル',
    en: 'Attachments',
    zh: '附件',
};

function getAttachmentName(attachment: Attachment, locale: string) {
    return (
        attachment.displayName?.[locale] ||
        attachment.displayName?.ko ||
        attachment.displayName?.ja ||
        attachment.displayName?.en ||
        attachment.displayName?.zh ||
        attachment.asset?.originalFilename ||
        attachmentLabels[locale] ||
        attachmentLabels.ko
    );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
    const { locale, slug } = await params;
    const notice = await client.fetch(noticeQuery, { slug });
    return { title: `${notice?.title?.[locale] || notice?.title?.['ko']} | 도쿄국제신학교` };
}

const components = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full h-[300px] md:h-[500px] my-8">
                <Image
                    src={urlFor(value).url()}
                    alt="Notice Content"
                    fill
                    className="object-contain rounded-lg"
                />
            </div>
        ),
    },
};

export default async function NoticeDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
    const { locale, slug } = await params;
    const t = await getTranslations('About.notice');
    const notice = await client.fetch(noticeQuery, { slug });

    if (!notice) notFound();

    const attachments = (notice.attachments || []).filter(
        (attachment: Attachment) => attachment.asset?.url,
    );

    return (
        <main className="bg-gray-50 min-h-screen py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">

                {/* 1. 직사각형 보드 스타일 (Shadow와 Border로 게시판 느낌 강조) */}
                <article className="bg-white shadow-xl border border-gray-200 overflow-hidden rounded-lg">

                    {/* 2. 남색 헤더 영역: 글자색을 반드시 text-white로 설정해야 보입니다! */}
                    <header className="bg-[#1A2B4C] p-10 md:p-14 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            {notice.isImportant && (
                                <span className="bg-[#E88B2E] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    IMPORTANT
                                </span>
                            )}
                            <span className="text-sm opacity-70 font-serif">
                                {new Date(notice.publishedAt).toLocaleDateString(locale)}
                            </span>
                        </div>

                        {attachments.length > 0 && (
                            <div className="absolute right-6 top-6 flex max-w-[45%] flex-wrap justify-end gap-2 md:right-10 md:top-10">
                                {attachments.map((attachment: Attachment, index: number) => (
                                    <a
                                        key={attachment._key || attachment.asset?.url || index}
                                        href={attachment.asset?.url}
                                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#1A2B4C] shadow-md transition-colors hover:bg-[#E88B2E] hover:text-white md:text-sm"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Download aria-hidden="true" className="size-4" />
                                        {getAttachmentName(attachment, locale)}
                                    </a>
                                ))}
                            </div>
                        )}


                        {/* 🌟 제목 색상을 흰색으로 고정하여 투명 현상 해결 */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight break-keep text-white">
                            {notice.title[locale] || notice.title['ko']}
                        </h1>
                    </header>

                    {/* 3. 본문 영역: 충분한 여백(p-12)을 주어 가독성 확보 */}
                    <div className="p-10 md:p-16 min-h-[400px]">
                        {attachments.length > 0 && (
                            <div className="mb-8 flex flex-wrap justify-end gap-3">
                                {attachments.map((attachment: Attachment, index: number) => (
                                    <a
                                        key={attachment._key || attachment.asset?.url || index}
                                        href={attachment.asset?.url}
                                        className="inline-flex items-center gap-2 rounded-full bg-[#1A2B4C] px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#E88B2E]"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Download aria-hidden="true" className="size-4" />
                                        {getAttachmentName(attachment, locale)}
                                    </a>
                                ))}
                            </div>
                        )}

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light prose-img:mx-auto">
                            <PortableText
                                value={notice.content[locale] || notice.content['ko']}
                                components={components}
                            />
                        </div>
                    </div>
                </article>

                {/* 4. 목록으로 돌아가기 버튼 (박스 형태로 감쌈) */}
                <div className="mt-12 text-center">
                    <Link
                        href="/notice"
                        className="inline-flex items-center gap-3 bg-white text-[#1A2B4C] font-bold px-8 py-4 rounded-full shadow-md border border-gray-100 hover:bg-[#E88B2E] hover:text-white transition-all group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        {/* t('backToList')를 불러옵니다 (ko.json/ja.json 확인 필수) */}
                        <span>{t('backToList')}</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}