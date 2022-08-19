import styled from "styled-components";

export const Drop = styled.nav`
  background-color: ${props => props.theme.dropdown_button_background};
  color: ${props => props.theme.dropdown_text_button};
  border-color: ${props => props.theme.dropdown_settings_border};
  transition: 300ms ease-in-out;
  position: fixed;
  right: 0;
  width: 15rem;
  border-width: 0 1px 1px;
  border-style: solid;
  top: var(--navbar-height);
  transform: ${props => // @ts-ignore
          props.isOpen ? "translateY(0)" : "translateY(-100%)"};
  display: flex;
  flex-direction: column;
  z-index: 998;
  opacity: 96%;

  @media (max-width: 500px) {
    width: 100%;
    left: 0; 
    border-width: 1px 0;
  }
`;

export const DropLogin = styled.button`
  border: none;
  background-color: ${props => props.theme.dropdown_button};
  filter: ${props => props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"};
  cursor: pointer;
  height: 2.5rem;
  padding: 0 0.5rem;
  z-index: 2;
  transition: 100ms;
  outline-offset: -2px;

  @media (max-width: 500px) {
    height: 4rem;
  }

  :focus-visible {
    outline: royalblue solid 2px;
    font-weight: bold;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(100%)"};
  }
  
  @media (min-width: 401px) {
    display: none;
  }
`;

export const DropButton = styled.button`
  border: none;
  background-color: ${props => props.theme.dropdown_button};
  filter: ${props => props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"};
  cursor: pointer;
  height: 2.5rem;
  padding: 0 0.5rem;
  z-index: 2;
  transition: 100ms;
  outline-offset: -2px;

  @media (max-width: 500px) {
    height: 4rem;
  }

  :focus-visible {
    outline: royalblue solid 2px;
    font-weight: bold;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(100%)"};
  }
`;

export const DropText = styled.span`
  color: ${props => props.theme.dropdown_text_button};
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const DropSettings = styled.div`
  border-top: 1px solid ${props => props.theme.dropdown_settings_border};
`;