import React from "react";

import { Container } from "./styles";

const Card = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

export default Card;
