import styles from "./styles.module.css";

const Article = () => {
  return (
    <article className={styles.main}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1200px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" />
      <h3>Some article</h3>
    </article>
  );
};

export default Article;
