import { client, urlFor } from '@/sanity/client';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/navigation'; // 🌟 더 빠른 이동을 위해 추가

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
    const { locale, slug } = await params;
    const notice = await client.fetch(`*[_type == "notice" && slug.current == $slug][0]`, { slug });
    return { title: `${notice?.title[locale] || notice?.title['ko']} | 도쿄국제신학교` };
}

const components = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full h-[400px] my-10">
                <Image src={urlFor(value).url()} alt="Notice Content Image" fill className="object-contain rounded-xl" />
            </div>
        ),
    },
};

export default async function NoticeDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
    const { locale, slug } = await params; // Next.js 16 대응 완벽합니다!
    const notice = await client.fetch(`*[_type == "notice" && slug.current == $slug][0]`, { slug });

    if (!notice) notFound();

    return (
        <main className="bg-white min-h-screen py-24 px-8">
            <article className="max-w-3xl mx-auto">
                <header className="mb-12 pb-8 border-b-2 border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        {notice.isImportant && (
                            // 🌟 정의하신 brand-orange 컬러를 사용합니다
                            <span className="bg-brand-orange text-white text-[11px] font-black px-2 py-1 rounded">IMPORTANT</span>
                        )}
                        <span className="text-sm font-serif text-gray-400">
                            {new Date(notice.publishedAt).toLocaleDateString(locale)}
                        </span>
                    </div>
                    {/* 🌟 정의하신 brand-navy 컬러를 사용합니다 */}
                    <h1 className="text-3xl md:text-5xl font-black text-brand-navy leading-tight mb-4 break-keep">
                        {notice.title[locale] || notice.title['ko']}
                    </h1>
                </header>

                <div className="prose prose-lg prose-blue max-w-none text-gray-700">
                    <PortableText value={notice.content[locale] || notice.content['ko']} components={components} />
                </div>

                <div className="mt-16 pt-8 border-t text-center">
                    {/* 🌟 Link 컴포넌트로 부드러운 전환 */}
                    <Link href="/notice" className="text-brand-navy font-bold hover:text-brand-orange transition-colors">
                        ← 목록으로 돌아가기
                    </Link>
                </div>
            </article>
        </main>
    );
}