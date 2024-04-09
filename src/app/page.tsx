"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <header className="flex w-full">
        <div className="flex justify-center gap-3 w-full">
          <Link href="/">Home</Link>
          <Link href="/complexdash">Dashboard</Link>
          <Link href="/about">About Me</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <Link href="/allUsers">All users</Link>
        </div>
      </header>

      <footer>This is footer</footer>
    </main>
  );
}
