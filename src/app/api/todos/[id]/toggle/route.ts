import { NextResponse } from "next/server";
import { toggleTodo } from "@/lib/todo-data";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(_: Request, { params }: Params) {
  const { id } = await params;
  const updatedTodo = toggleTodo(id);

  if (!updatedTodo) {
    return NextResponse.json({ message: "Todo not found." }, { status: 404 });
  }

  return NextResponse.json(updatedTodo);
}
