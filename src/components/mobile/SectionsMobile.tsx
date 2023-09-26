import { FC } from "react";
import { IItem, ISection } from "../../types/app";
import SectionItemMobile from "./SectionItemMobile";

type Props = {
  sections: ISection[];
  categoryId: string;
};

const SectionsMobile: FC<Props> = ({ sections, categoryId }) => {
  return (
    <>
      {sections.map((section: ISection) => (
        <div key={section.name}>
          <p
            id={`${categoryId}-${section.id}-heading-mobile`}
            className="font-medium text-gray-900"
          >
            {section.name}
          </p>
          <ul
            role="list"
            aria-labelledby={`${categoryId}-${section.id}-heading-mobile`}
            className="mt-6 flex flex-col space-y-6"
          >
            {section.items.map((item: IItem) => (
              <SectionItemMobile key={item.name} item={item} />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default SectionsMobile;
