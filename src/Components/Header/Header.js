import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <section className="header-bar">
      <section className="title-logo">
        <NavLink className="link-box" to="/">
          <img className="logo" src="noncenseLogo2.png" alt="Non.cense Logo" />
        </NavLink>
      </section>
    </section>
  );
};

export default Header;
