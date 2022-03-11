import styled from "styled-components";

export const TSpan = styled.span`
  color: ${props => props.theme.text};
`;

export const Box = styled.div`
  padding: 1rem;
  background-color: ${props => props?.box?.backgroundColor || props.theme.background_box};
  width: ${props => props?.box?.width || "60%"};
  border-radius: ${props => props?.box?.borderRadius || "unset"};
  margin: 0 auto;
  overflow: auto;

  @media (max-width: ${props => props?.boxChange?.width || "99999999px"}) {
    width: ${props => props?.boxChange?.style?.width || props?.box?.width || "60%"};
    border-radius: ${props => props?.boxChange?.style?.borderRadius || props?.box?.borderRadius || "unset"};
  }
`;

export const FAbox = styled.div`
  height: ${props => props?.faBox?.height || "100%"};
  display: ${props => props?.faBox?.display || "block"};
  margin: ${props => props?.faBox?.margin || "0"};
  padding: ${props => props?.faBox?.padding || "0"};
  float: ${props => props?.faBox?.float || "inherit"};
  line-height: ${props => props?.faBox?.lineHeight || "inherit"};
  overflow: hidden;
  align-items: center;
  justify-content: center;
  box-sizing: unset;

  @media (max-width: ${props => props?.faRemove?.width || "99999999px"}) {
    display: ${props => props?.faRemove?.langs.includes(props?.lang) ? "none" : props?.faBox?.display || "block"};
  }

  @media (max-width: ${props => props?.faChange?.width || "99999999px"}) {
    padding: ${props => props?.faChange?.style?.padding || props?.faBox?.padding || "block"};
  }

  svg {
    position: ${props => props?.faBoxSvg?.position || "absolute"};
    overflow: hidden;
    display: block;
    height: 100%;
    width: 100%;
  }
`;