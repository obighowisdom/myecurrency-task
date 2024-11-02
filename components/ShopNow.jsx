'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Title from "./ui/title";
import { useRouter } from "next/navigation";

const ShopNow = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/about");
  };
  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:ml-[90px] flex md:flex-row flex-col justify-center lg:justify-start md:justify-start items-center md:items-start md:flex-wrap gap-12">
        <div className="">
          <div
            className="w-full relative"
            data-aos="zoom-y-out"
            data-aos-delay={100}
          >
            <Image
              src="/images/product.png"
              width={485}
              height={519}
              alt="product"
            />
            <div className="lg:w-[300px] md:w-fit max-1335:ml-0 max-1335:mx-auto w-fit md:h-fit h-fit bg-white shadow-custom rounded-md absolute -mt-28 md:ml-[200px] p-5">
              <div className="flex gap-3 ">
                <b>😊</b>
                <p className="text-[#4D533C] leading-6 font-[400px] md:text-[12px] text-[14px] italic">
                  Promotes calm and relaxation.
                </p>
              </div>
              <div className="flex gap-3">
                <b>💤</b>
                <p className="text-[#4D533C] leading-6 font-[400px] md:text-[12px] text-[14px] italic">
                  Inhalation allows for a rapid effect.
                </p>
              </div>
              <div className="flex gap-3">
                <b>✅</b>
                <p className="text-[#4D533C] leading-6 font-[400px] md:text-[12px] text-[14px] italic">
                  100% drug-free, plant-based ingredients. <br /> 3rd-party lab
                  tested
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col w-full md:w-[400px] md:items-start items-center gap-8"
          data-aos="zoom-y-out"
          data-aos-delay={200}
        >
          <Title name="Shop Now" />

          <p className="font-sans text-center md:text-left text-[#21384299] font-[400px] text-[16px] leading-[26px]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Button
            onClick={handleRoute}
            className="w-[225px] h-[50px]"
            variant="destructive"
          >
            Visit Shop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
