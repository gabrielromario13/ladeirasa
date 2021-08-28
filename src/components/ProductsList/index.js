import React from "react";

import ButtonFunctions from "../ButtonFunctions";
import StatusCircle from "../StatusCircle";
import Card from "../Card";
import {
  Container,
  CardContent,
  TotalDataContainer,
  ProductContainer,
  CardContainer,
  ProductNameText,
  TotalDataText,
} from "./styles";

const ProductsList = ({ products, openDialog }) => {
  return (
    <Container>
      {products.map((item, index) => (
        <CardContainer key={index}>
          <Card productId={item.productId}>
            <CardContent>
              <ProductContainer>
                <StatusCircle />
                <ProductNameText>{item.name}</ProductNameText>
              </ProductContainer>
            </CardContent>
            <ButtonFunctions onClickEvent={() => openDialog(item)} />
          </Card>
        </CardContainer>
      ))}
      <TotalDataContainer>
        <TotalDataText>Total de registros: {products.length}</TotalDataText>
      </TotalDataContainer>
    </Container>
  );
};

export default ProductsList;
