/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_BASE_PATH_PRODUCTION: 'http://localhost:3000',
        NEXT_PUBLIC_API_BASE_PATH_DEVELOPMENT: 'https://basitfilter.vercel.app'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wallpaperaccess.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
