import type { TodoRouter } from "./routers/todo";

export type AppRouter = {
  todo: TodoRouter;
};

export const appRouter = {} as AppRouter;
