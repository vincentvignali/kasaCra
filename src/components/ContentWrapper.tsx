import { FC } from "react";

interface ContentWrapperProps {
  children: JSX.Element;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;
