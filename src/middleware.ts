import createMiddleware from 'next-intl/middleware';
import { routing } from '@/navigation';

export default createMiddleware(routing);

export const config = {
    // 모든 페이지 이동을 미들웨어가 감시하도록 설정합니다.
    // 특히 (ko|ja|en|zh) 부분에 추가한 모든 언어가 포함되어야 합니다.
    matcher: ['/', '/(ko|ja|en|zh)/:path*']
};