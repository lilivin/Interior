import Header, { HeaderType } from "../../../../../../components/header";
import styles from "./index.module.scss";

function SingleStep(props: {
  children: string;
  title: string;
  image: string;
  icon: string;
  number: string;
  reverse?: boolean
}) {
  const { children, title, image, icon, number, reverse } = props;
  return (
    <div className={`${styles.container} ${reverse && styles.reverse}`}>
      <img
        className={styles.image}
        src={require(`../../../../../../assets/services/${image}.png`)}
        alt={`${title} image`}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <img
            className={styles.icon}
            src={require(`../../../../../../assets/services/${icon}.svg`)}
            alt={`${title} icon`}
          />
          <span>{number}</span>
        </div>
        <Header type={HeaderType.Header02}>{title}</Header>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default SingleStep;
