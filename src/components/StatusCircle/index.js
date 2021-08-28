import React from "react";

import { colors } from "../../styles/themes";
import { StatusCircleContainer } from "./styles";

const StatusCircle = ({
  isFilled,
  filledColor = colors.secondaryGreen,
  unfilledColor = colors.secondaryGray,
}) => {
  return (
    <StatusCircleContainer
      isFilled={isFilled}
      filledColor={filledColor}
      unfilledColor={unfilledColor}
    />
  );
};

export default StatusCircle;
