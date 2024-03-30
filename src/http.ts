import type { GithubUserResponse } from "./models/github-user-response";

export interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  brief: string;
  content: { markdown: string };
  tags: {
    name: string;
  }[];
}
export type Publication = {
  posts: Post[];
};
export type User = {
  publication: Publication;
};

export const fetchPosts = async (): Promise<Post[]> => {
  const headers = {
    "content-type": "application/json",
  };
  const requestBody = {
    query: `query Publication {
      publication(host:"blog.kasperdue.com"){
        posts(first: 20) {
         edges {
           node {
             title
             slug
             publishedAt
             brief
             content {
               markdown
             }
             tags {
               name
             }
        
           }
         }
       }
     }
   }
   `,
  };
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch("https://gql.hashnode.com", options);
    const data = (await response.json()) as {
      data: { publication: { posts: { edges: { node: Post }[] } } };
    };

    const posts = data.data.publication.posts.edges.map((edge) => edge.node);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return posts ?? [];
  } catch (ex: unknown) {
    return [];
  }
};

export const fetchUser = async () => {
  const result = await fetch("https://api.github.com/users/kasperduen", {
    headers: {
      Authorization: "1676468834",
    },
  });
  const response = (await result.json()) as GithubUserResponse;
  return response;
};
