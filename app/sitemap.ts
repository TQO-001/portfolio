import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Your base domain
  const baseUrl = 'https://laughtale.co.za'

  // If you have specific project IDs or slugs, you can map them here
  // For now, let's include your main routes
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // Highest priority (Home page)
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}