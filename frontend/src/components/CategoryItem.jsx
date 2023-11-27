import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: auto;
  position: relative;

  &:hover {
    opacity: 0.5;
    transition: all 0.5s ease;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  ${mobile({ height: "30vh" })}
`;

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={item.img} onClick={() => navigate("/products")} />
    </Container>
  );
};

export default CategoryItem;
