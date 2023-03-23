import styles from "./index.module.scss";
import FacebookLogo from "../../../../assets/icons/facebook-icon.svg";
import TwitterLogo from "../../../../assets/icons/twitter-icon.svg";
import LinkedinLogo from "../../../../assets/icons/linkedin-icon.svg";
import InstagramLogo from "../../../../assets/icons/instagram-icon.svg";

function FooterSocialMedia() {
  return (
    <div className={styles.container}>
      <a className={styles.link} href="#">
        <img src={FacebookLogo} alt="Facebook Logo" />
      </a>
      <a className={styles.link} href="#">
        <img src={TwitterLogo} alt="Twitter Logo" />
      </a>
      <a className={styles.link} href="#">
        <img src={InstagramLogo} alt="Instagram Logo" />
      </a>
      <a className={styles.link} href="#">
        <img src={LinkedinLogo} alt="Linkedin Logo" />
      </a>
    </div>
  );
}

export default FooterSocialMedia;
