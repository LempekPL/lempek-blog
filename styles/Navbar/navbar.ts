import styled from "styled-components";

export const Navbar = styled.nav`
  background: var(--navbar-background-color);
  transition: 300ms;
  position: fixed;
  display: flex;
  width: 100%;
  height: var(--navbar-height);
  z-index: 999;
`;

export const NavHome = styled.button`
  border: none;
  transition: 300ms;
  font-size: 1.5rem;
  background-color: #69e621;
  color: #000;
  cursor: pointer;
  padding: 0 1rem;
  height: 100%;

  &:is(:hover, :focus-visible) {
    filter: brightness(80%);
  }

  &:focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }
`;

export const BunDev = styled.div<{$clicked: number}>`
  position: absolute;
  left: 2rem;
  top: -0.3rem;
  display: flex;
  z-index: -1;
  transition: 300ms;
  outline: none;
  ${props => props.$clicked > 50 ? "transform: translateX(100%)" : ""};

  img {
    height: calc(var(--navbar-height) + 0.5rem) !important;
    width: calc(var(--navbar-height) + 0.5rem) !important;
    transform: rotate(25deg);
  }

  span {
    margin-top: 0.5rem;
    font-size: 20px;
    color: var(--navbar-text-color);
  }

  :focus-visible {
    transform: translateX(100%);
  }
`;


// TODO: make logging in
export const UserIcon = styled.div`
  height: ${props => "pl" === props.lang ? "1rem" : "1.25rem"};
  display: inline-block;
  padding: 0 0.25rem 0 0;

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export const NavLogin = styled.button`
  filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(80%)" : "brightness(100%)"};
  background-color: var(--navbar-background-color);
  color: lime;
  border: 0.1rem solid lime;
  padding: 0 0.5rem;
  margin: 0 1rem;
  height: calc(var(--navbar-height) * 0.75);
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  
  &:focus-visible {
    outline: royalblue solid 2px;
  }

  &:is(:hover, :focus-visible) {
    filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(100%)" : "brightness(80%)"};
  }

  @media (max-width: 400px) {
    display: none;
  }
  //@media (max-width: 300px) {
  //  padding: 0;
  //}
`;
// TODO: ^

export const NavDrop = styled.button<{$open: boolean, $closer: Function}>`
  filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(80%)" : "brightness(100%)"};
  background-color: var(--navbar-menu-button-background-color);
  color: var(--navbar-menu-button-icon-color);
  width: var(--navbar-height);
  height: var(--navbar-height);
  border: none;
  transition: 200ms;
  padding: 0;
  cursor: pointer;
  overflow: hidden;

  &:focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }

  div {
    svg {
      transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
      &:nth-child(1) {
        opacity: ${props => props.$open ? 1 : 0};
        transform: translateY(${props => props.$open ? "0" : "-100%"});
      }
      &:nth-child(2) {
        opacity: ${props => props.$open ? 0 : 1};
        transform: scale(0.8) translateY(${props => props.$open ? "100%" : "0"});
      }
    }
  }

  &:is(:hover, :focus-visible) {
    filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(100%)" : "brightness(80%)"};
  }

  :active {
    filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(110%)" : "brightness(70%)"};
  }
`;

export const NavDropIcon = styled.div`
  height: 100%;

  svg {
    position: absolute;
    overflow: hidden;
    display: block;
    height: 100%;
    width: 100%;
  }
`;
