import { FC } from "react";
import { IFeatured } from "../../types/app";

type Props = {
  item: IFeatured;
};

const FeaturedItemMobile: FC<Props> = ({ item }) => {
  return (
    <div className="group relative text-sm">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="object-cover object-center"
        />
      </div>
      <a href={item.href} className="mt-6 block font-medium text-gray-900">
        <span className="absolute inset-0 z-10" aria-hidden="true" />
        {item.name}
      </a>
      <p aria-hidden="true" className="mt-1">
        Shop now
      </p>
    </div>
  );
};

export default FeaturedItemMobile;
