import Button, { ButtonSize, ButtonStyles } from "../button";
import Header, { HeaderType } from "../header";
import styles from "./index.module.scss";

function ContentWithImage(props: {
  children: string;
  reverse?: boolean;
  title: string;
  buttonText: string;
  buttonHref: string;
  image: string;
}) {
  const { children, reverse, title, buttonText, buttonHref, image } = props;
  return (
    <div className={`${styles.container} ${reverse && styles.reverse}`}>
      <div className={styles.content}>
        <Header type={HeaderType.Header01}>{title}</Header>
        <p>{children}</p>
        <Button
          href={buttonHref}
          style={ButtonStyles.Primary}
          size={ButtonSize.Default}
        >
          {buttonText}
        </Button>
      </div>
      <img
        className={styles.image}
        src={require(`../../assets/${image}.png`)}
        alt="Image"
      />
    </div>
  );
}

export default ContentWithImage;
