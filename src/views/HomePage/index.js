import React, { useState, useEffect, useCallback } from "react";
import { GetAllProducts } from "../../api/controllers/ProductController";
import { Container } from "./styles";
import ProductsList from "../../components/ProductsList";
import Menu from "../../components/Menu";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const requestApi = useCallback(async () => {
    return await GetAllProducts();
  }, []);

  const getAllProducts = useCallback(async () => {
    const Products = await requestApi();

    setProducts(Products);
  }, [requestApi]);

  const initialConfigs = () => {
    getAllProducts();
  }

  useEffect(() => {
    initialConfigs();
  }, []);

  return (
    <Container>
      <ProductsList products={products} />
      <Menu />
    </Container>
  );
};

export default ProductList;
