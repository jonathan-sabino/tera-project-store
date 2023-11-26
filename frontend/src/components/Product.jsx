import styled from "styled-components";
import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 400px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d2e8f7;
  position: relative;
  border-radius: 20px;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  max-width: 200px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <AddShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
