import { NextResponse } from "next/server";
import { addTodo, getTodos } from "@/lib/todo-data";

export async function GET() {
  return NextResponse.json(getTodos());
}

export async function POST(request: Request) {
  const body = (await request.json()) as { text?: string };
  const text = body.text?.trim();

  if (!text) {
    return NextResponse.json({ message: "Todo text is required." }, { status: 400 });
  }

  return NextResponse.json(addTodo(text));
}
