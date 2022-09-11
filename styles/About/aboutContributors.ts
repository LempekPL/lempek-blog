import styled from "styled-components";


export const ContributorsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
`;

export const ContributorProfile = styled.div`
  background-color: #696969;
  padding: 1rem 2rem;
  border-radius: 2rem;
`;

export const ContributorImage = styled.div`
  grid-area: pic;
  height: 8rem;
  position: relative;
  width: 8rem;

  img {
    border-radius: 100%;
    object-fit: contain;
    z-index: 2;
  }
`;

export const Title = styled.p`
  text-align: center;
  color: ${props => props.theme.text};
  margin: 2rem 2rem 1rem;
  font-size: 2rem;
`;

export const Name = styled.p`
  color: ${props => props.theme.text};
  text-align: center;
  margin: .5rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Info = styled.p`
  color: ${props => props.theme.text};
  text-align: center;
  margin: .5rem;
`;