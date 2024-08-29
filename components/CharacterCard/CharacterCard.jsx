import styles from "./styles.module.css";

const CharacterCard = ({ id, image, name, species, removeCharacter }) => {
  return (
    <div
      onClick={() => {
        removeCharacter(id);
      }}
      className={styles.main}
    >
      {image ? (
        <img src={image} alt="photo" />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          alt="no avatar"
        />
      )}
      <h2>{name}</h2>
      <h3>{species}</h3>
    </div>
  );
};

export default CharacterCard;
