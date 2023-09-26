import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { AppContextType } from "../../types/app";

const MainNavigation = (): JSX.Element => {
  const { navigation } = useContext(AppContext) as AppContextType;
  return (
    <div className="space-y-6 border-t border-gray-200 px-4 py-6">
      {navigation.pages.map((page) => (
        <div key={page.name} className="flow-root">
          <a
            href={page.href}
            className="-m-2 block p-2 font-medium text-gray-900"
          >
            {page.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default MainNavigation;
