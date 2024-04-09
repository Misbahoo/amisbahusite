"use client";

import { FaBars } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default async function DashboardLayout({
  children,
  earnings,
  likes,
  share,
  rate,
  stardustChart,
  qlteknikChart,
  agvisionChart,
  lineChart,
  jobsCreatedChart,
  commodityYieldChart,
  areaUnderCultivation,
}: {
  children: React.ReactNode;
  earnings: React.ReactNode;
  likes: React.ReactNode;
  share: React.ReactNode;
  rate: React.ReactNode;
  stardustChart: React.ReactNode;
  qlteknikChart: React.ReactNode;
  doughnutChart: React.ReactNode;
  lineChart: React.ReactNode;
  agvisionChart: React.ReactNode;
  jobsCreatedChart: React.ReactNode;
  commodityYieldChart: React.ReactNode;
  areaUnderCultivation: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <div className="">{children}</div>
        <div className="flex flex-col absolute right-0 w-10/12 bg-gray-300 pl-10">
          <div className="flex">
            <div className="pt-10 pb-5 w-5/6 justify-start">
              <p className="text-2xl text-gray-500">Welcome {}</p>
            </div>
            <div className=" pt-10 pb-5 w-1/6 justify-end">
              <FaBars className="text-2xl text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-10 justify-center">
            <div className="w-1/6 p-3 m-3 shadow-md shadow-gray-400 bg-white group hover:bg-blue-950 cursor-pointer">
              {earnings}
            </div>
            <div className="w-1/6 p-3 m-3 shadow-md shadow-gray-400 bg-white group hover:bg-blue-950 hover:text-white cursor-pointer">
              {likes}
            </div>
            <div className="w-1/6 p-3 m-3 shadow-md shadow-gray-400 bg-white group hover:bg-blue-950 hover:text-white cursor-pointer">
              {share}
            </div>
            <div className="w-1/6 p-3 m-3 shadow-md shadow-gray-400 bg-white group hover:bg-blue-950 hover:text-white cursor-pointer">
              {rate}
            </div>
          </div>
          <div className="flex my-10 w-full">
            <div className="flex gap-5 flex-col w-full mr-10">
              <div className="flex gap-5">
                <div className="flex flex-col gap-5 w-4/6">
                  <div className="flex flex-1 p-3 shadow-md shadow-gray-400 bg-white">
                    <div className="w-full">{stardustChart}</div>
                  </div>
                  <div className="flex flex-1 p-3 shadow-md shadow-gray-400 bg-white">
                    <div className="w-full">{qlteknikChart}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-2/6">
                  <div className="flex flex-1 p-3 shadow-md shadow-gray-400 bg-white">
                    <div className="w-full">{jobsCreatedChart}</div>
                  </div>
                  <div className="flex flex-1 p-3 shadow-md shadow-gray-400 bg-white">
                    <div className="w-full">{areaUnderCultivation}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 p-10 shadow-md shadow-gray-400 bg-white">
                <div className="w-full">{agvisionChart}</div>
              </div>
              <div className="flex flex-1 p-10 shadow-md shadow-gray-400 bg-white">
                <div className="w-full">{lineChart}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
