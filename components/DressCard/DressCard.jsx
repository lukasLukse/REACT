import styles from "./styles.module.css";

const DressCard = ({ imgUrl, title, price }) => {
  return (
    <div
      onClick={() => {
        console.log(title);
      }}
      className={styles.main}
    >
      <img src={imgUrl} alt="cars photo" />
      <h2>{title}</h2>
      <h3>{price}$</h3>
    </div>
  );
};

export default DressCard;
