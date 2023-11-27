import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Anuncio = () => {
  return (
    <Container>
      Visite nossa loja física e ganhe um cupom de R$ 50,00 para primeira
      compra!
    </Container>
  );
};

export default Anuncio;
