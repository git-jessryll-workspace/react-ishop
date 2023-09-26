import { FC, ReactNode, createContext, useState } from "react";
import { AppContextType } from "../types/app";
import { navigation,products } from "../utils";

type PropsProviderType = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: FC<PropsProviderType> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const toggleOpenMenu = (forceOpen: boolean) => setOpenMenu(forceOpen ?? !openMenu);

  return (
    <AppContext.Provider
      value={{
        openMenu,
        navigation,
        products,
        toggleOpenMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
