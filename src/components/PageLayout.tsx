import { FC, ReactNode } from "react";
import { Header, SidebarMobile } from "./layout";
type Props = {
  children: ReactNode
}
const PageLayout: FC<Props> = ({children}): JSX.Element => {
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <SidebarMobile />
      {/* End Mobile menu */}
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
