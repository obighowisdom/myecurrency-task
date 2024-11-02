"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Title from "./ui/title";
import Divider from "./ui/divider";
import { useState } from "react";
import Ratings from "./Ratings";

const AboutProduct = () => {
  const [value, setValue] = useState(1);

  const price = 25;
  const totalPrice = price * value;

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue >= 0) {
      setValue(newValue);
    }
  };
  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex md:flex-row flex-col justify-center lg:justify-center md:justify-center items-center md:items-center md:flex-wrap gap-12">
        <div className="">
          <div className="w-full relative">
            <Image
              src="/images/product.png"
              width={477}
              height={519}
              alt="product"
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[465px] md:items-start items-center gap-8">
          <Title name="About Product" />

          <p className="font-sans text-center md:text-left text-[#21384299] font-[400px] text-[16px] leading-[26px]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <div className="">
            <div className="flex gap-3 ">
              <b>😊</b>
              <p className="text-[#4D533C] leading-6 font-[400px] text-[14px] italic">
                Promotes calm and relaxation.
              </p>
            </div>
            <div className="flex gap-3">
              <b>💤</b>
              <p className="text-[#4D533C] leading-6 font-[400px] text-[14px] italic">
                Inhalation allows for a rapid effect.
              </p>
            </div>
            <div className="flex gap-3">
              <b>✅</b>
              <p className="text-[#4D533C] leading-6 font-[400px] text-[14px] italic">
                100% drug-free, plant-based ingredients. <br /> 3rd-party lab
                tested
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-14">
              <p className="text-[#000000] text-[16px] font-[400px] leading-[26px]">
                Price
              </p>
              <p className="text-[#000000] text-[16px] font-[400px] leading-[26px]">
                Unit
              </p>
            </div>
            <div className="flex gap-14">
              <p className="text-[#000000] text-[16px] font-semibold leading-[26px]">
                USD {totalPrice}
              </p>
              <div className="">
                <input
                  type="number"
                  value={value}
                  onChange={handleChange}
                  min="1"
                  step="1"
                  className="font-semibold text-{#000000] w-[60px] h-[30px] border rounded border-black p-3"
                />
              </div>
            </div>
          </div>

          <Button className="w-[225px] h-[50px]" variant="destructive">
            Buy
          </Button>
        </div>
      </div>
      <Divider />
      <Ratings />
    </section>
  );
};

export default AboutProduct;
