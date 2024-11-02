import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Socials } from "./Data/Social";

const Footer = () => {
  return (
    <section className="bg-[url('/images/footer-design.png')] bg-no-repeat bg-cover w-full relative md:h-[450px] h-fit">
      <div className="bg-[#12305bd5] w-full  h-max bottom-0 top-0 absolute p-10">
        <div className="flex flex-col gap-8">
          <Image
            src="/images/logo2.svg"
            width={92}
            height={62}
            alt="logo"
            className="self-center"
          />
          <div className="flex md:flex-row flex-col flex-wrap justify-evenly gap-14">
            <div className="flex-1 flex flex-wrap justify-between">
              <div className="flex flex-col gap-6">
                <h3 className="leading-[38px] text-white text-[16px] font-bold font-sans uppercase">
                  Company
                </h3>
                <Link
                  href=""
                  className="leading-40px] font-sans font-[400px] text-[16px] text-[#ABABAB]"
                >
                  About
                </Link>
                <Link
                  href=""
                  className="leading-40px] font-sans font-[400px] text-[16px] text-[#ABABAB]"
                >
                  Blogs
                </Link>
                <Link
                  href=""
                  className="leading-40px] font-sans font-[400px] text-[16px] text-[#ABABAB]"
                >
                  Contact
                </Link>
                <Link
                  href=""
                  className="leading-40px] font-sans font-[400px] text-[16px] text-[#ABABAB]"
                >
                  Jobs
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="leading-[38px] text-white text-[16px] font-bold font-sans uppercase">
                  Contact
                </h3>
                <Link
                  href=""
                  className="leading-[40px] font-sans font-[400px] text-[16px] text-[#ABABAB]"
                >
                  Phone
                </Link>
                <p className="leading-[40px] font-sans font-bold text-[16px] text-[#fff]">
                  +234 708 507 3128
                </p>
                <Link
                  href=""
                  className="leading-[40px] font-sans font-[400px] text-[16px] text-[#ABABAB]"
                >
                  Address
                </Link>
                <p className="leading-40px] font-sans font-bold text-[16px] text-[#fff]">
                  16, Ogindipe Close, Upston Close
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              <h3 className="leading-[38px] text-white text-[16px] font-bold font-sans uppercase">
                Consumer Advisory
              </h3>
              <p className="text-white leading-[26px] font-[400px] text-[14px]">
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease. This product should be used only
                as directed on the label. All trademarks and copyrights are
                property of their respective owners and not affiliated with nor
                do they endorse this product. Results may vary.
              </p>
              <p className="text-white leading-[26px] font-[400px] text-[14px]">
                By using our website or product, you agree to follow our <br />
                <Link href="" className="text-[#8FE2FF]">
                  terms of service.
                </Link>
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-6 ">
              <div className="pl-14 border-l-2 border-[#5D6544] flex flex-col gap-6">
                <h3 className="leading-[38px] text-white text-[16px] font-bold font-sans uppercase">
                  Get in Touch
                </h3>
                <p className="leading-[26px] font-sans font-[400px] text-[16px] text-[#ABABAB]">
                  Feel free to get in touch with us <br /> vai email
                </p>
                <p className="leading-[36px] font-sans font-bold text-[24px] text-[#fff]">
                  hello@sleepstiq.com
                </p>
                <div className="flex items-center gap-4">
                  {Socials.map((item, index) => {
                    return (
                      <Link key={index} href="">
                        <Image
                          src={item.image}
                          width={33}
                          height={33}
                          alt="item.name"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
              <p className="pl-14 text-[14px] font-[400px] leading-[21px] text-[#ABABAB]">
                © 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
