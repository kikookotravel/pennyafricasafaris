import Image from 'next/image';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import {
  getAllBlogPosts,
  getRecentBlogPosts,
  getBlogCategories,
  getPopularBlogPosts,
} from '@/lib/blog';

export const metadata = {
  title: 'Safari Blog | Uganda Travel Tips & Stories | Penny Africa Safaris',
  description:
    'Read expert safari tips, Uganda travel guides, and adventure stories from Ivan Akampurira, your local safari guide.',
};

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();
  const recentPosts = await getRecentBlogPosts(5);
  const categories = await getBlogCategories();
  const popularPosts = await getPopularBlogPosts(5);

  // Get featured post (first one)
  const featuredPost = allPosts[0];
  const regularPosts = allPosts.slice(1);

  return (
    <main>
      {/* Hero Section with Featured Post */}
      <section className="relative bg-umber text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Safari Blog</h1>
              <p className="text-xl text-cream max-w-2xl mx-auto">
                Expert tips, travel guides, and stories from the pearl of Africa
              </p>
            </div>

            {/* Featured Post */}
            {featuredPost && (
              <div className="bg-white text-umber rounded-lg overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPost.featuredImage || '/images/hero-gorilla.jpg'}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-bronze text-white text-sm font-semibold px-4 py-2 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-3">
                      <span className="text-bronze font-semibold text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-taupe mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-taupe">
                        {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}{' '}
                        · {featuredPost.readTime} min read
                      </div>
                      <a
                        href={`/blog/${featuredPost.slug}`}
                        className="bg-bronze text-white px-6 py-3 rounded-md font-semibold hover:bg-bronze-dark transition-colors"
                      >
                        Read Article
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts with Sidebar */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_350px] gap-8">
              {/* Main Content */}
              <div>
                <h2 className="text-2xl font-bold text-umber mb-8">Latest Articles</h2>
                <div className="grid gap-8">
                  {regularPosts.map((post) => (
                    <BlogCard
                      key={post.slug}
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      publishedAt={post.publishedAt}
                      author={post.author}
                      category={post.category}
                      readTime={post.readTime}
                      featuredImage={post.featuredImage}
                    />
                  ))}
                </div>
              </div>

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
    </main>
  );
}
