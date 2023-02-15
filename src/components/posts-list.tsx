/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import { useState } from "react";
import type { Post } from "../http";
import { fetchPosts } from "../http";
import { PostDisplay } from "./post-display";

export function PostsList() {
  const [page, setPage] = useState(0);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePosts = async () => {
    setIsLoading(true);
    const newPage = page + 1;
    const newPosts = await fetchPosts(newPage);
    setAllPosts([...allPosts, ...newPosts]);
    setPage(newPage);
    setIsLoading(false);
  };

  return (
    <>
      {allPosts &&
        allPosts.map((post) => <PostDisplay key={post.slug} post={post} />)}

      <button
        type="button"
        onClick={loadMorePosts}
        disabled={isLoading}
        className="mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Load More
      </button>
    </>
  );
}
