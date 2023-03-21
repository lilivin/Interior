import Button, { ButtonSize, ButtonStyles } from "../button";
import styles from "./index.module.scss";

function ContactForm() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Name" />
        <input className={styles.input} type="email" placeholder="Email" />
        <textarea
          className={styles.textarea}
          placeholder="Hello I'm interested in..."
        />
        <Button
          type="submit"
          size={ButtonSize.Default}
          style={ButtonStyles.Primary}
        >
          Send Now
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
