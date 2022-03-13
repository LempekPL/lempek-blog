import styled from "styled-components";

export const NavigationBar = styled.nav`
  background: ${props => props.theme.navbar_background};
  transition: 300ms;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: var(--navbar-height);
  z-index: 999;
`;

export const NavigationHome = styled.button`
  border: none;
  transition: 300ms;
  font-size: 25px;
  background-color: #69e621;
  color: #000;
  cursor: pointer;
  height: 100%;
  padding: 0 1rem;

  &:is(:hover, :focus-visible) {
    filter: brightness(80%);
  }

  @media (max-width: 500px) {
    padding: 0 2rem;
  }

  @media (max-width: 370px) {
    padding: 0 1rem;
  }
`;

export const NavigationButtonLogin = styled.button`
  background-color: ${props => props.theme.navbar_background};
  color: royalblue;
  border: 0.1rem solid royalblue;
  padding: 0 0.5rem;
  margin: 0 1rem;
  height: calc(var(--navbar-height) * 0.75);
  font-size: ${props => props.lang === "pl" ? "1.2rem" : "1.5rem"};
  text-decoration: none;
  cursor: pointer;
  filter: ${props => props.theme.type === "light" ? "brightness(100%)" : "brightness(80%)"};

  &:is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(100%)"};
  }

  @media (max-width: 300px) {
    padding: 0;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

export const NavigationDropdown = styled.button`
  background-color: ${props => props.theme.navbar_button};
  color: ${props => props.theme.navbar_text_button};
  transition: 100ms;
  width: var(--navbar-height);
  height: var(--navbar-height);
  border: none;
  padding: 0;
  cursor: pointer;
  filter: ${props => props.isOpen
          ? props.theme.type === "dark" ? "brightness(100%)" : "brightness(80%)"
          : props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"
  };
  overflow: hidden;

  div {
    svg {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

      &:nth-child(1) {
        opacity: ${props => props.isOpen ? 1 : 0};
        transform: translateY(${props => props.isOpen ? "0" : "-100%"});
      }

      &:nth-child(2) {
        opacity: ${props => props.isOpen ? 0 : 1};
        transform: scale(0.8) translateY(${props => props.isOpen ? "100%" : "0"});
      }
    }
  }

  &:is(:hover, :focus-visible) {
    filter: ${props => props.isOpen
            ? props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"
            : props.theme.type === "dark" ? "brightness(100%)" : "brightness(80%)"
    };
  }
`;

export const DropdownMenu = styled.nav`
  color: ${props => props.theme.dropdown_text_button};
  transition: 300ms ease-in-out;
  position: absolute;
  right: 0;
  border-width: 0 1px 1px;
  border-style: solid;
  border-color: ${props => props.theme.dropdown_settings_border};
  top: var(--navbar-height);
  transform: ${props => props.isOpen ? "translateY(0)" : "translateY(-100%)"};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  z-index: 998;
  opacity: 96%;

  @media (max-width: 500px) {
    position: absolute;
    width: 100%;
    left: 0;
    border-width: 1px 0;
  }
`;

export const DropdownButton = styled.button`
  border: none;
  background-color: ${props => props.theme.dropdown_button};
  filter: ${props => props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"};
  cursor: pointer;
  height: 2.5rem;
  padding: 0 0.5rem;
  z-index: 2;
  transition: 100ms;

  @media (max-width: 500px) {
    height: 4rem;
  }

  &:is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(100%)"};
  }
`;

export const DropdownText = styled.span`
  color: ${props => props.theme.dropdown_text_button};
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const DropdownSettings = styled.div`
  border-top: 1px solid ${props => props.theme.dropdown_settings_border};
`;

export const EastereggBundev = styled.div`
  position: absolute;
  left: 2rem;
  top: -0.3rem;
  display: flex;
  align-items: flex-start;
  z-index: -1;
  transition: 300ms;
  outline: none;
  ${props => props.clicked > 50 ? "transform: translateX(100%)" : ""};

  img {
    height: calc(var(--navbar-height) + 0.5rem) !important;
    transform: rotate(25deg);
  }

  span {    
    margin-top: 0.5rem;
    font-size: 20px;
    color: ${props => props.theme.navbar_text_button}
  }

  &:focus-visible {
    transform: translateX(100%);
  }
`;