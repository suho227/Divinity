
import { useTranslations } from 'next-intl';

export default function JapaneseDepartmentPage() {
    const t = useTranslations('About'); // 다국어 설정을 사용 중이라면 'About' 키가 정의되어 있어야 합니다.

    return (
        <div className="py-20 px-8">
            <h1 className="text-3xl font-bold text-[#002855]">일본어학과</h1>
            <p className="mt-4 text-gray-600">준비 중인 페이지입니다.</p>
        </div>
    );
}