import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/webinar-registration',
        destination: '/webinar-register',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
