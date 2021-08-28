import React from "react";

import ErrorIcon from "@material-ui/icons/Error";
import Container from "./styles.js";

const GenericError = ({ message }) => {
  return (
    <Container>
      <ErrorIcon />
      <h2>{message}</h2>
    </Container>
  );
};

export default GenericError;
