
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['cdn.10minuteschool.com', 's3.ap-southeast-1.amazonaws.com'],
    },
    i18n: {
        locales: ['en', 'bn'],
        defaultLocale: 'en',
    },
}

module.exports = nextConfig