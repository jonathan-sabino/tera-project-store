import styled from "styled-components";
import Background from "../assets/images/register_background.jpg";
import { mobile } from "../responsive";
import GameOver from "../assets/images/gameover_404.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(${Background}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({ width: "75%" })}
`;

const Image = styled.img`
  width: 400px;
  ${mobile({ width: "250px" })}
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

const Desc = styled.div`
  text-align: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={GameOver} />
        <Title>ERRO 404</Title>
        <Desc>Página não encontrada</Desc>
        <Button>HOME</Button>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
