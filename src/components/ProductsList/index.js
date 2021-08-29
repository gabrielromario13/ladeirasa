import React from "react";

import Card from "../Card";
import {
  Container,
  CardContent,
  ProductContainer,
  CardContainer,
  ProductNameText,
} from "./styles";

const ProductsList = ({ products, openDialog }) => {
  return (
    <Container>
      {products.map((item, index) => (
        <CardContainer key={index}>
          <Card>
            <CardContent>
              <ProductContainer>
                <ProductNameText>{item.name}</ProductNameText>
              </ProductContainer>
            </CardContent>
          </Card>
        </CardContainer>
      ))}
    </Container>
  );
};

export default ProductsList;
