import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, className, ...props }: ImageProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        height={0}
        width={0}
        className={cn("h-auto w-[50%]", className)}
        sizes="100vw"
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default PromoBanner;
