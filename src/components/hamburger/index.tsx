import styles from "./index.module.scss";

function Hamburger(props: {setIsOpen: (arg: boolean) => void, isOpen: boolean}) {
  const {setIsOpen, isOpen} = props;
  return (
    <>
      <div className={`${styles.hamburger} ${isOpen && styles.open}`} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      {/* <ul className={`${styles.menu} ${isOpen && styles.open}`}>
        <li>Test</li>
      </ul> */}
    </>
  );
}

export default Hamburger;
