import account from "../../../../models/accounts";
import connectToDatabase from "../../../../lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDatabase(); // Establish database connection
    const { email, password } = await request.json();
    // Check if email and password are provided
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const userExistence = await account.findOne({ email });
    if (userExistence) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newAccount = new account({
      email,
      password: hashPassword,
    });
    await newAccount.save();
    const response = NextResponse.json(
      { message: "Account created successfully" },
      { status: 201 }
    );
    return response;
  } catch (err) {
    console.error("Registration error details:", {
      message: err.message,
      stack: err.stack
    });
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
