import Header, { HeaderType } from "../header";
import Logo from "../logo";
import FooterList from "./components/footerList";
import FooterListItem from "./components/footerListItem";
import FooterSocialMedia from "./components/footerSocialMedia";
import styles from "./index.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <Logo />
        <p>It is a long established fact that a reader will be distracted lookings.</p>
        <FooterSocialMedia />
      </div>
      <div className={styles.column}>
        <Header type={HeaderType.Header03}>Pages</Header>
        <FooterList>
            <FooterListItem href="/about-us">About Us</FooterListItem>
            <FooterListItem href="/our-projects">Our Projects</FooterListItem>
            <FooterListItem href="/our-team">Our Team</FooterListItem>
            <FooterListItem href="/contact-us">Contact Us</FooterListItem>
            <FooterListItem href="/services">Services</FooterListItem>
        </FooterList>
      </div>
      <div className={styles.column}>
        <Header type={HeaderType.Header03}>Services</Header>
        <FooterList>
            <FooterListItem href="/services/kitchen">About Us</FooterListItem>
            <FooterListItem href="/services/living-area">Living Area</FooterListItem>
            <FooterListItem href="/services/bathroom">Bathroom</FooterListItem>
            <FooterListItem href="/services/dinning-hall">Dinning Hall</FooterListItem>
            <FooterListItem href="/services/bedroom">Bedroom</FooterListItem>
        </FooterList>
      </div>
      <div className={styles.column}>
        <Header type={HeaderType.Header03}>Contact</Header>
        <FooterList>
            <FooterListItem>55 East Birchwood Ave. Brooklyn, New York 11201</FooterListItem>
            <FooterListItem>contact@interno.com</FooterListItem>
            <FooterListItem>(123)456-7890</FooterListItem>
        </FooterList>
      </div>
    </footer>
  );
}

export default Footer;
