import { MetadataRoute } from 'next';
import { getAllTours } from '@/lib/tours';
import { getAllBlogPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pennyafricasafaris.travel';

  // Get all tours and blog posts
  const tours = await getAllTours('en');
  const blogPosts = await getAllBlogPosts();

  // Static pages
  const staticPages = [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
        },
      },
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/about`,
          de: `${baseUrl}/de/about`,
        },
      },
    },
    {
      url: `${baseUrl}/en/tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/tours`,
          de: `${baseUrl}/de/tours`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog`,
          de: `${baseUrl}/de/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          de: `${baseUrl}/de/contact`,
        },
      },
    },
  ];

  // Tour pages
  const tourPages = tours.map((tour) => ({
    url: `${baseUrl}/en/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
    alternates: {
      languages: {
        en: `${baseUrl}/en/tours/${tour.slug}`,
        de: `${baseUrl}/de/tours/${tour.slug}`,
      },
    },
  }));

  // Blog post pages
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        en: `${baseUrl}/en/blog/${post.slug}`,
        de: `${baseUrl}/de/blog/${post.slug}`,
      },
    },
  }));

  return [...staticPages, ...tourPages, ...blogPages];
}
