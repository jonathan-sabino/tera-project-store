import styled from "styled-components";
import Anuncio from "../components/Anuncio";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Anuncio />
      <Navbar />
      <Slider />
      <Categories />
      <Title>Produtos em Destaque</Title>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
