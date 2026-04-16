export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoRouter = {
  getAll: () => Promise<Todo[]>;
  add: (text: string) => Promise<Todo>;
  toggle: (id: string) => Promise<Todo | undefined>;
};

export const todoRouter = {} as TodoRouter;
