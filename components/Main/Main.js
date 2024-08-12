import styles from "./styles.module.css";
import Articles from "../Articles/Articles";
import Questions from "../Questions/Questions";

const Main = () => {
  return (
    <main className={styles.main}>
      <Questions />
    </main>
  );
};

export default Main;
