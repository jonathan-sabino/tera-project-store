import styled from "styled-components";
import Background from "../assets/images/register_background.jpg";

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
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px 0px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })``;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CRIAR CONTA</Title>
        <Form>
          <Input placeholder="Nome completo" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmar senha" />
          <Input placeholder="Endereço" />
          <Agreement>
            <Checkbox />
            Quero receber ofertas e novidades por e-mail!
          </Agreement>
          <Agreement>
            <Checkbox />
            Li e estou de acordo com as{" "}
            <b style={{ cursor: "pointer" }}>
              políticas da empresa e políticas de privacidade.*
            </b>
          </Agreement>
          <Button>CRIAR</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
