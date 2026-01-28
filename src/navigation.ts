import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // 여기에 'zh'가 반드시 포함되어야 합니다.
    locales: ['ko', 'ja', 'en', 'zh'],
    defaultLocale: 'ko',
    localePrefix: 'always'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);