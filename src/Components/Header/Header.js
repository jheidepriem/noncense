import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <section className="header-bar">
      <section className="title-logo">
        <Link className="link-box" to="/">
          <img className="logo" src="noncenseLogo2.png" alt="Non.cense Logo" />
        </Link>
      </section>
    </section>
  );
};

export default Header;
