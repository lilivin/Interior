import styles from "./app.module.scss";
import Button, { ButtonSize, ButtonStyles } from "./components/button";
import Footer from "./components/footer";
import Header, { HeaderType } from "./components/header";

function App() {
  function handleFunction() {
    console.log("test");
  }

  return (
    <div className={styles.app}>
      <Header type={HeaderType.Header01}>Header</Header>
      <Header type={HeaderType.Header02}>Header</Header>
      <Header type={HeaderType.Header03}>Header</Header>
      <Header type={HeaderType.Header04}>Header</Header>
      <Header type={HeaderType.Header05}>Header</Header>
      <Header type={HeaderType.Header06}>Header</Header>

      <Button
        size={ButtonSize.Default}
        style={ButtonStyles.Primary}
        href="/login"
      >
        Button
      </Button>
      <Button
        size={ButtonSize.Large}
        style={ButtonStyles.Secendary}
        onClick={handleFunction}
      >
        Button
      </Button>

      <Footer />
    </div>
  );
}

export default App;
