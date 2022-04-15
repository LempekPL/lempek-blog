import styled from "styled-components";

//&:focus-visible {outline: gray solid 2px;} no use
//&:focus-visible {outline: red solid 2px;} blocked
//&:focus-visible {outline: royalblue solid 2px;} useful

export const TSpan = styled.span`
  color: ${props => props.theme.text};
  margin: ${props => props?.text?.margin || "unset"};
  z-index: ${props => props?.text?.zIndex || "unset"};
  grid-area: ${props => props?.text?.gridArea || "abcdef"};
  align-self: ${props => props?.text?.alignSelf || "unset"};
`;

export const Span = styled.span`
  color: ${props => props.theme.text};
`;

export const RemoveDecos = styled.span`
  text-decoration: none;
  * {
    text-decoration: none;
  }
`;

export const NoButton = styled.button`
  text-decoration: inherit;
  border: inherit;
  color: inherit;
  background-color: inherit;
  font-size: inherit;
  margin: inherit;
  display: inherit;
  text-decoration: inherit;
`;

export const Box = styled.div`
  padding: 1rem;
  transition: 300ms;
  overflow: auto;
  background-color: ${props => props?.box?.backgroundColor || props.theme.background_box};
  height: ${props => props?.box?.height || "unset"};
  width: ${props => props?.box?.width || "unset"};
  border-radius: ${props => props?.box?.borderRadius || "unset"};
  margin: ${props => props?.box?.margin || "0 auto"};
  z-index: ${props => props?.box?.zIndex || "unset"};
  display: ${props => props?.box?.display || "initial"};
  grid-template-columns: ${props => props?.box?.gridTemplateColumns || "unset"};
  grid-template-rows: ${props => props?.box?.gridTemplateRows || "unset"};
  grid-template-areas: ${props => props?.box?.gridTemplateAreas || "unset"};
  justify-items: ${props => props?.box?.justifyItems || "unset"};
  align-items: ${props => props?.box?.alignItems || "unset"};
  gap: ${props => props?.box?.gap || "unset"};

  @media (max-width: ${props => props?.boxChange?.width || "0"}) {
    width: ${props => props?.boxChange?.style?.width || props?.box?.width || "60%"};
    border-radius: ${props => props?.boxChange?.style?.borderRadius || props?.box?.borderRadius || "unset"};
    display: ${props => props?.boxChange?.style?.display || props?.box?.display || "initial"};
    flex-direction: ${props => props?.boxChange?.style?.flexDirection || props?.box?.flexDirection || "unset"};
  }
`;

export const ImageBox = styled.div`
  position: relative;
  margin: ${props => props?.box?.margin || "0 auto"};
  display: ${props => props?.box?.display || "block"};
  float: ${props => props?.box?.float || "unset"};
  height: ${props => props?.box?.height || "auto"};
  width: ${props => props?.box?.width || "auto"};
  padding: ${props => props?.box?.padding || "unset"};
  z-index: ${props => props?.box?.zIndex || "unset"};
  align-self: ${props => props?.box?.alignSelf || "unset"};
  grid-area: ${props => props?.box?.gridArea || "abcdef"};

  img {
    object-fit: ${props => props?.imageBox?.objectFit || "initial"};
    border-radius: ${props => props?.imageBox?.borderRadius || "unset"};
    z-index: ${props => props?.imageBox?.zIndex || "unset"};
  }
`;

export const FAbox = styled.div`
  height: ${props => props?.box?.height || "100%"};
  display: ${props => props?.box?.display || "block"};
  margin: ${props => props?.box?.margin || "0"};
  padding: ${props => props?.box?.padding || "0"};
  float: ${props => props?.box?.float || "inherit"};
  line-height: ${props => props?.box?.lineHeight || "inherit"};
  overflow: hidden;
  align-items: center;
  justify-content: center;
  box-sizing: unset;

  @media (max-width: ${props => props?.faRemove?.width || "0"}) {
    display: ${props => props?.faRemove?.langs?.includes(props?.lang) ? "none" : props?.box?.display || "block"};
  }

  @media (max-width: ${props => props?.faChange?.width || "0"}) {
    padding: ${props => props?.faChange?.style?.padding || props?.box?.padding || "0"};
  }

  svg {
    position: ${props => props?.boxSvg?.position || "absolute"};
    overflow: hidden;
    display: block;
    height: 100%;
    width: 100%;
  }
`;