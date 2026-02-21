export interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  brief: string;
  tags: { name: string }[];
}

export async function fetchPosts(): Promise<Post[]> {
  const requestBody = {
    query: `query Publication {
      publication(host:"blog.kasperdue.com"){
        posts(first: 6) {
          edges {
            node {
              title
              slug
              publishedAt
              brief
              tags {
                name
              }
            }
          }
        }
      }
    }`,
  };

  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(requestBody),
      next: { revalidate: 3600 },
    });
    const data = (await response.json()) as {
      data: { publication: { posts: { edges: { node: Post }[] } } };
    };
    return data.data.publication.posts.edges.map((edge) => edge.node) ?? [];
  } catch {
    return [];
  }
}

export interface GithubUser {
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  location: string;
}

export async function fetchGithubUser(): Promise<GithubUser | null> {
  try {
    const result = await fetch("https://api.github.com/users/kasperduen", {
      next: { revalidate: 3600 },
    });
    return (await result.json()) as GithubUser;
  } catch {
    return null;
  }
}
