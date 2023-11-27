import {
  EmailOutlined,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  cursor: pointer;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#ffeced" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PlayNook.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          iure commodi laborum error officiis, beatae a dolore, vero dolorum
          dolorem itaque praesentium velit fuga laudantium maiores ea
          voluptatem, dicta dolor?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Úteis</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Playstation</ListItem>
          <ListItem>Xbox</ListItem>
          <ListItem>Nintendo</ListItem>
          <ListItem>Acessórios</ListItem>
          <ListItem>Colecionáveis</ListItem>
          <ListItem>Favoritos</ListItem>
          <ListItem>Meus Pedidos</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Avenida Paulista, 1234 -
          Technopolis
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> (11) 3912-1234
        </ContactItem>
        <ContactItem>
          <WhatsApp style={{ marginRight: "10px" }} /> (11) 91234-5678
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} /> contato@playnook.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
