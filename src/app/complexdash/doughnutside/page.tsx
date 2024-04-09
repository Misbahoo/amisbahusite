import Link from "next/link";

<div className="w-1/5 mr-5 flex">
  <div className="flex flex-col bg-white flex-1 rounded-md shadow-md shadow-gray-400">
    <div className="flex justify-center pt-8">{}</div>
    <div className="flex flex-col gap-2 justify-center items-center mt-5">
      <Link href="#" className="border-b border-gray-400 text-center">
        <p className="pb-1">Lorem ipsum</p>
      </Link>
      <Link href="#" className="border-b border-gray-400 text-center">
        <p className="pb-1">Lorem ipsum</p>
      </Link>
      <Link href="#" className="border-b border-gray-400 text-center">
        <p className="pb-1">Lorem ipsum</p>
      </Link>
      <Link href="#" className="border-b border-gray-400 text-center">
        <p className="pb-1">Lorem ipsum</p>
      </Link>
    </div>
    <div className="flex justify-center items-center">
      <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-gray-100 my-5 rounded-xl w-4/6 text-sm shadow-sm shadow-gray-600 p-1">
        Check Now
      </button>
    </div>
  </div>
</div>;
