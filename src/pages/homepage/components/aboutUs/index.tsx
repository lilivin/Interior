import Button, {
  ButtonSize,
  ButtonStyles,
} from "../../../../components/button";
import Header, { HeaderType } from "../../../../components/header";
import styles from "./index.module.scss";
import AboutUsImage from "../../../../assets/homepage-about-us-photo.png";
import CallIcon from "../../../../assets/icons/phone-icon.svg";

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header type={HeaderType.Header01}>
          We Create The Art Of Stylish Living Stylishly
        </Header>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <a href="tel:123-456-7890" className={styles.call}>
          <img className={styles.icon} src={CallIcon} alt="Call Icon" />
          <div>
            <span className={styles.phoneNumber}>012345678</span>
            <span>Call Us Anytime</span>
          </div>
        </a>
        <Button
          size={ButtonSize.Default}
          style={ButtonStyles.Primary}
          href="/login"
        >
          Get Started
        </Button>
      </div>
      <img className={styles.image} src={AboutUsImage} alt="Kitchen" />
    </div>
  );
}

export default AboutUs;
