import styled from "styled-components";
import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import ImageImportada from "../assets/images/products-images/headset_xbox.jpg";

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
  ${mobile({ minWidth: "330px", minHeight: "330px" })}

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
  ${mobile({ width: "300px", height: "300px" })}
`;

const Image = styled.img`
  max-width: 200px;
  z-index: 2;
  ${mobile({ maxWidth: "180px" })}
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
  const navigate = useNavigate();

  console.log(item);

  return (
    <Container>
      <Circle />
      <Image src={`..${item}`} />
      <Info>
        <Icon>
          <AddShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlined onClick={() => navigate("/product/:productId")} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
