"use client";

import { orpc } from "@/lib/orpc";
import { useTodoStore } from "@/store/todoStore";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { filter } = useTodoStore();
  const { data: todos, isLoading, error } = orpc.todo.getAll.useQuery();

  const filteredTodos = todos?.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error loading todos: {error.message}</div>;

  return (
    <ul className="w-full">
      {filteredTodos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
