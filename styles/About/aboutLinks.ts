import styled from "styled-components";

export const LinksMargins = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;
  justify-content: space-around;

  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 1rem;
  }
`;

export const LinksBox = styled.div`
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  border-radius: 2rem;
  width: 70%;
  padding: 1rem;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const LinksButton = styled.button`
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  padding: 1rem 2rem;
  width: 12rem;
  cursor: pointer;
  font-weight: ${props => // @ts-ignore
          props.currentLink === props.displayAt ? "bold" : "normal"};
  filter: ${props => props.theme.type === "dark" ? "brightness(90%)" : "brightness(100%)"};

  :focus-visible {
    outline: royalblue solid 2px;
  }
  
  :is(:focus-visible, :hover) {
    filter: ${props => props.theme.type === "dark" ? "brightness(100%)" : "brightness(90%)"};
  }

  :active {
    filter: ${props => props.theme.type === "dark" ? "brightness(110%)" : "brightness(80%)"};
  }

  @media (max-width: 640px) {
    width: 40%;
  }
`;

export const ButtonIcon = styled.span`
  margin-right: .5rem;
`;

// @ts-ignore
export const LinkProfile = styled.div`
  display: ${props => // @ts-ignore
          props.currentLink === props.displayAt ? "block" : "none"};
`;