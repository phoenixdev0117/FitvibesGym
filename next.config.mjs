/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
                protocol: 'https',
            },
            {
                hostname: 'lh3.googleusercontent.com',
                protocol: 'https',
            }

        ]
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['jquery'] = 'jquery';
        }
        return config;
    },
};

export default nextConfig;
