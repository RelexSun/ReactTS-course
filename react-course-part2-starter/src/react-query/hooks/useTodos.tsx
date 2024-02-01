import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    // referencing not calling the function, will call when runtime if needed
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
