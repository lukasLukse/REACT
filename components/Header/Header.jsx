import styles from "./styles.module.css";
import burgerBtn from "../../assets/burger-btn.svg";
import { useState } from "react";

const navbar = (
  <nav>
    <ul>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
  </nav>
);

const Header = () => {
  const [isShowOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <header className={styles.main}>
        <div>ŠPOKS</div>

        {navbar}

        <button
          onClick={() => {
            setShowOverlay(!isShowOverlay);
          }}
        >
          <img src={burgerBtn.src} alt="menu button"></img>
        </button>
      </header>
      <div
        className={`${styles.overlay} ${isShowOverlay && styles.showOverlay}`}
      >
        {navbar}
      </div>
    </>
  );
};

export default Header;
