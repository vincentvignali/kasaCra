import { FC } from "react";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="footer">
      <Link className="logo-container-footer" to="/">
        <img src="logoFooter.svg" alt="Logo" style={{ width: "auto" }} />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
