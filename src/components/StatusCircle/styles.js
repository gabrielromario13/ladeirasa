import styled from "styled-components";

export const StatusCircleContainer = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isFilled ? props.filledColor : props.unfilledColor};
`;
