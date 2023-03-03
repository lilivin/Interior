import styles from "./index.module.scss";

export const enum HeaderType {
  Header01 = "header01",
  Header02 = "header02",
  Header03 = "header03",
  Header04 = "header04",
  Header05 = "header05",
  Header06 = "header06",
}

function Header({
  children,
  as = "h3",
  type = HeaderType["Header03"],
}: {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  type?: HeaderType;
}) {
  const Tag = as;
  return <Tag className={`${styles.header} ${styles[type]}`}>{children}</Tag>;
}

export default Header;
