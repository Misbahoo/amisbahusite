import { ConnectDB } from "../../private/DbConnections";
import { Users } from "../../private/schema";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const { id } = params;

  try {
    await ConnectDB();
    const res = await Users.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const GET = async (req, { params }) => {
  try {
    await ConnectDB();
    const { email } = params;
    const theUser = await Users.findOne({ email });

    return NextResponse.json({ theUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
