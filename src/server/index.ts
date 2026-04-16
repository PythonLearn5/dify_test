import { orpc } from 'orpc';
import { todoRouter } from './routers/todo';

export const appRouter = orpc.router()
  .merge('todo.', todoRouter);

export type AppRouter = typeof appRouter;
