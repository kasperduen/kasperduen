import Link from "next/link";
import type { Post } from "../http";

export function PostDisplay({ post }: { post: Post }) {
  return (
    <Link href={`https://blog.kasperdue.com/${post.slug}`}>
      <div className="d-flex">
        <h3 className="mb-4 text-3xl font-extrabold text-slate-800">
          {post.title}
        </h3>
        <p className="font-light text-slate-700">{post.brief}</p>
      </div>
    </Link>
  );
}
