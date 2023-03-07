import Button, { ButtonSize, ButtonStyles } from "../button";
import Header, { HeaderType } from "../header";
import styles from "./index.module.scss";

function ContactForm() {
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>
        Creative project? Let's have a productive talk.
      </Header>
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
