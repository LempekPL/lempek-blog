import styled from "styled-components";

export const NavBar = styled.nav`
  background: ${props => props.theme.navbar_background};
  transition: 300ms;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: var(--navbar-height);
  z-index: 999;
`;

export const NavHome = styled.button`
  border: none;
  transition: 300ms;
  font-size: 25px;
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

  //@media (max-width: 500px) {
  //  padding: 0 2rem;
  //}
  //
  //@media (max-width: 370px) {
  //  padding: 0 1rem;
  //}
`;


export const BunDev = styled.div`
  position: absolute;
  left: 2rem;
  top: -0.3rem;
  display: flex;
  align-items: flex-start;
  z-index: -1;
  transition: 300ms;
  outline: none;
  ${props => // @ts-ignore clicked is defined
          props.clicked > 50 ? "transform: translateX(100%)" : ""};

  img {
    height: calc(var(--navbar-height) + 0.5rem) !important;
    width: calc(var(--navbar-height) + 0.5rem) !important;
    transform: rotate(25deg);
  }

  span {
    margin-top: 0.5rem;
    font-size: 20px;
    color: ${props => props.theme.navbar_text_button}
  }

  :focus-visible {
    transform: translateX(100%);
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.div`
  height: ${props => "pl" === props?.lang ? "1rem" : "1.25rem"};
  display: inline-block;
  padding: 0 0.25rem 0 0;

  // @media (max-width: 500px) {
  //   display: ${props => "pl" === props?.lang ? "none" : "block"}
  // }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export const NavLogin = styled.button`
  background-color: ${props => props.theme.navbar_background};
  color: lime;
  border: 0.1rem solid lime;
  padding: 0 0.5rem;
  margin: 0 1rem;
  height: calc(var(--navbar-height) * 0.75);
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  filter: ${props => props.theme.type === "light" ? "brightness(100%)" : "brightness(80%)"};

  &:focus-visible {
    outline: royalblue solid 2px;
  }

  &:is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(100%)"};
  }

  @media (max-width: 400px) {
    display: none;
  }
  //@media (max-width: 300px) {
  //  padding: 0;
  //}
`;

export const NavDrop = styled.button`
  background-color: ${props => props.theme.navbar_button};
  color: ${props => props.theme.navbar_text_button};
  transition: 100ms;
  width: var(--navbar-height);
  height: var(--navbar-height);
  border: none;
  padding: 0;
  cursor: pointer;
  filter: ${props => props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"};
  overflow: hidden;

  &:focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }

  div {
    svg {
      transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;

      &:nth-child(1) {

        opacity: ${props => // @ts-ignore
                props.isOpen ? 1 : 0};
        transform: translateY(${props => // @ts-ignore
                props.isOpen ? "0" : "-100%"});
      }

      &:nth-child(2) {
        opacity: ${props => // @ts-ignore
                props.isOpen ? 0 : 1};
        transform: scale(0.8) translateY(${props => // @ts-ignore
                props.isOpen ? "100%" : "0"});
      }
    }
  }

  &:is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "dark" ? "brightness(100%)" : "brightness(80%)"};
  }

  :active {
    filter: ${props => props.theme.type === "dark" ? "brightness(110%)" : "brightness(70%)"};
  }
`;

export const NavDropIcon = styled.div`
  height: 100%;
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  box-sizing: unset;

  svg {
    position: absolute;
    overflow: hidden;
    display: block;
    height: 100%;
    width: 100%;
  }
`;
