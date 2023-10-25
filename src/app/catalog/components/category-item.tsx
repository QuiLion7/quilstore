import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
        <Image
          src={category.imageUrl}
          alt={category.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[65%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="rounded-bl-lg rounded-br-lg bg-accent py-3">
        <div className="text-center text-sm font-semibold">{category.name}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
