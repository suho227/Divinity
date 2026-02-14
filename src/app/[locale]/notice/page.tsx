import { getTranslations } from 'next-intl/server';
import { client } from '@/sanity/client';
import { Link } from '@/navigation';

export default async function NoticePage({ params }: { params: Promise<{ locale: string }> }) {
    // 1. Next.js 16 규칙에 따라 params를 비동기로 기다립니다.
    const { locale } = await params;

    // 2. 사니티에서 공지사항 목록을 가져옵니다.
    const notices = await client.fetch(`
        *[_type == "notice"] | order(publishedAt desc) {
            title,
            "slug": slug.current,
            publishedAt,
            isImportant
        }
    `);

    // 3. 페이지 번역 문구를 가져옵니다.
    const t = await getTranslations('About.notice');

    return (
        <main className="bg-white min-h-screen py-24 px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-black text-[#1A2B4C] mb-12 border-b-2 border-[#E88B2E] pb-6 text-center">
                    {t('pageTitle')}
                </h1>

                <div className="space-y-4">
                    {notices.length > 0 ? (
                        notices.map((notice: any) => (
                            <Link
                                key={notice.slug}
                                href={`/notice/${notice.slug}`}
                                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all shadow-sm group border border-transparent hover:border-[#E88B2E]/30"
                            >
                                <div className="flex items-center gap-4">
                                    {/* 중요 공지 표시 */}
                                    {notice.isImportant && (
                                        <span className="bg-[#E88B2E] text-white text-[10px] font-bold px-2 py-1 rounded">NOTICE</span>
                                    )}
                                    <h2 className="text-lg font-bold text-gray-800 group-hover:text-[#1A2B4C]">
                                        {/* 현재 언어에 맞는 제목 출력 */}
                                        {notice.title[locale] || notice.title['ko']}
                                    </h2>
                                </div>
                                <span className="text-sm text-gray-400 font-serif">
                                    {new Date(notice.publishedAt).toLocaleDateString(locale)}
                                </span>
                            </Link>
                        ))
                    ) : (
                        /* 공지사항이 없을 때 출력될 문구 */
                        <p className="text-center py-20 text-gray-500">{t('description')}</p>
                    )}
                </div>
            </div>
        </main>
    );
}