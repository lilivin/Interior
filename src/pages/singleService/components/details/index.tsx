import Header, { HeaderType } from "../../../../components/header";
import styles from "./index.module.scss";

function Details() {
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>
        We set the trends of modern living Services.
      </Header>
      <div className={styles.content}>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page
        </p>
        <p>
          When lookings at its layouts the points spriof using that it has a
          more less normal.A wonderful serenity has taken pgossession of my
          entire soul, like thesce sweet morndsings of sphring which I enjoy
          with my forwhole heart. I am alone, and feel the charm of excgistence
          in this spot, which was created for the bliss of souls like mine.
        </p>
        <p>
          When lookings at its layouts the points spriof using that it has a
          more less normal.A wonderful serenity has taken pgossession of my
          entire soul, like thesce sweet morndsings of sphring which I enjoy
          with my forwhole heart. I am alone, and feel the charm of excgistence
          in this spot, which was created for the bliss of souls like mine.
        </p>
      </div>
    </div>
  );
}

export default Details;
