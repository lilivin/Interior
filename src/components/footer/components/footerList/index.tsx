import styles from "./index.module.scss";

function FooterList(props: {children: string | JSX.Element | JSX.Element[]}) {
  return (
    <ul className={styles.list}>
        {props.children}
    </ul>
  );
}

export default FooterList;
