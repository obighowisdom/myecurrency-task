import AboutProduct from "@/components/AboutProduct";
import Nav from "@/components/Hero-section/Nav";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <div className="flex items-center justify-center w-full">
        <div className="relative w-full md:h-[500px] h-[400px]">
          <img
            src="/images/about-img.png"
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
          <div className="md:ml-[130px] absolute inset-0 mt-5">
            <Nav />

            <div
              className="my-[120px] mx-4 md:mx-0 flex flex-col gap-8"
              data-aos="zoom-y-out"
              data-aos-delay={450}
            >
              <p className="font-sans text-[18px] font-[400px] leading-[27px] text-[#12305B]">
                We&apos;re here to help you
              </p>
              <Image
                src="/images/rest.png"
                width={369}
                height={74}
                alt="text-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-20">
        <AboutProduct />
      </div>
    </section>
  );
};

export default page;
