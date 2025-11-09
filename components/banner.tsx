"use client";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";
import Table from "./table";
const Banner: React.FC = () => {
  return (
    <div className="flex flex-row-reverse">
      <img className="h-[800px] p " src="./banner3.jpeg" alt="banner" />
      <div className="w-full">
        <div className="px-12">
          <p className="py-10 px-5 text-5xl font-extrabold ">
            be you personal <span className="text-amber-500">triner</span>
          </p>
          <p className=" p-4 w-[400px] text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            corporis nemo perspiciatis nam vitae voluptate, maxime obcaecati
            provident tenetur iusto delectus consequuntur sapiente. Voluptate,
            esse distinctio in laudantium maiores quisquam.
          </p>
          <div className="flex gap-5 p-5">
            <button className="bg-gray-300 rounded-xl p-2 flex items-center gap-2 flex-row-reverse hover:bg-gray-200 duration-300 cursor-pointer ">
              learn more
              <IoInformationCircleSharp />
            </button>
            <Link href={"/classes"}>
              <button className="bg-amber-400 rounded-xl flex items-center gap-2 flex-row-reverse p-2 hover:bg-amber-300 duration-300 cursor-pointer ">
                see classes → <FaCalendarAlt />
              </button>
            </Link>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Banner;
