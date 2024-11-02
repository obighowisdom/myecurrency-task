import React from "react";
import Image from "next/image";
import { PartnersData } from "./Data/Partners";

const Partners = () => {
  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-[300px]">
        <div className="bg-[#fff] h-[80px] overflow-x-scroll md:h-[125px] md:w-full md:overflow-x-scroll md:ml-[130px] mt-[63px] mb-12 shadow-custom flex items-center justify-evenly gap-4 md:px-0 px-3">
          {PartnersData.map((item, index) => {
            return (
              <Image
                className="m-0 object-cover"
                key={index}
                src={item.image}
                width={item.width}
                height={item.height}
                alt={item.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
