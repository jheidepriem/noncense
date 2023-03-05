import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <section className="header-bar">
      <section className="title-logo">
        <Link className="link-box" to="/">
          <img className="logo" src="logo.png" alt="Logo link" />
        </Link>
      </section>
    </section>
  );
};

export default Header;
