import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uz', 'ru', 'en'],
  defaultLocale: 'uz',
  localeDetection: false
});

export const config = {
  matcher: ['/', '/(uz|ru|en)/:path*']
};
