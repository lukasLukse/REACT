import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  const [isDisplayLogo, setDisplayLogo] = useState(false);

  const toggleDisplayLogo = () => {
    setDisplayLogo((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDisplayLogo}>
        {isDisplayLogo ? "Hide Logo" : "Show Logo"}
      </button>
      <Header isDisplayLogo={isDisplayLogo} />
      <Main />
      <Footer />
    </>
  );
};

export default MainPage;
