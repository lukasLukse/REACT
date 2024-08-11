import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  const [name, setName] = useState("FEUA-15");

  return (
    <>
      {name}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default MainPage;
