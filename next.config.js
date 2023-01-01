/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.codigo.co'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/work',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
