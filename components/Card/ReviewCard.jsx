import { Import } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";



const ReviewCard = ({ review, name, rating }) => {
   return (
     <Card className="w-[300px] h-48 flex-shrink-0 overflow-hidden flex flex-col  border-none rounded p-2  bg-[#FBF9F2] m-2">
       <CardContent className="p-2 h-24">
         <p className="text-[#4D533C] text-[16px] leading-[26px] italic mb-4">
           {review}
         </p>
       </CardContent>
       <CardFooter className='p-2'>
         <div className="flex flex-col gap3">
           <h3 className="font-bold text-[16px] mb-3 leading-[24px] text-[#4D533C]">
             {name}
           </h3>
           <div className="flex text-green-500 gap-4">
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
       </CardFooter>
     </Card>
   );
};
export default ReviewCard;
