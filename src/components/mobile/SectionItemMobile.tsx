import { FC } from "react";
import { IItem } from "../../types/app";

type Props = {
  item: IItem;
};

const SectionItemMobile: FC<Props> = ({ item }) => {
  return (
    <li key={item.name} className="flow-root">
      <a href={item.href} className="-m-2 block p-2 text-gray-500">
        {item.name}
      </a>
    </li>
  );
};

export default SectionItemMobile;
