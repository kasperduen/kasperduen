import { fetchPosts, fetchUser } from "../src/http";
import type { GithubUserResponse } from "../src/models/github-user-response";

export default async function Home() {
  // const allPosts = await fetchPosts(0);
  const user: GithubUserResponse = await fetchUser();

  console.log("user", user);

  return (
    <section className="md:ml-64">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-12 px-4 pt-6 sm:px-6 md:pb-12">
        {/* {allPosts &&
          allPosts.map((post) => <PostDisplay key={post.slug} post={post} />)}

        <PostsList /> */}
      </div>
    </section>
  );
}
