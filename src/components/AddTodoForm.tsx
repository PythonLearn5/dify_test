"use client";

import { useState } from "react";
import { orpc } from "@/lib/orpc";
import { useQueryClient } from "@tanstack/react-query";

export function AddTodoForm() {
  const [newTodoText, setNewTodoText] = useState("");
  const queryClient = useQueryClient();
  const addMutation = orpc.todo.add.useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo", "getAll"] });
      setNewTodoText("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addMutation.mutate(newTodoText);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new todo"
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </button>
    </form>
  );
}
