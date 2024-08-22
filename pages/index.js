import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const MainPage = () => {
  const [dress, setDress] = useState([]);

  const fetchDress = async () => {
    const fetchedDress = await axios.get(
      "https://66705ba60900b5f8724a5a17.mockapi.io/cars"
    );

    setDress(fetchedDress.data);
    console.log(fetchedDress);
  };

  useEffect(() => {
    fetchDress();
  }, []);

  return (
    <>
      <Header />
      <Main dress={dress} />
      <Footer />
    </>
  );
};
export default MainPage;
