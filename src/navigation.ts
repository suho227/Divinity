import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    
    locales: ['ko', 'ja', 'en', 'zh'],
    defaultLocale: 'ja',
    localePrefix: 'always'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);