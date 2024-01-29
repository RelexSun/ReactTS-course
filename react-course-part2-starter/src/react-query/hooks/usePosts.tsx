import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchData = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          // userId,
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
  return useQuery<Post[], Error>({
    queryKey: ["posts", query],
    // queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: fetchData,
    staleTime: 1 * 60 * 1000, // 1m
    keepPreviousData: true,
  });
};

export default usePosts;
