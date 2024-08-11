import styles from "./styles.module.css";
import Article from "../Article/Article";
import { useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([
    {
      title: "Some good news",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1200px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    },
    {
      title: "Some normal news",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg",
    },
    {
      title: "Some bad news",
      imgUrl:
        "https://c02.purpledshub.com/uploads/sites/41/2021/08/mountains-7ddde89.jpg?w=1029&webp=1",
    },
  ]);

  return (
    <div className={styles.main}>
      <Article title={articles[0].title} imgUrl={articles[0].imgUrl} />
      <Article title={articles[1].title} imgUrl={articles[1].imgUrl} />
      <Article title={articles[2].title} imgUrl={articles[2].imgUrl} />
    </div>
  );
};

export default Articles;
