import Button, { ButtonSize, ButtonStyles } from "../../../../components/button";
import styles from "./index.module.scss";

function Banner() {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${require("../../../../assets/banner-photo.png")})`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Let Your Home Be Unique</h1>
          <p className={styles.subtext}>
            There are many variations of the passages of lorem Ipsum
            fromavailable,variations of the passages.
          </p>
          <Button
            size={ButtonSize.Default}
            style={ButtonStyles.Primary}
            href="/login"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
