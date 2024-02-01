import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import APIClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "../constants";

const apiClient = new APIClient<Todo>("/todos");

interface AddTodoContext {
  prevTodo: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  // <Todo, Error, Todo> = <data from backend, error, data to backend>
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,

    onMutate: (newTodo: Todo) => {
      const prevTodo = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      // Updating the data in the cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      onAdd(); // call function prop

      return { prevTodo };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.prevTodo);
    },
  });
};

export default useAddTodo;
