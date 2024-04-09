import { ConnectDB } from "../private/DbConnections";
import { Users } from "../private/schema";
import { NextResponse } from "next/server";

// export const POST = async (req) => {
//   try {
//     const body = req.body;
//     const theUser = body.json();
//     console.log(theUser);
//     const { email, password } = body;

//     await ConnectDB();
//     const user = await Users.findOne({ email });
//     console.log("the User", user);
//     return NextResponse.json({ user }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: error }, { status: 500 });
//   }
// };

export const GET = async () => {
  try {
    await ConnectDB();
    const users = await Users.find();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
