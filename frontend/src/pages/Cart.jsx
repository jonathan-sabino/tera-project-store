import styled from "styled-components";
import Anuncio from "../components/Anuncio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadsetProduct from "../assets/images/products-images/headset_xbox.jpg";
import FunkoDexterProduct from "../assets/images/products-images/funko_dexter.jpg";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({ padding: "10px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductBrand = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductQtdContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductQtd = styled.div`
  font-size: 24px;
  margin: 5px;
  width: 30px;
  height: 30px;
  border-radius: 25px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eeeeee;
  border: none;
  height: 2px;
  margin: 20px 0px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Anuncio />
      <Navbar />
      <Wrapper>
        <Title>Seu Carrinho</Title>
        <Top>
          <TopButton onClick={() => navigate("/products")}>
            CONTINUAR COMPRANDO
          </TopButton>
          <TopTexts>
            <TopText>Itens no Carrinho(2)</TopText>
            <TopText>Favoritos</TopText>
          </TopTexts>
          <TopButton type="filled">SEGUIR PARA O PAGAMENTO</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={HeadsetProduct} />
                <Details>
                  <ProductName>
                    <b>Produto:</b> Headset XBOX Wireless - TLL-00001
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 092131-021-1
                  </ProductId>
                  <ProductBrand>
                    <b>Marca:</b> Microsoft
                  </ProductBrand>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQtdContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <ProductQtd>1</ProductQtd>
                  <Remove style={{ cursor: "pointer" }} />
                </ProductQtdContainer>
                <ProductPrice>R$ 1.099,99</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={FunkoDexterProduct} />
                <Details>
                  <ProductName>
                    <b>Produto:</b> Funko Pop 1067 Dexter&apos;s Lab
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 57796-3
                  </ProductId>
                  <ProductBrand>
                    <b>Marca:</b> Funko
                  </ProductBrand>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQtdContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <ProductQtd>3</ProductQtd>
                  <Remove style={{ cursor: "pointer" }} />
                </ProductQtdContainer>
                <ProductPrice>R$ 404,97</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>RESUMO DO PEDIDO</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>R$ 1.504,96</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frete</SummaryItemText>
              <SummaryItemPrice>R$ 36,00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Desconto</SummaryItemText>
              <SummaryItemPrice>R$ -100,00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>R$ 1.440,96</SummaryItemPrice>
            </SummaryItem>
            <Button>PAGAR</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
