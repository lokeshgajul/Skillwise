import Link from "next/link";
import React from "react";
import Image from "next/image";
import ReactImg from "../../../public/images/React.png";
const PrevRoadmaps = () => {
  return (
    <div className="p-7">
      <h2 className="text-xl font-medium  ml-7">
        {" "}
        Previous Generated RoadMaps:{" "}
      </h2>
      <div className="flex flex-row justify-center items-center flex-wrap gap-4 mt-3">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#f2f7ff] p-3 mt-3 shadow-md rounded-lg flex flex-col
                   w-full sm:w-[48%] lg:w-[23%]" // Responsive widths
            >
              <div className="w-full">
                <Image
                  src={ReactImg}
                  alt="React Image"
                  layout="responsive"
                  width={500} // Aspect ratio base
                  height={300}
                  className="rounded-md object-cover"
                />
              </div>

              <h1 className="text-md font-semibold py-2">
                Learn React - For Complete Beginners Roadmap
              </h1>
              <p className="text-[15px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit...
              </p>
              <span className="flex justify-end items-end p-2 text-[16px] tracking-wide font-medium hover:underline text-[#227CE3] cursor-pointer">
                <Link href="/progress">Start Learning </Link>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrevRoadmaps;
