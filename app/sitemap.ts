import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pabsoncricketleague.com';

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/fixtures`, lastModified: new Date() },
    { url: `${baseUrl}/teams`, lastModified: new Date() },
    { url: `${baseUrl}/matches`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
  ];
}
