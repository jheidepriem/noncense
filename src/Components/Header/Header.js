import { NavLink } from "react-router-dom";

import "../Header/Header.css";

const Header = () => {
  return (
    <section className="header-bar">
      <section className="title-logo">
        <NavLink to={"/"} className="link-box" >
          <img className="logo" src={"logo.png"} alt="Non.cense Logo" />
        </NavLink>
      </section>
    </section>
  );
};

export default Header;
