import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anuncio from "../components/Anuncio";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import HeadsetProduct from "../assets/images/products-images/headset_xbox.jpg";
import {
  Add,
  AddShoppingCartOutlined,
  Remove,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  return (
    <Container>
      <Anuncio />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={HeadsetProduct} />
        </ImgContainer>
        <InfoContainer>
          <Title>Headset XBOX Wireless - TLL-00001</Title>
          <Desc>
            Jogue com o som alto e claro com o fone de ouvido sem fio XBOX,
            envolva-se com tecnologias de som espacial, incluindo Windows Sonic,
            Dolby Atmos e DTS Headphone: X. O auto-mute e o isolamento de voz
            reduzem o ruído de fundo e permitem uma comunicação clara. O design
            flexível e leve com uma faixa de cabeça ajustável proporciona uma
            experiência mais confortável durante sessões de jogo prolongadas,
            enquanto os botões giratórios do fone de ouvido fornecem uma maneira
            rápida e intuitiva de ajustar o volume e o equilíbrio do jogo /
            chat.
          </Desc>
          <Price>R$ 1.099,99</Price>
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
