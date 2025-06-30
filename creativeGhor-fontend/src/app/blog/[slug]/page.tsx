import { Separator } from "@/components/ui/separator";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
  type ContentBlock,
} from "@/lib/blog-data";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);
  if (!blogPost) {
    notFound();
  }
  const relatedPosts = getRelatedPosts(slug);
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header
          className="mb-12 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight">
              {blogPost.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {blogPost.excerpt}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blogPost.readTime}
              </div>
              <div>By {blogPost.author}</div>
            </div>
          </div>
        </header>
        {/* Featured Image */}
        <div
          className="mb-12 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="aspect-[2/1] overflow-hidden bg-gray-100 rounded-sm">
            <Image
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        {/* Article Content */}
        <article
          className="mb-16 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="max-w-none">{renderContent(blogPost.content)}</div>
        </article>
        <Separator className="mb-16" />
        <section
          className="animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <h3 className="text-2xl font-light text-black mb-8">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <div className="space-y-4">
                  <div className="aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={267}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-light text-black group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600">{post.excerpt}</p>
                    <div className="text-xs text-gray-500">
                      By {post.author}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

function renderContent(content: ContentBlock[]) {
  return content.map((block, index) => {
    switch (block.type) {
      case "heading":
        return (
          <h2 key={index} className="text-2xl font-light text-black mt-8 mb-4">
            {block.text}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {block.text}
          </p>
        );
      default:
        return null;
    }
  });
}
