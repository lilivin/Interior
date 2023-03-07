import SignleWork from "./component/singleWork";
import styles from "./index.module.scss";

function Works(props: {children: string | JSX.Element | JSX.Element[]}) {
  const {children} = props;
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Works;
