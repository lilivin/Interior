import Header, { HeaderType } from "../header";
import List, { ListType } from "../list";
import ListItem from "../list/components/listItem";
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
        <p>
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <FooterSocialMedia />
      </div>
      <div className={styles.column}>
        <Header type={HeaderType.Header03}>Pages</Header>
        <List type={ListType.Unorder}>
          <ListItem href="/about-us">About Us</ListItem>
          <ListItem href="/our-projects">Our Projects</ListItem>
          <ListItem href="/our-team">Our Team</ListItem>
          <ListItem href="/contact-us">Contact Us</ListItem>
          <ListItem href="/services">Services</ListItem>
        </List>
      </div>
      <div className={styles.column}>
        <Header type={HeaderType.Header03}>Services</Header>
        <List type={ListType.Unorder}>
          <ListItem href="/services/kitchen">Kitchen</ListItem>
          <ListItem href="/services/living-area">Living Area</ListItem>
          <ListItem href="/services/bathroom">Bathroom</ListItem>
          <ListItem href="/services/dinning-hall">Dinning Hall</ListItem>
          <ListItem href="/services/bedroom">Bedroom</ListItem>
        </List>
      </div>
      <div className={styles.column}>
        <Header type={HeaderType.Header03}>Contact</Header>
        <List type={ListType.Unorder}>
          <ListItem>55 East Birchwood Ave. Brooklyn, New York 11201</ListItem>
          <ListItem href="mailto:contact@interno.com">
            contact@interno.com
          </ListItem>
          <ListItem href="tel:+48123456789">+48123456789</ListItem>
        </List>
      </div>
    </footer>
  );
}

export default Footer;
