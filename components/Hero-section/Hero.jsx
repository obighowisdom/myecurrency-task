'use client'
import Nav from "./Nav";
import Image from "next/image";
import { Button } from "../ui/button";
import Partners from "../Partners";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  const handleRoute = () => {
    router.push('/about')
  }
  return (
    <section>
      <div className="flex items-center justify-center w-full">
        <div className="relative w-full h-screen">
          <img
            src="/images/hero-img.png"
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
          <div className="md:ml-[130px] absolute inset-0 mt-5">
            <Nav />
            <div className="my-[120px] mx-5 md:mx-0 flex flex-col gap-8">
              <p className="font-sans text-[18px] font-[400px] leading-[27px] text-[#12305B]">
                We&apos;re here to help you
              </p>
              <Image
                src="/images/rest.png"
                width={369}
                height={74}
                alt="text-img"
              />
              <p className="font-sans text-[18px] font-[400px] leading-[27px] text-[#12305B]">
                With the aid of our Melatonin Sleepstiq, we can assure you that
                you can <br /> get quality sleep.
              </p>
              <Button onClick={handleRoute} className="w-[225px] h-[50px]" variant="destructive">
                Visit Shop
              </Button>
            </div>
          </div>
          <div className="absolute -mt-32 w-full flex justify-center hide-scrollbar md:overflow-x-scroll">
            <Partners />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
