import styled from "styled-components";

export const TitleName = styled.p`
  margin-top: calc(var(--navbar-height) + 2rem);
  text-align: center;
  color: ${props => props.theme.text};
  font-weight: bold;
  font-size: 2rem;
`;

export const ChangeBox = styled.div`
  color: ${props => props.theme.text};
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 1.75rem;
  gap: 1rem;
  margin: 2rem 4rem;
`;

export const ChangeName = styled.p`
  background-color: ${props => props.theme.background};
  margin-left: 12rem;
  margin-right: 12rem;
  padding: .25rem;
  border-radius: 100rem;
  box-shadow: 0 .25rem .25rem rgba(0,0,0,50%);
  
  @media (max-width: 1000px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media (max-width: 700px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ChangesList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  align-items: flex-start;
`;

export const Changes = styled.p`
    ::before {
      content: "• ";
    }
`;