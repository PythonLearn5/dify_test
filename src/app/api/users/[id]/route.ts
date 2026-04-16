import { NextResponse } from "next/server";
import { getUserById } from "@/lib/users-data";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: Request, { params }: Params) {
  const { id } = await params;
  const userId = Number(id);

  if (Number.isNaN(userId)) {
    return NextResponse.json({ message: "Invalid user id." }, { status: 400 });
  }

  const user = getUserById(userId);

  if (!user) {
    return NextResponse.json({ message: "User not found." }, { status: 404 });
  }

  return NextResponse.json(user);
}
