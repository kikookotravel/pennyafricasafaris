import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl font-bold text-umber mb-4">Blog Post Not Found</h1>
      <p className="text-lg text-taupe mb-8">
        Sorry, the blog post you're looking for doesn't exist.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 bg-bronze text-white px-6 py-3 rounded-md font-semibold hover:bg-bronze-dark transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>
    </div>
  );
}
