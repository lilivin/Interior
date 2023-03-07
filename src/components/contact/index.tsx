import Button, { ButtonSize, ButtonStyles } from "../button";
import Header, { HeaderType } from "../header";
import styles from "./index.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Wanna join the interno?</h3>
      <p>It is a long established fact will be distracted.</p>
      <Button
          size={ButtonSize.Default}
          style={ButtonStyles.Secendary}
          href="#"
        >
          Contact With Us
        </Button>
    </div>
  );
}

export default Contact;
