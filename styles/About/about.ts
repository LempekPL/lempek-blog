import styled from "styled-components";

export const AboutMargins = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns:
    1fr
    min(40rem, 100%)
    1fr;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr min(60rem, 100%) 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 0 100% 0;
  }
`;

export const AboutBox = styled.div`
  height: 100%;
  grid-column: 2;
  align-items: center;
  background-color: #505050; // TODO: theme system
  z-index: 1;
`;

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

  img {
    border-radius: 100%;
    object-fit: contain;
    z-index: 2;
  }
`;

export const LempekNames = styled.div`
  align-self: center;
  color: ${props => props.theme.text};
`;

export const Name = styled.div`
  background-color: ${props => props.theme.background};
  position: relative;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: .5rem 1.5rem;
  border-radius: 2rem 2rem 2rem 0;
  width: fit-content;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;

    background-color: #505050;
    left: 14.45rem;
    bottom: -4rem;
    height: 4rem;
    width: 2rem;
    border-top-left-radius: 2rem;
    box-shadow: 0 -2rem 0 0 ${props => props.theme.background};

    @media (max-width: 999px) {
      left: 12.35rem;
    }

    @media (max-width: 700px) {
      left: 12.3rem;
    }
  }

  @media (max-width: 999px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  //@media (max-width: 600px) {
  //  align-self: center;
  //}
  //
  //@media (max-width: 350px) {
  //  font-size: 12vw;
  //  line-height: 16vw;
  //  border-radius: 0;
  //  padding: 0;
  //}
`;

export const Nick = styled.div`
  background-color: ${props => props.theme.background};
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  padding: .5rem 2rem;
  border-radius: 0 0 2rem 2rem;
  width: fit-content;

  @media (max-width: 999px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

`;

export const LempekInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 2rem;
`;

export const LempekDescBox = styled.div`
  color: ${props => props.theme.text};
`;

export const LempekDesc = styled.p`
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.background};
`;

export const LinksList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.background};
`;

export const LinksLink = styled.a`
  overflow: hidden;
  width: 12rem;
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  border-radius: 100rem;
  border: 2px solid ${props => // @ts-ignore
          props.companyColor};
  color: #fff;
  background-color: ${props => props.theme.about_brand_buttons};

  :focus-visible {
    outline: royalblue solid 2px;
  }

  :is(:focus-visible, :hover)::after {
    transform: translateY(-100%);
  }

  :is(:focus-visible, :hover) span {
    transition: .25s;
    color: ${props => // @ts-ignore
            props.theme.type == "dark" ? "#ccc" : props.companyColor};
  }

  ::after {
    transition: .25s;
    content: "";
    background-color: ${props => // @ts-ignore
            props.companyColor};
    position: absolute;
    transform: translateY(0);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
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
