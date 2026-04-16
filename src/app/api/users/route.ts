import { NextResponse } from "next/server";

type User = {
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

export async function GET() {
  return NextResponse.json(users);
}
