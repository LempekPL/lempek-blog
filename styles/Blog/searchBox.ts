import styled from "styled-components";

export const SearchBox = styled.div`
  margin-top: calc(var(--navbar-height) + 1rem);
  margin-left: 5rem;
  margin-right: 5rem;
  text-align: center;
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: row;
  height: 3rem;

  :is(:focus-visible, :hover, :focus-within) {
    background: ${props => props.theme.search_bar};
    box-shadow: 0 .2rem .2rem rgba(0, 0, 0, 50%);
  }

  border-radius: 100rem;
  transition: .2s;

  @media (max-width: 700px) {
    margin-top: var(--navbar-height);
    margin-left: 0;
    margin-right: 0;
    border-radius: 0;
  }
`;

export const SearchIcon = styled.div`
  width: 2.5rem;
  font-size: 1rem;
  border-radius: 100rem 0 0 100rem;
  border: 2px solid ${props => props.theme.search_bar};
  border-right: none;
  display: flex;
  align-items: center;
  justify-items: center;
  > * {
    width: 100%
  }

  @media (max-width: 700px) {
    display: none;
    * {
      display: none;
    }
  }
`;

export const SearchInput = styled.input`
  color: ${props => props.theme.text};
  width: 35rem;
  background: transparent;
  border: 2px solid ${props => props.theme.search_bar};
  border-right: none;
  border-left: none;
  outline: none;
  font-size: 1.25rem;

  @media (max-width: 700px) {
    border-left: 2px solid ${props => props.theme.search_bar};
  }
`;

export const SearchFilterBox = styled.div`
  width: 12.5rem;
  background-color: ${props => props.theme.search_bar};
  border: 2px solid ${props => props.theme.search_bar};
  border-radius: 0 100rem 100rem 0;
  display: flex;

  @media (max-width: 700px) {
    border-radius: 0;
  }
`;

export const SearchFilter = styled.div`

`;

export const SearchFilterOption = styled.div`
    
`;