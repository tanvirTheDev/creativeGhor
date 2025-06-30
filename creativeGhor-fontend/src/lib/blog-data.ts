import blogData from "@/data/blogData.json";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  slug: string;
  content: ContentBlock[];
}

export interface ContentBlock {
  type: "paragraph" | "heading";
  text: string;
}

export function getAllBlogPosts(): BlogPost[] {
  return blogData.blogPosts.map((post) => ({
    ...post,
    content: post.content as ContentBlock[],
  }));
}
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const post = blogData.blogPosts.find((post) => post.slug === slug);
  return post
    ? { ...post, content: post.content as ContentBlock[] }
    : undefined;
}
export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return blogData.blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit)
    .map((post) => ({
      ...post,
      content: post.content as ContentBlock[],
    }));
}
