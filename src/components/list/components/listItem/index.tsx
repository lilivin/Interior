import styles from "./index.module.scss";

function ListItem(props: { children: string; href?: string }) {
  const { children, href } = props;
  if (href) {
    return (
      <li className={styles.container}>
        <a href={href}>{children}</a>
      </li>
    );
  }
  return <li className={styles.container}>{children}</li>;
}

export default ListItem;
