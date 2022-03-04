import styled from "styled-components";

export const NavigationBar = styled.div`
  background: ${props => props.theme.navbar_background};
  transition: 300ms;
  position: fixed;
  width: 100%;
  height: var(--navbar-height);
  margin-bottom: var(--navbar-height);
  top: 0;
  z-index: 1;
`

export const NavigationHome = styled.button`
  border: none;
  transition: 300ms;
  font-size: 25px;
  background-color: #69e621;
  color: #000;
  height: 100%;
  text-align: center;
  text-decoration: none;
  float: left;
  cursor: pointer;
  width: 132px;

  &:is(:hover, :focus) {
    filter: brightness(80%);
  }

  @media (max-width: 700px) {
    width: 50%;
  }

  @media (max-width: 370px) {
    width: 25%;
    font-size: 12px;
  }
`;

export const NavigationButtonLogin = styled.button`
  background-color: ${props => props.theme.navbar_background};
  color: royalblue;
  border: 0.1rem solid royalblue;
  padding: 0.15rem 0.5rem;
  margin: 0 1rem;
  transition: 300ms;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  filter: ${props => props.theme.type === "light" ? "brightness(100%)" : "brightness(80%)"};

  &:is(:hover, :focus) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(100%)"};
  }

  span {
    padding-left: 0.25rem;
  }

  //@media (max-width: 700px) {
  //  width: 20%;
  //  padding: 0;
  //}
`;

export const NavigationLogin = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
`;

export const RightBar = styled.div`
  float: right;
  height: var(--navbar-height);
`;

export const NavigationDropdown = styled.button`
  background-color: ${props => props.theme.navbar_button};
  color: ${props => props.theme.navbar_text_button};
  transition: 300ms;
  width: var(--navbar-height);
  height: var(--navbar-height);
  border: none;
  float: right;
  padding: 0;
  cursor: pointer;
  filter: ${props => props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"};

  div {
    svg {
      transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }

    svg:nth-child(1) {
      opacity: ${props => props.isOpen ? 1 : 0};
      transform: scale(${props => props.isOpen ? 1 : 0});
    }

    svg:nth-child(2) {
      opacity: ${props => props.isOpen ? 0 : 1};
      transform: scale(${props => props.isOpen ? 0 : 0.8});
    }
  }

  &:is(:hover) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(100%)"};
  }
`;

export const DropdownMenu = styled.div`
  background-color: ${props => props.theme.dropdown_menu};
  color: ${props => props.theme.dropdown_text_button};
  transition: 300ms;
  height: 2rem;
  width: 10rem;
  text-align: center;
  right: 0;
  top: var(--navbar-height);
  position: absolute;
`;

export const DropdownItem = styled.button`
  border: none;
  height: 2.5rem;
  width: 10rem;
  background-color: ${props => props.theme.dropdown_button};
  filter: ${props => props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"};
  cursor: pointer;

  &:is(:hover, :focus) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(100%)"};
  }
`;

export const DropdownText = styled.span`
  color: ${props => props.theme.dropdown_text_button};
  font-size: 1.5rem;
`;

export const DropdownSettings = styled.div`
  border-top: 1px solid ${props => props.theme.dropdown_settings_border};
`;

export const SettingsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  list-style-position: inside;
`;