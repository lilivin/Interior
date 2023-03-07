import Header, { HeaderType } from "../header";
import TeamMember from "./components/teamMember";
import styles from "./index.module.scss";

function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header type={HeaderType.Header01}>Our Team</Header>
        <div className={styles.members}>
          <TeamMember
            name="Carl Johnson"
            description="Design, France"
            phone="+48123456789"
            email="carl@gmail.com"
            image="team-member-1"
            facebook="https://facebook.com"
            twitter="https://twitter.com"
            linkedin="https://linkedin"
          />
          <TeamMember
            name="Julie Smith"
            description="Design, Belgium"
            phone="+48123456789"
            email="julie@gmail.com"
            image="team-member-2"
            twitter="https://twitter.com"
            linkedin="https://linkedin"
          />
          <TeamMember
            name="Nattasha Julie"
            description="Design, Australia"
            phone="+48123456789"
            email="nattasha@gmail.com"
            image="team-member-3"
            facebook="https://facebook.com"
            instagram="https://instagram.com"
            linkedin="https://linkedin"
          />
          <TeamMember
            name="Scarlett White"
            description="Design, Canada"
            phone="+48123456789"
            email="scarlett@gmail.com"
            image="team-member-4"
            facebook="https://facebook.com"
            instagram="https://instagram.com"
            twitter="https://twitter.com"
            linkedin="https://linkedin"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
