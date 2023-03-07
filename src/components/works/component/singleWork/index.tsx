import Header, { HeaderType } from "../../../header";
import styles from "./index.module.scss";

function SignleWork(props: {children: string, title: string, href: string}) {
  const { children, title, href } = props;
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header03}>{title}</Header>
      <p>
        {children}
      </p>
      <a href={href} className={styles.button}>Read More</a>
    </div>
  );
}

export default SignleWork;
