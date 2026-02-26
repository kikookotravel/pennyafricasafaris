import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: string;
  readTime: number;
  featuredImage?: string;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  publishedAt,
  author,
  category,
  readTime,
  featuredImage,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`}>
        {/* Featured Image */}
        {featuredImage && (
          <div className="relative h-48 w-full">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-bronze text-white text-xs font-semibold px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          </div>
        )}

        <CardContent className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-taupe mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-umber mb-3 group-hover:text-bronze transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-taupe mb-4 line-clamp-3">{excerpt}</p>

          {/* Author & Read More */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-taupe">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1 text-bronze font-semibold text-sm group-hover:gap-2 transition-all">
              Read More
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
