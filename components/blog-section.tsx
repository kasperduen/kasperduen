import type { Post } from "@/lib/data";
import { ArrowUpRight, Calendar } from "lucide-react";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function BlogCard({ post, index }: { post: Post; index: number }) {
  return (
    <a
      href={`https://blog.kasperdue.com/${post.slug}`}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:bg-muted"
    >
      {/* Date */}
      <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="h-3 w-3" />
        <time>{formatDate(post.publishedAt)}</time>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-lg font-semibold leading-snug text-card-foreground transition-colors group-hover:text-accent">
        {post.title}
        <ArrowUpRight className="ml-1 inline-block h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
      </h3>

      {/* Brief */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {post.brief}
      </p>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.name}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent"
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}

export function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">02.</span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Writing
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Posts are loading from the blog...
          </p>
        )}

        {/* View all link */}
        <div className="mt-12 text-center">
          <a
            href="https://blog.kasperdue.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-accent bg-transparent px-6 py-3 font-mono text-sm text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            View All Posts
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
