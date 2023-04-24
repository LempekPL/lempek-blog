import styled from "styled-components";

export const RadioButtonOpener = styled.button`
  filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(80%)" : "brightness(100%)"};
  background-color: var(--navbar-dropdown-background-color);
  border: none;
  cursor: pointer;
  height: 2.5rem;
  transition: 200ms;
  width: 100%;
  z-index: 996;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  
  @media (max-width: 500px) {
    height: 4rem;
    font-size: 2rem;
    line-height: 4rem;
  }

  :focus-visible {
    font-weight: bold;
    outline-offset: -2px;
    outline: royalblue solid 2px;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(100%)" : "brightness(80%)"};
  }
`;

export const RadioButtonOpenerText = styled.div<{$selfOpen: boolean}>`
  color: var(--navbar-dropdown-text-color);
  padding: 0;

  span {
    background-color: var(--navbar-dropdown-settings-background-color);
    float: right;
    height: 2.5rem;
    width: 2.5rem;
    overflow: hidden;
    
    svg {
      transition: 300ms;
      position: relative;
      overflow: hidden;
      transform: rotate(${props => props.$selfOpen ? "0.5turn" : "0"});
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 500px) {
    span {
      height: 4rem;
      width: 4rem;
    }
  }
`;

export const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: -1;
`;

export const SettingsItemButton = styled.button<{$open: boolean}>`
  filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(70%)" : "brightness(90%)"};
  height: ${props => props.$open ? "2.5rem" : "0"};
  background-color: var(--navbar-dropdown-settings-background-color);
  color: var(--navbar-dropdown-settings-text-color);
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  transition: 300ms ease-in-out;

  @media (max-width: 500px) {
    height: ${props => props.$open ? "4rem" : "0"};
    font-size: 2.5rem;
  }

  :focus-visible {
    font-weight: bold;
    outline-offset: -2px;
    outline: royalblue solid 2px;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => ["dark", "black"].includes(props.theme.type) ? "brightness(90%)" : "brightness(70%)"};
  }
`;

export const SettingIcon = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const SettingName = styled.div`
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;