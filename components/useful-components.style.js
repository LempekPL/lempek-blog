import styled from "styled-components";

export const TSpan = styled.span`
  color: ${props => props.theme.text};
`;

export const Box = styled.div`
  padding: 1rem;
  background-color: ${props => props.boxColor || props.theme.background_box};
`;

export const FAbox = styled.div`
  height: ${props => props?.faBox?.height || "100%"};
  display: ${props => props?.faBox?.display || "block"};
  margin: ${props => props?.faBox?.margin || "0"};
  padding: ${props => props?.faBox?.padding || "0"};
  align-items: center;
  justify-content: center;
  
  svg {
      position: ${props => props?.faBoxSvg?.position || "absolute"};
      display: block;
      height: 100%;
      width: 100%;
  }
`;