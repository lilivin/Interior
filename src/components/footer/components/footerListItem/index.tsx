import styles from "./index.module.scss";

function FooterListItem(props: {
  children: string | JSX.Element | JSX.Element[];
  href?: string;
}) {
  const { children, href } = props;
  if (href) {
    return (
      <li className={styles.item}>
        <a href={href}>{children}</a>
      </li>
    );
  }
  return <li className={styles.item}>{children}</li>;
}

export default FooterListItem;
