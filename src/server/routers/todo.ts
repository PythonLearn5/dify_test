import { orpc } from 'orpc';
import { z } from 'zod';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: '1', text: 'Learn Next.js', completed: false },
  { id: '2', text: 'Build a fullstack app', completed: false },
  { id: '3', text: 'Deploy to Vercel', completed: false },
];

export const todoRouter = orpc.router()
  .query('getAll', {
    resolve: async () => {
      return todos;
    },
  })
  .mutation('add', {
    input: z.string().min(1),
    resolve: async ({ input }) => {
      const newTodo: Todo = {
        id: String(todos.length + 1),
        text: input,
        completed: false,
      };
      todos.push(newTodo);
      return newTodo;
    },
  })
  .mutation('toggle', {
    input: z.string(),
    resolve: async ({ input: id }) => {
      const todo = todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      return todo;
    },
  });

export type TodoRouter = typeof todoRouter;
