'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Tag, TrendingUp } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  readTime: number;
}

interface BlogSidebarProps {
  recentPosts: BlogPost[];
  categories: { name: string; count: number }[];
  popularPosts: BlogPost[];
}

export function BlogSidebar({ recentPosts, categories, popularPosts }: BlogSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-bronze" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <h4 className="font-semibold text-sm text-umber group-hover:text-bronze transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-taupe mt-1">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Tag className="h-5 w-5 text-bronze" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={`/blog?category=${category.name.toLowerCase()}`}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-cream transition-colors group"
                >
                  <span className="text-sm text-umber group-hover:text-bronze transition-colors">
                    {category.name}
                  </span>
                  <span className="text-xs bg-bronze/10 text-bronze px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-bronze" />
            Popular Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {popularPosts.map((post, index) => (
              <li key={post.slug} className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-bronze/10 text-bronze font-bold text-sm rounded-full">
                  {index + 1}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex-1"
                >
                  <h4 className="font-semibold text-sm text-umber group-hover:text-bronze transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-taupe mt-1">
                    {post.readTime} min read
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-bronze text-white">
        <CardHeader>
          <CardTitle className="text-lg">Stay Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-cream mb-4">
            Get safari tips, travel stories, and exclusive offers delivered to your inbox.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md text-umber focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full bg-white text-bronze px-4 py-2 rounded-md font-semibold hover:bg-cream transition-colors"
            >
              Subscribe
            </button>
          </form>
        </CardContent>
      </Card>
    </aside>
  );
}
