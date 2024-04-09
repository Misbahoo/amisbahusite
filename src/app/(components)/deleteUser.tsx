"use client";

import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

const DeleteUser = ({ id }) => {
  const router = useRouter();
  const deleteItem = async () => {
    try {
      const res = await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
      });

      router.refresh();
      return NextResponse.json({ message: "Deleted" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  };
  return (
    <div>
      <button className="bg-red-500 text-white p-3" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
};

export default DeleteUser;
