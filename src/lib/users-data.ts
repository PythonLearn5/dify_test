export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
};

const users: User[] = [
  { id: 1, name: "Alice Zhang", email: "alice@example.com", role: "Admin", status: "active" },
  { id: 2, name: "Bob Li", email: "bob@example.com", role: "Editor", status: "active" },
  { id: 3, name: "Cathy Wang", email: "cathy@example.com", role: "Viewer", status: "inactive" },
  { id: 4, name: "David Chen", email: "david@example.com", role: "Editor", status: "active" },
];

export function getUsers(): User[] {
  return users;
}

export function getUserById(id: number): User | undefined {
  return users.find((user) => user.id === id);
}
