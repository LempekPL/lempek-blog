import styled from "styled-components";

export const OptionButtonStyle = styled.button`
  border: none;
  background-color: ${props => props.theme.dropdown_button};
  cursor: pointer;
  filter: ${props => ["dark", "dark+"].includes(props.theme.type) ? "brightness(80%)" : "brightness(100%)"};
  height: 2.5rem;
  position: relative;
  padding: 0;
  transition: 100ms;
  width: 100%;
  z-index: 1;

  @media (max-width: 500px) {
    height: 4rem;
  }

  :focus-visible {
    font-weight: bold;
    outline-offset: -2px;
    outline: royalblue solid 2px;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => ["dark", "dark+"].includes(props.theme.type) ? "brightness(100%)" : "brightness(80%)"};
  }
`;

export const OptionTextSelector = styled.span`
  color: ${props => props.theme.dropdown_text_button};
  font-size: 1.5rem;
  line-height: 2.5rem;
  padding: 0 0.5rem;
  text-align: center;

  div {
    background-color: #727272;
    display: inline-block;
    float: right;
    height: 2.5rem;
    width: 2.5rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
    line-height: 4rem;

    div {
      background-color: #727272;
      display: inline-block;
      float: right;
      height: 4rem;
      width: 4rem;
    }
  }
`;

export const OptionFAIcon = styled.div`
  height: 100%;
  display: inline-block;
  margin: 0;
  padding: 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  box-sizing: unset;

  svg {
    transition: 300ms;
    transform: rotate(${props => // @ts-ignore
            props?.isSelfOpen ? "0.5turn" : "0"});
    position: relative;
    overflow: hidden;
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  overflow: hidden;
  z-index: -1;
`;

export const SettingsItemButton = styled.button`
  align-items: center;
  border: none;
  background-color: ${props => props.theme.dropdown_button};
  cursor: pointer;
  display: flex;
  color: ${props => props.theme.dropdown_text_button};
  filter: ${props => ["dark", "dark+"].includes(props.theme.type) ? "brightness(70%)" : "brightness(90%)"};
  font-size: 1.5rem;
  flex-direction: row;
  height: ${props => // @ts-ignore
          props?.isOpen ? "2.5rem" : "0"};
  padding: 0;
  position: relative;
  transition: 300ms ease-in-out;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 2.5rem;
    height: ${props => // @ts-ignore
            props?.isOpen ? "4rem" : "0"};
  }

  :focus-visible {
    font-weight: bold;
    outline-offset: -2px;
    outline: royalblue solid 2px;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => ["dark", "dark+"].includes(props.theme.type) ? "brightness(90%)" : "brightness(70%)"};
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