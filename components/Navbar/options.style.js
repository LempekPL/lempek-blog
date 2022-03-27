import styled from "styled-components";
import {FAbox} from "../useful-components.style";

export const SettingsList = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  z-index: -1;
  overflow: hidden;
`;

export const OptionIcon = styled.div``;

export const OptionName = styled.div`
  width: 7rem;

  @media (max-width: 500px) {
    width: 15rem;
  }
`;

export const SettingsButton = styled.button`
  border: none;
  background-color: ${props => props.theme.dropdown_button};
  filter: ${props => props.theme.type === "dark" ? "brightness(80%)" : "brightness(100%)"};
  cursor: pointer;
  padding: 0;
  transition: 100ms;
  width: 100%;
  height: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 500px) {
    height: 4rem;
  }
  
  &:focus-visible {
    outline-offset: -2px;
    outline: royalblue solid 2px;
  }

  &:is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "dark" ? "brightness(100%)" : "brightness(80%)"};
  }
`;

export const SettingsItemButton = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  color: ${props => props.theme.dropdown_text_button};
  background-color: ${props => props.theme.dropdown_button};
  filter: ${props => props.theme.type === "dark" ? "brightness(70%)" : "brightness(90%)"};
  cursor: pointer;
  padding: 0;
  transition: 300ms ease-in-out;
  height: ${props => props?.isOpen ? "2.5rem" : "0"};
  position: relative;

  @media (max-width: 500px) {
    height: ${props => props?.isOpen ? "4rem" : "0"};
    font-size: 2.5rem;
  }
  
  &:focus-visible {
    outline-offset: -2px;
    outline: royalblue solid 2px;
  }

  &:is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "dark" ? "brightness(90%)" : "brightness(70%)"};
  }
`;

export const FAsettings = styled(FAbox)`
    svg {
      transition: 300ms;
      transform: rotate(${props => props?.isOpen ? "0.5turn" : "0"});
    }
`;

export const OptionTextSelector = styled.span`
  color: ${props => props.theme.dropdown_text_button};
  line-height: 2.5rem;
  font-size: 1.5rem;
  padding: 0 0.5rem;

  div {
    background-color: #727272;
    display: inline-block;
    height: 2.5rem;
    width: 2.5rem;
    float: right;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
    line-height: 4rem;

    div {
      background-color: #727272;
      display: inline-block;
      height: 4rem;
      width: 4rem;
      float: right;
    }
  }
`;