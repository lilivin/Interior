import SinglePrice from "./components/singlePrice";
import styles from "./index.module.scss";

function Price() {
  return (
    <div className={styles.container}>
      <SinglePrice />
      <SinglePrice main={true}/>
      <SinglePrice />
    </div>
  );
}

export default Price;
