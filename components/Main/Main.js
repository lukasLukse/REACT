import styles from "./styles.module.css";
import Articles from "../Articles/Articles";
import Questions from "../Questions/Questions";
import DressWrapper from "../DressWrapper/DressWrapper";

const Main = ({ dress }) => {
  return (
    <main className={styles.main}>
      <DressWrapper dress={dress} />
    </main>
  );
};

export default Main;
