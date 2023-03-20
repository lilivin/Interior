import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Hamburger from "../hamburger";
import Logo from "../logo";
import styles from "./index.module.scss";

function Navigation() {
  const [scroll, setScroll] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 200)
      );
    }
  }, []);
  return (
    <div className={`${styles.navigation} ${scroll && styles.scroll}`}>
      <Link className={styles.logo} to="/">
        <Logo />
      </Link>
      <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      <ul className={`${styles.list} ${isOpen && styles.isOpen}`}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/about-us"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/services"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/our-projects/1"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/blog/1"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
