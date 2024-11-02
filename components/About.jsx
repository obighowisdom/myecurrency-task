import Link from "next/link";
import React from "react";
import TestimonialCarousel from "./Card/AboutCard";
import { MdArrowRight } from "react-icons/md";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:ml-[130px]">
        <div className="mt-44 flex md:flex-row flex-wrap w-full gap-12 ">
          <div className="md:flex-1 w-full flex flex-col md:items-start items-center gap-12">
            <p className="font-sans text-[14px] font-[400px] leading-[21px] text-[#12305B]">
              Our Amazing Story
            </p>
            <div className="relative">
              <h3 className=" font-sans text-[30px] md:text-[36px] font-extrabold leading-[46px] text-[#12305B]">
                10K+Happy Customers
              </h3>
              <div className="absolute -mt-9 ml-52 justify-end ">
                {" "}
                <Image
                  src="/images/titleImg.png"
                  width={240}
                  height={47}
                  alt="bg"
                />
              </div>
            </div>

            <p className="text-[#21384299] font-sans text-[16px] font-[400px] leading-[26px]">
              There’s no secret sauce, no wizard behind the curtain. What <br />{" "}
              makes Aerolab tick is an interdisciplinary team with a <br />{" "}
              framework that fosters candid collaboration.
            </p>
            <Link href="/" className="flex items-center">
              <MdArrowRight color="#12305B" />
              <p className="font-sans text-[16px] font-bold border-b-[#12305B] border-b-2 pl-2 leading-[24px] text-[#12305B]">
                Know more About us
              </p>
            </Link>
          </div>
          <div className="md:flex-1 w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
