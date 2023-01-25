import { FC } from "react";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;
