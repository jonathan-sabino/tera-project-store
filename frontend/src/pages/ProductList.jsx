import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anuncio from "../components/Anuncio";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Anuncio />
      <Navbar />
      <Title>Colecionáveis</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Produtos: </FilterText>
          <Select>
            <Option disabled selected>
              Marca
            </Option>
            <Option>Sony</Option>
            <Option>Microsoft</Option>
            <Option>Nintendo</Option>
            <Option>EA Games</Option>
            <Option>Ubisoft</Option>
            <Option>Funko</Option>
            <Option>Logitech</Option>
            <Option>Thrustmaster</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Ordernar Produtos: </FilterText>
          <Select>
            <Option disabled selected>
              Selecione
            </Option>
            <Option>Mais recentes</Option>
            <Option>Mais procurados</Option>
            <Option>Preço Crescente</Option>
            <Option>Preço Decrescente</Option>
            <Option>Maiores desconto</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
