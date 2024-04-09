"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const theRef = useRef<HTMLAnchorElement>();
  const router = useRouter();

  useEffect(() => {
    theRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setError("");

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email: input.email,
        password: input.password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("complexdash");
    } catch (error) {
      console.log("Error Login", error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full bg-blue-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-2/6 bg-blue-900 justify-center items-center rounded-md shadow-md shadow-gray-700"
      >
        <h1 className="text-2xl text-white mb-5 mt-12">Login</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="p-3 rounded-md w-5/6 outline-none"
          autoComplete="none"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 rounded-md w-5/6 outline-none"
          onChange={handleChange}
        />
        <input
          type="submit"
          name="submit"
          value="Login"
          className="bg-blue-600 p-3 w-2/6 rounded-md hover:bg-blue-300 cursor-pointer text-white"
        />
        <div>
          {error && (
            <p className="bg-red-500 text-white p-2 rounded-md text-sm">
              {error}
            </p>
          )}
        </div>
        <div className="mb-10 px-5 w-full">
          <p className="text-white">
            New user?
            <span className="text-xl text-blue-300">
              <Link href="signup"> Sign up</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
