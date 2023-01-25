import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="header">
      <Link className="logo-container-header" to="/">
        <img src="src/assets/LOGO.png" alt="" />
      </Link>
      <div>
        <NavLink className="navlink" to="/">
          Acceuil
        </NavLink>
        <NavLink className="navlink" to="/about">
          À Propos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
