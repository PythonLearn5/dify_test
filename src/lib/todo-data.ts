export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const todos: Todo[] = [
  { id: "1", text: "Learn Next.js", completed: false },
  { id: "2", text: "Build a fullstack app", completed: false },
  { id: "3", text: "Deploy to Vercel", completed: false },
];

export function getTodos(): Todo[] {
  return todos;
}

export function addTodo(text: string): Todo {
  const newTodo: Todo = {
    id: String(todos.length + 1),
    text,
    completed: false,
  };

  todos.push(newTodo);
  return newTodo;
}

export function toggleTodo(id: string): Todo | undefined {
  const todo = todos.find((item) => item.id === id);

  if (!todo) {
    return undefined;
  }

  todo.completed = !todo.completed;
  return todo;
}
