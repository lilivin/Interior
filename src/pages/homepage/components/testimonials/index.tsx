import Header, { HeaderType } from "../../../../components/header";
import SingleTestimonial from "./components/singleTestimonial";
import styles from "./index.module.scss";

function Testimonials() {
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>
        What the People Thinks About Us
      </Header>
      <div className={styles.testimonials}>
        <SingleTestimonial
          name="Nattasha Mith"
          city="Sydney, USA"
          image="user-photo-1"
        >
          Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
          has been.
        </SingleTestimonial>
        <SingleTestimonial
          name="Raymond Galario"
          city="Sydney, Australia"
          image="user-photo-2"
        >
          Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
          has scrambled it to make a type book.
        </SingleTestimonial>
        <SingleTestimonial
          name="Benny Roll"
          city="Sydney, New York"
          image="user-photo-3"
        >
          Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
          has been scrambled.
        </SingleTestimonial>
      </div>
    </div>
  );
}

export default Testimonials;
