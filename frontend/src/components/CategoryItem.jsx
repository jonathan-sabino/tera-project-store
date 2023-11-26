import styled from "styled-components";

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
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
    </Container>
  );
};

export default CategoryItem;
