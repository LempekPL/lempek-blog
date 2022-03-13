import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(60rem, 100%)
    1fr;
  
  & > * {
    grid-column: 2;
  }
`;