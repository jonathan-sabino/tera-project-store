import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anuncio from "../components/Anuncio";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, AddShoppingCartOutlined, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 60%;
  min-width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${mobile({
    height: "350px",
    width: "auto",
    display: "block",
    minWidth: "auto",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  ${mobile({ width: "100%", gap: "0px" })}
`;

const QtdContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Qtd = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 5px;
  border: 2px solid teal;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: teal;
    color: white;
    transition: all 0.5s ease;
  }
`;

const Product = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products/6568d1dcd0d9a8acdca6035d`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(product);
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Anuncio />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={`.${product.image}`} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>R$ {product.price}</Price>
          <AddContainer>
            <QtdContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Qtd>1</Qtd>
              <Add style={{ cursor: "pointer" }} />
            </QtdContainer>
            <Button>
              COMPRAR
              <AddShoppingCartOutlined />
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
