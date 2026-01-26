import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SITE_TITLE: 'Pabson Cricket League',
    SITE_DESCRIPTION:
      'Pabson Cricket League is a premier school-level cricket tournament showcasing the best young cricketing talent. Follow live scores, match schedules, player stats, and highlights of the thrilling competition, all in one platform.',
    SITE_URL: 'https://pabsoncricketleague.com', // Replace with your live URL
    SITE_IMAGE:
      'https://res.cloudinary.com/dmlntyta1/image/upload/v1769432426/pablogo_sreyip.png', // Replace with your OG image
  },
  images: {
    domains: ['pabsoncricketleague.com'], // Replace with domains for external images
  },
};

export default nextConfig;
