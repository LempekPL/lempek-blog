import styled from "styled-components";

export const E404TextBox = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.background_box};
  color: ${props => props.theme.text};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    font-size: 6rem;
    text-align: center;
  }
`;