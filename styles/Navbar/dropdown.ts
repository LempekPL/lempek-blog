import styled from "styled-components";

export const Dropdown = styled.nav<{ $open: boolean }>`
  transform: ${props => props.$open ? "translateY(0)" : "translateY(-100%)"};
  color: var(--navbar-dropdown-text-color);
  border-color: var(--navbar-dropdown-border-color);
  transition: 300ms ease-in-out;
  position: fixed;
  right: 0;
  width: 15rem;
  border-width: 0 0 1px 1px;
  border-style: solid;
  top: var(--navbar-height);
  display: flex;
  flex-direction: column;
  z-index: 998;
  opacity: 96%;

  @media (max-width: 500px) {
    overflow-y: scroll;
    width: 100%;
    max-height: calc(100vh - var(--navbar-height));
    border-width: 1px 0;
  }
`;

export const DropButton = styled.button`
  filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(80%)" : "brightness(100%)"};
  background-color: var(--navbar-dropdown-background-color);
  border: none;
  cursor: pointer;
  height: 2.5rem;
  padding: 0 0.5rem;
  z-index: 997;
  transition: 200ms;
  outline-offset: -2px;
  width: 100%;

  @media (max-width: 500px) {
    min-height: 4rem;
  }

  :focus-visible {
    outline: royalblue solid 2px;
    font-weight: bold;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(100%)" : "brightness(80%)"};
  }
`;

export const DropLogin = styled(DropButton)`
  @media (min-width: 401px) {
    display: none;
  }
`;

export const DropText = styled.span`
  color: var(--navbar-dropdown-text-color);
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const DropSettings = styled.div`
  border-top: 1px solid var(--navbar-dropdown-border-color);
`;