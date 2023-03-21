import styles from "./index.module.scss";

function SingleCounter(props: { number: number; description: string }) {
  const { number, description } = props;
  return (
    <div className={styles.container}>
      <span className={styles.number}>{number}</span>
      <p>{description}</p>
    </div>
  );
}

export default SingleCounter;
