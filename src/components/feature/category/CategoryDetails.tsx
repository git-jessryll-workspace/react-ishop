import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  callout: {
    name: string;
    description: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  };
};

const CategoryDetails: FC<Props> = ({ callout }) => {
  return (
    <div key={callout.name} className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src={callout.imageSrc}
          alt={callout.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <Link to={callout.href}>
          <span className="absolute inset-0" />
          {callout.name}
        </Link>
      </h3>
      <p className="text-base font-semibold text-gray-900">
        {callout.description}
      </p>
    </div>
  );
};

export default CategoryDetails;
