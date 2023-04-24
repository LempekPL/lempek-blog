import styled from "styled-components";
import {Property} from "csstype";

export const LempekAbout = styled.div`
  --self-margin: 2rem;
  margin-top: calc(var(--self-margin) + var(--navbar-height));
  margin-left: var(--self-margin);
  margin-right: var(--self-margin);
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: calc(var(--self-margin) + var(--navbar-height)) auto auto;
    padding: 0;
    width: 100%;
  }
`;

export const LempekImage = styled.div`
  position: relative;
  margin: 0 1rem;
  img {
    border-radius: 100%;
    z-index: 2;
  }

  :after {
    border-radius: 100%;
    content: "";
    position: absolute;
    top: -1px;
    bottom: 3px;
    left: -1px;
    right: -1px;
    box-shadow: inset 0 0 .5rem 1rem var(--global-box-background-color);
    z-index: 1;
  }
`;

export const LempekNames = styled.div`
  align-self: center;
  position: relative;
  color: var(--primary-text-color);
`;

export const Name = styled.div`
  background-color: var(--primary-background-color);
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: .5rem 1.5rem;
  border-radius: 2rem 2rem 2rem 0;
  width: fit-content;

  @media (max-width: 999px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const Nick = styled.div`
  background-color: var(--primary-background-color);
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  padding: .5rem 2rem;
  border-radius: 0 0 2rem 2rem;
  width: fit-content;
  position: relative;

  @media (max-width: 999px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  ::after {
    content: "";
    position: absolute;
    background-color: var(--global-box-background-color);
    right: -2rem;
    top: 0;
    height: 4rem;
    width: 2rem;
    border-top-left-radius: 2rem;
    box-shadow: 0 -2rem 0 0 var(--primary-background-color);
    z-index: -1;
  }
`;

export const LempekInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 2rem;
`;

export const LempekDescBox = styled.div`
  color: var(--primary-text-color);
`;

export const LempekDesc = styled.p`
  background-color: var(--primary-background-color);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 .25rem .5rem rgba(0,0,0,50%);
`;

export const LinksList = styled.div`
  background-color: var(--primary-background-color);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 .25rem .5rem rgba(0,0,0,50%);
`;

export const LinksLink = styled.a<{$companyColor: Property.Color}>`
  // background-color: ${props => props.theme.about_brand_buttons};
  box-shadow: 0 0 0 ${props => props.$companyColor};
  transition: 300ms;
  border-radius: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  font-size: 1.5rem;
  height: 4rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  color: #fff;

  :focus-visible {
    outline: royalblue solid 2px;
  }
  
  :hover {
    box-shadow: 0 0 1rem ${props => props.$companyColor};
  }

  :is(:focus-visible, :hover)::after {
    border: 2px solid ${props => props.$companyColor};
    background-color: ${props => props.theme.type == "dark" ? "#fff1" : "0001"};
  }

  :is(:focus-visible, :hover) span {
    color: ${props => props.theme.type == "dark" ? "#ccc" : props.$companyColor};
  }

  ::after {
    border: 2rem solid ${props => props.$companyColor};
    background-color: ${props => props.$companyColor};
    border-radius: 300rem;
    transition: .25s;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const LinkText = styled.span`
  position: relative;
  z-index: 1;
`;

export const ButtonIcon = styled.span`
  margin-right: .5rem;
  position: relative;
  z-index: 1;
`;
