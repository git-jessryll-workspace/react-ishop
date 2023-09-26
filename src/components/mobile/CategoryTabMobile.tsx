import { Tab } from "@headlessui/react";
import TabListCategoryMobile from "./TabListCategoryMobile";
import TabPanelCategoryMobile from "./TabPanelCategoryMobile";

const CategoryTabMobile = () => {

  return (
    <Tab.Group as="div" className="mt-2">
      <TabListCategoryMobile/>
      <TabPanelCategoryMobile/>
    </Tab.Group>
  );
};

export default CategoryTabMobile;
