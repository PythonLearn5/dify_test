"use client";

import { useMutation, useQuery, type UseMutationOptions } from "@tanstack/react-query";
import ky from "ky";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const api = ky.create({
  prefix: "/api",
});

const TODO_QUERY_KEY = ["todo", "getAll"] as const;

export const orpc = {
  todo: {
    getAll: {
      useQuery: () =>
        useQuery({
          queryKey: TODO_QUERY_KEY,
          queryFn: async () => api.get("todos").json<Todo[]>(),
        }),
    },
    add: {
      useMutation: (options?: Omit<UseMutationOptions<Todo, Error, string>, "mutationFn">) =>
        useMutation({
          mutationFn: async (text: string) => api.post("todos", { json: { text } }).json<Todo>(),
          ...options,
        }),
    },
    toggle: {
      useMutation: (options?: Omit<UseMutationOptions<Todo, Error, string>, "mutationFn">) =>
        useMutation({
          mutationFn: async (id: string) => api.patch(`todos/${id}/toggle`).json<Todo>(),
          ...options,
        }),
    },
  },
};
