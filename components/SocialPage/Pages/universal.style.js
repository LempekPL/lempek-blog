import styled from "styled-components";

export const Header = styled.a`
  color: #003bb4;
  outline: none;

  :is(:hover, :focus-visible) {
    color: #00288c;
  }

  :visited {
    color: #551A8B;
  }

  :visited:is(:hover, :focus-visible) {
    color: #3d1265;
  }

  button {
    background-color: inherit;
    color: inherit;
    border: inherit;
    outline: inherit;
    cursor: pointer;

    :focus-visible {
      color: #00288c;
      outline: 2px solid royalblue;
    }
  }

  :visited button:focus-visible {
    color: #3d1265;
  }
`;

export const DivImage = styled.div`
  position: relative;
  display: inline-block;
  float: left;
  height: 3rem;
  width: 3rem;

  img {
    object-fit: contain;
    border-radius: .5rem;
    z-index: 2;
  }
`;

export const IconSpanLink = styled.span`
  font-size: 2rem;
  float: left;
  margin-left: .5rem;
`;

export const Name = styled.span`
  font-size: 2rem;
  float: left;
  margin-left: .25rem;
  text-decoration: underline;
`;