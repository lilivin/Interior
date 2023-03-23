import Header, { HeaderType } from "../../../../../../components/header";
import styles from "./index.module.scss";

function SingleTestimonial(props: {
  children: string;
  name: string;
  city: string;
  image: string;
}) {
  const { children, name, city, image } = props;

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          src={require(`../../../../../../assets/users/${image}.png`)}
          alt={name}
        />
        <div className={styles.userInfo}>
          <Header type={HeaderType.Header03}>{name}</Header>
          <p>{city}</p>
        </div>
      </div>
      <p>{children}</p>
    </div>
  );
}

export default SingleTestimonial;
