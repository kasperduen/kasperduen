"use client";
export function PostsList() {
  const loadMorePosts = () => {
    window.open("https://kasp9023.hashnode.dev");
  };

  return (
    <>
      <button
        type="button"
        onClick={loadMorePosts}
        className="mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Load More
      </button>
    </>
  );
}
