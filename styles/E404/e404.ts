import styled from "styled-components";

export const E404Margins = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns:
    1fr
    min(40rem, 100%)
    1fr;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr min(60rem, 100%) 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 0 100% 0;
  }
`;

export const E404Box = styled.div`
  height: 100%;
  grid-column: 2;
  align-items: center;
  background-color: ${props => props.theme.background};
  z-index: 1;
`;

export const E404TextBox = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.background_box};
  color: ${props => props.theme.text};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    font-size: 6rem;
    text-align: center;
  }
`;