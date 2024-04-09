import AllUsers from "../(components)/alluser";
import { redirect } from "next/navigation";
import { authOptions } from "../api/authOptions";
import { getServerSession } from "next-auth";

const ShowUsers = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return <AllUsers />;
};

export default ShowUsers;
