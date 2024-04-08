/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/:path*',
            destination: `${process.env.WEBSITE}/:path*`,
            statusCode: 301,
          },
        ]
      },
};

export default nextConfig;
