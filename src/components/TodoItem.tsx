"use client";

import { orpc } from "@/lib/orpc";
import { useQueryClient } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

export function TodoItem({ id, text, completed }: TodoItemProps) {
  const queryClient = useQueryClient();
  const toggleMutation = orpc.todo.toggle.useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo", "getAll"] });
    },
  });

  const handleToggle = () => {
    toggleMutation.mutate(id);
  };

  return (
    <li className="flex items-center justify-between p-2 border-b border-gray-200">
      <div
        className={`prose prose-sm max-w-none ${
          completed ? "line-through text-gray-500" : ""
        }`}
      >
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
    </li>
  );
}
