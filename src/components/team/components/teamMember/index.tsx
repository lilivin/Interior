import { useState } from "react";
import Header, { HeaderType } from "../../../header";
import styles from "./index.module.scss";
import FacebookLogo from "../../../../assets/facebook-icon.svg";
import TwitterLogo from "../../../../assets/twitter-icon.svg";
import LinkedinLogo from "../../../../assets/linkedin-icon.svg";
import InstagramLogo from "../../../../assets/instagram-icon.svg";

function TeamMember(props: {
  name: string;
  description: string;
  phone: string;
  email: string;
  image: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}) {
  const {
    name,
    description,
    phone,
    email,
    image,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = props;
  const [flip, setFlip] = useState(false);

  return (
    <div onClick={() => setFlip(!flip)} className={styles.container}>
      <div className={`${styles.card} ${flip && styles.flipped}`}>
        <div className={styles.front}>
          <img src={require(`../../../../assets/${image}.png`)} alt={name} />
        </div>
        <div className={styles.back}>
          <div>
            <Header type={HeaderType.Header03}>{name}</Header>
            <p>{description}</p>
          </div>
          <div className={styles.socialMedia}>
            {facebook && (
              <a className={styles.link} href={facebook}>
                <img src={FacebookLogo} alt="Facebook Logo" />
              </a>
            )}
            {twitter && (
              <a className={styles.link} href={twitter}>
                <img src={TwitterLogo} alt="Twitter Logo" />
              </a>
            )}
            {instagram && (
              <a className={styles.link} href={instagram}>
                <img src={InstagramLogo} alt="Instagram Logo" />
              </a>
            )}
            {linkedin && (
              <a className={styles.link} href={linkedin}>
                <img src={LinkedinLogo} alt="Linkedin Logo" />
              </a>
            )}
          </div>
          <div className={styles.contact}>
            <a href={`tel:${phone}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
