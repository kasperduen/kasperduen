// "use client";

import { PostDisplay } from "../../src/components/post-display";
import { PostsList as GoToBlogButton } from "../../src/components/posts-list";
import { fetchPosts } from "../../src/http";

export default async function Home() {
  const allPosts = await fetchPosts();

  return (
    <section className="md:ml-64">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-12 px-4 pt-6 sm:px-6 md:pb-12">
        {allPosts &&
          allPosts.map((post) => <PostDisplay key={post.slug} post={post} />)}

        <GoToBlogButton />
      </div>
    </section>
  );
}
