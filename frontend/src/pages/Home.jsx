import styled from "styled-components";
import Anuncio from "../components/Anuncio";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const TitleSection = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Anuncio />
      <Navbar />
      <Slider />
      <Categories />
      <TitleSection>PRODUTOS EM DESTAQUE</TitleSection>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
