import styles from "./index.module.scss";

function Articles(props: { children: string | JSX.Element | JSX.Element[] }) {
  const { children } = props;
  return (
    <div className={`${styles.container}`}>
      <div className={styles.articles}>{children}</div>
    </div>
  );
}

export default Articles;
