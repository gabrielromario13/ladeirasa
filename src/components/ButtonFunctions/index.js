import React from "react";

import { Container, IconContainer, IconContent } from "./styles";

const ButtonFunctions = ({ onClickEvent }) => {
  return (
    <Container data-testid="button-functions" onClick={onClickEvent}>
      <IconContainer>
        <IconContent />
      </IconContainer>
    </Container>
  );
};

export default ButtonFunctions;
