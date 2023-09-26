import { Tab } from "@headlessui/react";
import { useContext } from "react";
import { AppContextType } from "../../types/app";
import { AppContext } from "../../context/AppProvider";
import { classNames } from "../../utils";


const TabListCategoryMobile = (): JSX.Element => {
  const { navigation } = useContext(AppContext) as AppContextType;
  return (
    <div className="border-b border-gray-200">
      <Tab.List className="-mb-px flex space-x-8 px-4">
        {navigation.categories.map((category) => (
          <Tab
            key={category.name}
            className={({ selected }) =>
              classNames(
                selected
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-900",
                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
              )
            }
          >
            {category.name}
          </Tab>
        ))}
      </Tab.List>
    </div>
  );
};

export default TabListCategoryMobile;
