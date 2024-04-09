import { MdStarRate } from "react-icons/md";
export default function Rate() {
  return (
    <>
      <div className="flex flex-col p-3 group-hover:text-white">
        <div className="flex">
          <div className="flex justify-start w-3/6">
            <p className="text-sm mb-5">Rating</p>
          </div>
          <div className="flex justify-end w-3/6">
            <MdStarRate className="text-2xl mb-5 text-orange-500 group-hover:text-white" />
          </div>
        </div>
        <p className="text-3xl text-center font-bold ">8.7</p>
      </div>
    </>
  );
}
