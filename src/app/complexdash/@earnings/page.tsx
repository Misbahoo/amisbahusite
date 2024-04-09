import { CiDollar } from "react-icons/ci";
export default function Earnings() {
  return (
    <>
      <div className="flex flex-col p-3 group-hover:text-white">
        <div className="flex">
          <div className="flex justify-start w-4/6">
            <p className="text-sm mb-5">Job Created</p>
          </div>
          <div className="flex justify-end w-2/6">
            <CiDollar className="text-2xl mb-5 text-orange-500 group-hover:text-white" />
          </div>
        </div>
        <p className="text-3xl text-center font-bold">408,757</p>
      </div>
    </>
  );
}
