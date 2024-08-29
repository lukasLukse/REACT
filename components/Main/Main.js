import styles from "./styles.module.css";
import CharacterWrapper from "../CharacterWrapper/CharacterWrapper";

const Main = ({ characters, setCharacters }) => {
  return (
    <main className={styles.main}>
      <CharacterWrapper characters={characters} setCharacters={setCharacters} />
    </main>
  );
};

export default Main;
