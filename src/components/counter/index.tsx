import SingleCounter from "./components/singleCounter";
import styles from "./index.module.scss";

function Counter() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SingleCounter number={12} description="Years Of Experiance" />
        <SingleCounter number={85} description="Success Project" />
        <SingleCounter number={15} description="Active Project" />
        <SingleCounter number={95} description="Happy Customers" />
      </div>
    </div>
  );
}

export default Counter;
