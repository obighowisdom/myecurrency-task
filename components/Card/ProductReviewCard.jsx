import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const ProductReviewCard = ({ image, name, text, rating }) => {
  return (
    <Card className="w-[250px] h-[350px] flex-shrink-0 overflow-hidden flex flex-col shadow-custom border-none rounded-lg  bg-white m-2">
      <div className="flex-1">
        <div className="w-full">
          <img src={image} alt="Sleepstiq Diffuser" />
        </div>
      </div>
      <div className="p-4 flex-1">
        <div className="flex flex-col gap-2">
          <div className="h-24">
            <p className="font-[400px] text-[14px] leading-[20px] italic text-[#4D533C]">
              {text}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[16px] leading-[24px] text-[#4D533C]">
              {name}
            </h3>
            <div className="flex text-green-500 gap-3">
              {[...Array(rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default ProductReviewCard;