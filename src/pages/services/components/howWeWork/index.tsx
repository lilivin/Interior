import Header, { HeaderType } from "../../../../components/header";
import SingleStep from "./components/singleStep";
import styles from "./index.module.scss";

function HowWeWork() {
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>How We Work</Header>
      <p>
        It is a long established fact will be distracted.Lorem Ipsum is simply
        dummy text of the printing and typesetting industry.
      </p>
      <div className={styles.steps}>
        <SingleStep
          title="Concept & Details"
          image="service-photo-1"
          icon="service-icon-1"
          number="01"
        >
          It is a long established fact will be distracted. Lorem Ipsum is
          simply dummy from text of the and typesetting indufstry.
        </SingleStep>
        <SingleStep
          title="Concept & Details"
          image="service-photo-2"
          icon="service-icon-2"
          number="02"
          reverse={true}
        >
          It is a long established fact will be distracted. Lorem Ipsum is
          simply dummy from text of the and typesetting indufstry.
        </SingleStep>
        <SingleStep
          title="Design"
          image="service-photo-3"
          icon="service-icon-3"
          number="03"
        >
          It is a long established fact will be distracted. Lorem Ipsum is
          simply dummy from text of the and typesetting indufstry.
        </SingleStep>
        <SingleStep
          title="Perfection"
          image="service-photo-4"
          icon="service-icon-4"
          number="04"
          reverse={true}
        >
          It is a long established fact will be distracted. Lorem Ipsum is
          simply dummy from text of the and typesetting indufstry.
        </SingleStep>
      </div>
    </div>
  );
}

export default HowWeWork;
