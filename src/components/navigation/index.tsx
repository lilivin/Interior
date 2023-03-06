import Logo from "../logo";
import styles from "./index.module.scss";

function Navigation() {
  return (
    <div className={styles.navigation}>
        <Logo />
        <ul className={styles.list}>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Pages</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Project</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
  );
}

export default Navigation;
