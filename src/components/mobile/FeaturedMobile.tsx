import { FC } from "react";
import { IFeatured } from "../../types/app";
import FeaturedItemMobile from "./FaeturedItemMobile";

type Props = {
  featured: IFeatured[];
};

const FeaturedMobile: FC<Props> = ({ featured }) => {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      {featured.map((item: IFeatured) => (
        <FeaturedItemMobile key={item.name} item={item} />
      ))}
    </div>
  );
};

export default FeaturedMobile;
