// src/app/[locale]/notice/page.tsx
import { createClient } from '@/utils/supabase/server';
import { useTranslations } from 'next-intl';

export default async function NoticePage() {
    // 🌟 서버에서 안전하게 DB 클라이언트를 생성합니다
    const supabase = await createClient();

    // 🌟 'notices' 테이블에서 모든 데이터를 가져옵니다
    const { data: notices, error } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("데이터를 불러오지 못했습니다:", error);
    }

    return (
        <main className="py-24 px-8 bg-[#FAF7F2] min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-black text-[#002855] mb-12 border-l-8 border-[#F39200] pl-6">
                    공지사항
                </h1>

                <div className="bg-white shadow-xl rounded-sm overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-[#002855] text-white">
                            <tr>
                                <th className="p-4 w-20 text-center">번호</th>
                                <th className="p-4">제목</th>
                                <th className="p-4 w-32 text-center">작성일</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {notices?.map((notice, idx) => (
                                <tr key={notice.id} className="hover:bg-gray-50 transition-colors cursor-pointer group">
                                    <td className="p-4 text-center text-gray-400 font-medium">
                                        {notices.length - idx}
                                    </td>
                                    <td className="p-4">
                                        <span className="inline-block px-2 py-1 bg-gray-100 text-[#002855] text-xs font-bold rounded mr-3">
                                            {notice.category}
                                        </span>
                                        <span className="font-bold text-gray-700 group-hover:text-[#F39200]">
                                            {notice.title}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center text-gray-400 text-sm">
                                        {new Date(notice.created_at).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}