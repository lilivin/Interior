import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function ListItem(props: { children: string; href?: string }) {
  const { children, href } = props;
  if (href) {
    return (
      <li className={styles.container}>
        <Link to={href}>{children}</Link>
      </li>
    );
  }
  return <li className={styles.container}>{children}</li>;
}

export default ListItem;
