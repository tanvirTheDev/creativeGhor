"use client";

import { SkeletonCard } from "@/components/shared/SkeletonCard";
import type { BlogPost } from "@/lib/blog-data";
import { getAllBlogPosts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlogPosts(getAllBlogPosts());
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-4">
            Journal
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thoughts on design, culture, and the art of mindful living
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="space-y-4">
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          priority={index < 3}
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <div className="flex items-center text-xs text-gray-500 space-x-3">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h2 className="text-xl font-light text-black group-hover:text-gray-600 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="text-xs text-gray-500">
                          By {post.author}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
        </div>
      </main>
    </div>
  );
}
