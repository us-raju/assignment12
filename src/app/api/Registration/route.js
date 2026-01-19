const { dbConnect, collections } = require("@/lib/dbConnect");
const { NextResponse } = require("next/server");
const bcrypt = require("bcryptjs");

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, phoneNumber, nid } = body;
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and Password Required" },
        {
          status: 400,
        }
      );
    }
    const userCollection = dbConnect(collections.USERS);
    const existingUser = await userCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      nid,

      createdAt: new Date(),
    };
    await userCollection.insertOne(user);
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
