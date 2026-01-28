import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

// 1. 라우팅 설정을 정의합니다.
export const routing = defineRouting({
    locales: ['ko', 'ja', 'en'],
    defaultLocale: 'ko',
    // 주소창에 항상 언어 코드를 표시합니다.
    localePrefix: 'always'
});

// 2. 최신 API인 createNavigation을 사용하여 내보냅니다.
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);