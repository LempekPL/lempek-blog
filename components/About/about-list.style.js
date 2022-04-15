import styled, {css} from "styled-components";

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: links;
  width: 100%;
  margin-top: 1.25rem;

  @media (max-width: 1000px) {
    margin-top: 3.25rem;
  }

  @media (max-width: 600px) {
    margin-top: .25rem;
  }
`;

export const Pointer = styled.div`
  display: inline-block;
  border: solid 1rem transparent;
  width: 1rem;
  transition: 300ms;
  border-bottom-color: ${props => props.theme.about_links_box_background};
  margin-left: calc((1.75rem * ${props => props?.minToLink ?? 1}) + (${props => props?.selectedLink || 0} * 3.5rem));

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const LinkBox = styled.div`
  background-color: ${props => props.theme.about_links_box_background};
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;

  @media (max-width: 500px) {
    padding: 1rem 0 0;
    border-radius: 0;
  }
`;

const selected = css`
  filter: ${props => props.theme.type === "dark" ? "brightness(80%)": "brightness(100%)"};
  :focus-visible {
    outline: gray solid 2px;
  }
`;

const notSelected = css`
  filter: ${props => props.theme.type === "dark" ? "brightness(100%)" : "brightness(80%)"}; 
  :focus-visible {
    outline: royalblue solid 2px;
  }
`;

export const BrandIcons = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  height: 2rem;
  color: ${props => props.theme.about_brand_icons};

  ${props => props?.selectedLink === props?.thisLink ? selected : notSelected};
  
  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"};
  }

  svg {
    position: relative;
    overflow: hidden;
    display: block;
    height: 100%;
    width: 100%;
  }
`;


export const Links = styled.div`
  color: ${props => props.theme.text};
  font-size: 2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  align-self: flex-start;
  grid-area: links;
  
  @media (max-width: 600px) {
    align-self: center;
    > * {
      flex: 2 0 21%;
      > * {
        margin: 0 auto;
      }
    }
  }
`;