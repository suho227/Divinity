import { client, urlFor } from '@/sanity/client';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
    const { locale, slug } = await params;
    const notice = await client.fetch(`*[_type == "notice" && slug.current == $slug][0]`, { slug });
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
    const notice = await client.fetch(`*[_type == "notice" && slug.current == $slug][0]`, { slug });

    if (!notice) notFound();

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

                        {/* 🌟 제목 색상을 흰색으로 고정하여 투명 현상 해결 */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight break-keep text-white">
                            {notice.title[locale] || notice.title['ko']}
                        </h1>
                    </header>

                    {/* 3. 본문 영역: 충분한 여백(p-12)을 주어 가독성 확보 */}
                    <div className="p-10 md:p-16 min-h-[400px]">
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