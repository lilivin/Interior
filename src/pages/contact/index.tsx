import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import Header, { HeaderType } from "../../components/header";
import PageTitle from "../../components/pageTitle";
import MessageIcon from "../../assets/message-icon.svg";
import PhoneIcon from "../../assets/telephone-icon.svg";
import WorldIcon from "../../assets/world-icon.svg";
import styles from "./index.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <PageTitle
        title="Contact Us"
        path="Home / Contact"
        image="contact-page-title"
      />
      <div className={styles.content}>
        <Header type={HeaderType.Header01}>
          We love meeting new people and helping them.
        </Header>
        <div className={styles.contactWays}>
          <div className={styles.info}>
            <div className={styles.way}>
              <div className={styles.image}>
                <img src={MessageIcon} alt="Message Icon" />
              </div>
              <a href="#">info@yourdomain.com</a>
            </div>
            <div className={styles.way}>
              <div className={styles.image}>
                <img src={PhoneIcon} alt="Phone Icon" />
              </div>
              <a href="#">+48123456789</a>
            </div>
            <div className={styles.way}>
              <div className={styles.image}>
                <img src={WorldIcon} alt="World Icon" />
              </div>
              <a href="#">www.yourdomain.com</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
