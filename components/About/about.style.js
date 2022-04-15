import styled from "styled-components";

export const AboutBox = styled.div`
  align-items: center;
  border-radius: 8rem 5rem 2rem 2rem;
  background-color: ${props => props.theme.background_box};
  display: grid;
  grid-template-columns: 14rem 1fr;
  grid-template-areas: "pic name" "pic meirl" "links links";
  gap: 1rem;
  justify-items: center;
  margin: 5rem auto 0;
  overflow: auto;
  padding: 1rem;
  transition: 300ms;
  width: 100%;
  z-index: 1;

  @media (max-width: 600px) {
    border-radius: unset;
    display: flex;
    flex-direction: column;
    margin: var(--navbar-height) auto auto;
    padding: 0;
    width: 100%;
  }
`;

export const Name = styled.div`
  color: ${props => props.theme.text};
  grid-area: name;
  font-size: 3rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
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

export const LempekDesc = styled.span`
  align-self: flex-start;
  color: ${props => props.theme.text};
  grid-area: meirl;
  margin: 0 1rem;
  z-index: 1;
`;