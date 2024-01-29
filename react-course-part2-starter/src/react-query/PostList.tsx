import React from "react";
import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  // const [page, setPage] = useState(1);
  // const { data: posts, error, isLoading } = usePosts({ page, pageSize });
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul className="list-group">
        {posts.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
        {/* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))} */}
      </ul>
      {/* <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Prev
      </button> */}
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-1"
      >
        {isFetchingNextPage ? "Loading" : "Load More"}
      </button>
    </>
  );
};

export default PostList;
