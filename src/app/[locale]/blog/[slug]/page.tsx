import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import {
  getBlogPost,
  getAllBlogPosts,
  getRecentBlogPosts,
  getBlogCategories,
  getPopularBlogPosts,
} from '@/lib/blog';

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Penny Africa Safaris Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage || '/images/hero-gorilla.jpg'],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const recentPosts = await getRecentBlogPosts(5);
  const categories = await getBlogCategories();
  const popularPosts = await getPopularBlogPosts(5);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        {/* Featured Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src={post.featuredImage || '/images/hero-gorilla.jpg'}
            alt={post.title}
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="max-w-4xl">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-white mb-6 hover:text-cream transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
                <div className="inline-block bg-bronze px-4 py-1 rounded-full text-white text-sm font-semibold mb-4">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-cream">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_350px] gap-12">
              {/* Main Content */}
              <article>
                {/* Article Body */}
                <div className="prose prose-lg max-w-none prose-headings:text-umber prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h4:text-xl prose-h4:font-semibold prose-h4:mt-4 prose-h4:mb-2 prose-p:text-umber prose-p:leading-relaxed prose-strong:text-bronze prose-strong:font-semibold prose-ul:my-6 prose-ol:my-6 prose-li:text-umber">
                  <p className="text-xl text-taupe leading-relaxed mb-8 not-prose">
                    {post.excerpt}
                  </p>

                  <ReactMarkdown
                    components={{
                      h2: ({ node, ...props }) => (
                        <h2 className="text-3xl font-bold text-umber mt-8 mb-4" {...props} />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3 className="text-2xl font-semibold text-umber mt-6 mb-3" {...props} />
                      ),
                      h4: ({ node, ...props }) => (
                        <h4 className="text-xl font-semibold text-umber mt-4 mb-2" {...props} />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="text-umber leading-relaxed my-4" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc pl-6 space-y-2 my-6" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="list-decimal pl-6 space-y-2 my-6" {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="text-umber" {...props} />
                      ),
                      strong: ({ node, ...props}) => (
                        <strong className="text-bronze font-semibold" {...props} />
                      ),
                      blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-bronze pl-6 py-2 my-8 italic text-lg" {...props} />
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
                  <span className="text-sm font-semibold text-umber">Tags:</span>
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="bg-cream text-umber px-3 py-1 rounded-full text-sm hover:bg-bronze hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                {/* Share Section */}
                <div className="mt-8 p-6 bg-cream rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-umber mb-1">
                        Enjoyed this article?
                      </h3>
                      <p className="text-sm text-taupe">
                        Share it with fellow safari enthusiasts
                      </p>
                    </div>
                    <button className="flex items-center gap-2 bg-bronze text-white px-6 py-3 rounded-md font-semibold hover:bg-bronze-dark transition-colors">
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-8 bg-white border border-gray-200 rounded-lg">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-bronze/10 flex items-center justify-center">
                        <User className="h-10 w-10 text-bronze" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-umber mb-2">
                        About {post.author}
                      </h3>
                      <p className="text-taupe mb-4">
                        Ivan Akampurira is a certified safari guide with over 7 years of
                        experience leading tours across Uganda. Born and raised near Bwindi
                        Impenetrable Forest, Ivan is passionate about sharing Uganda's
                        incredible wildlife and making safari experiences accessible to all
                        travelers.
                      </p>
                      <Link
                        href="/about"
                        className="text-bronze font-semibold hover:underline"
                      >
                        Learn more about Ivan →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <BlogSidebar
                recentPosts={recentPosts}
                categories={categories}
                popularPosts={popularPosts}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bronze text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Uganda?
            </h2>
            <p className="text-xl text-cream mb-8">
              Let's turn these travel tips into your next adventure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-bronze rounded-lg font-semibold hover:bg-cream transition-colors"
              >
                Browse Our Tours
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-bronze transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
