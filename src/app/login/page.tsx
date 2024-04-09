import LoginForm from "@/app/(components)/loginForm";
import { redirect } from "next/navigation";
import { authOptions } from "../api/authOptions";
import { getServerSession } from "next-auth";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/complexdash");
  } else {
    return <LoginForm />;
  }
};

export default Login;
