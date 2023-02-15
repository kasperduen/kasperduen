import { GithubUserResponse } from "./models/github-user-response";

export interface Post {
  title: string;
  slug: string;
  dateAdded: string;
  brief: string;
  contentMarkdown: string;
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

export const fetchPosts = async (page: number): Promise<Post[]> => {
  const headers = {
    "content-type": "application/json",
  };
  const requestBody = {
    query: `query  fetchPosts($page: Int) {
        user(username:"kasp9023") {
           publication {
            posts(page: $page) {
              title
              slug
              dateAdded
              brief
            }
          } 
        }
      }`,
    variables: {
      page,
    },
  };
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch("https://api.hashnode.com", options);
    const data = (await response.json()) as { data: { user: User } };

    const {
      data: {
        user: {
          publication: { posts },
        },
      },
    } = data;

    return posts || [];
  } catch (ex) {
    return [];
  }
};
export const fetchPost = async (slug: string): Promise<Post> => {
  const headers = {
    "content-type": "application/json",
  };
  const requestBody = {
    query: `
    query fetchPost($slug: String!) {
      post(slug: $slug hostname: "blog.kasperdue.com") {
        title
        contentMarkdown
        tags {
          name
        }
      }
    }`,
    variables: {
      slug,
    },
  };
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch("https://api.hashnode.com", options);
    const data = await response.json();
    console.log("data here", data);

    const {
      data: { post },
    } = data;

    return post;
  } catch (ex) {
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
