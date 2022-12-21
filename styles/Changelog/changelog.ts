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