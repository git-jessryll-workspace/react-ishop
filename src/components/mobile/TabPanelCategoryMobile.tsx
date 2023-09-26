import { Fragment, useContext } from "react"
import { AppContext } from "../../context/AppProvider"
import { AppContextType } from "../../types/app"
import { Tab } from "@headlessui/react";
import FeaturedMobile from "./FeaturedMobile";
import SectionsMobile from "./SectionsMobile";




const TabPanelCategoryMobile = () => {

    const {navigation} = useContext(AppContext) as AppContextType;
    return <Tab.Panels as={Fragment}>
    {navigation.categories.map((category) => (
      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
        <FeaturedMobile featured={category.featured} />
        <SectionsMobile
          categoryId={category.id}
          sections={category.sections}
        />
      </Tab.Panel>
    ))}
  </Tab.Panels>
}

export default TabPanelCategoryMobile