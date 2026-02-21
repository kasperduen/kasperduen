import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";
import { fetchPosts, fetchGithubUser } from "@/lib/data";

export default async function Home() {
  const [posts, user] = await Promise.all([fetchPosts(), fetchGithubUser()]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About user={user} />
        <BlogSection posts={posts} />
      </main>
      <Footer />
    </>
  );
}
