import styled from "styled-components";

export const AboutMargins = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns:
    1fr
    min(40rem, 100%)
    1fr;

  @media (min-width: 1000px) {
    grid-template-columns:
            1fr
            min(60rem, 100%)
            1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns:
            0
            100%
            0;
  }
`;

export const AboutBox = styled.div`
  height: 100%;
  grid-column: 2;
  align-items: center;
  background-color: #505050; // TODO: theme system
`;

export const LempekAbout = styled.div`
  --self-margin: 2rem;
  margin-top: calc(var(--self-margin) + var(--navbar-height));
  margin-left: var(--self-margin);
  margin-right: var(--self-margin);
  align-items: center;
  display: grid;
  grid-template-columns: 14rem 1fr;
  grid-template-areas: "pic name" "pic meirl" "links links";
  gap: 2rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: calc(var(--self-margin) + var(--navbar-height)) auto auto;
    padding: 0;
    width: 100%;
  }
`;

export const LempekImage = styled.div`
  grid-area: pic;
  height: 14rem;
  position: relative;
  width: 14rem;

  img {
    border-radius: 100%;
    object-fit: contain;
    z-index: 2;
  }
`;

export const Name = styled.div`
  align-self: flex-end;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  grid-area: name;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 5rem;
  width: fit-content;

  @media (max-width: 999px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (max-width: 600px) {
    align-self: center;
  }

  @media (max-width: 350px) {
    font-size: 12vw;
    line-height: 16vw;
    border-radius: 0;
    padding: 0;
  }
`;

export const LempekDesc = styled.span`
  color: ${props => props.theme.text};
  grid-area: meirl;
  margin: 0 1rem;
  z-index: 1;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.background};
`;

export const DescPointer = styled.div`
  grid-area: meirl;
  position: relative;
  border: solid .75rem transparent;
  margin-left: -.40rem;
  width: 1rem;
  transition: 300ms;
  border-right-color: ${props => props.theme.background};
  
  @media (max-width: 600px) {
    display: none;
  }
`;