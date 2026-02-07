// src/app/[locale]/about/departments/japanese/page.tsx
import React from 'react';
import { useTranslations } from 'next-intl';

export default function JapaneseDepartmentPage() {
    // 🌟 'About.departments.japanese' 경로를 기본으로 설정합니다.
    const t = useTranslations('About.departments.japanese');

    return (
        <div className="py-20 px-8 max-w-4xl mx-auto">
            {/* 🌟 번역 키 적용 */}
            <h1 className="text-3xl font-bold text-[#002855] border-l-4 border-[#F39200] pl-4">
                {t('pageTitle')}
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
                {t('description')}
            </p>
        </div>
    );
}