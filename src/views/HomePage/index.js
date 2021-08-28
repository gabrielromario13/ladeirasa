import React, { useState, useEffect, useCallback } from "react";
import { GetAllProducts } from "../../api/controllers/ProductController";
import { Button } from "@material-ui/core";
import { Container, ButtonContainer } from "./styles";
import CenteredCircularProgress from "../../components/CenteredCircularProgress";
import ProductsList from "../../components/ProductsList";
import ErrorPage from "../Error/GenericError";

const ProductList = () => {
  const [products, setProducts] = useState({
    productId: 0,
    name: null,
    stockCount: 0,
    description: null,
    insertDate: null,
  });
  const [error, setError] = useState(false);
  const [loadingList, setLoadingList] = useState(false);

  const requestApi = useCallback(async () => {
    return await GetAllProducts();
  }, []);

  const getAllProducts = useCallback(async () => {
    try {
      setLoadingList(true);

      const Products = await requestApi();

      setProducts([Products]);
    } catch {
      setError(true);
    } finally {
      setLoadingList(false);
    }
  }, [requestApi]);

  useEffect(() => {
    getAllProducts(1);
  }, [getAllProducts]);

  return (
    <Container>
      {error && (
        <ErrorPage message="Não foi possível carregar a lista de produtos. Contate o suporte." />
      )}
      {!error && !loadingList && products.length === 0 && (
        <ErrorPage message="Nenhum registro encontrado." />
      )}
      {products.length > 0 && (
        <>
          <ProductsList products={products[0].data} />
        </>
      )}
      {!error && loadingList && products.length === 0 && (
        <CenteredCircularProgress />
      )}

      <ButtonContainer>
        <Button
          text="Carregar mais"
          handleClick={() => getAllProducts()}
          style={{ width: "200px" }}
        />
      </ButtonContainer>
    </Container>
  );
};

export default ProductList;
