import Image from "next/image";
import Title from "./ui/title";
import { Highlight } from "./Data/Mission";

const Mission = () => {
  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:ml-[130px] flex flex-wrap md:my-[130px] my-[40px]">
        <div className="flex-1 items-center mt-14 ">
          <div
            className="flex flex-col gap-9 "
            data-aos="zoom-y-out"
            data-aos-delay={200}
          >
            <div className="text-center md:text-start">
              <Title name="Our Mission" />
            </div>
            <p className="leading-[26px] text-[16px] font-[400] text-[#21384299]">
              We started Sleepstiq with 1 simple goal: to be your <br /> best
              friend at bedtime. We, just like you, deal with <br /> stress,
              unease, and trouble sleeping from <br /> people. That's why we
              created products that aim to -
            </p>

            <div>
              {Highlight.map((item, index) => (
                <p
                  key={index}
                  className="leading-[30px] text-[16px] font-[400] text-[#21384299]"
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block max-1335:hidden">
          <Image
            src="/images/mission-img.png"
            height={400}
            width={811}
            alt="mission"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
