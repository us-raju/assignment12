import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { dbConnect, collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        {
          status: 401,
        },
      );
    }

    const db = dbConnect();

    const user = await db
      .collection(collections.USERS)
      .findOne({ _id: new ObjectId(session.user.id) });

    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    const { password, ...userData } = user;

    return NextResponse.json(userData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 },
    );
  }
}
