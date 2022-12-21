import styled from "styled-components";

export const PostsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  justify-items: center;
  align-items: center;
`;

export const PostBox = styled.div`
  display: flex;
  flex-direction: row;
  //padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: ${props => props.theme.search_bar};
  height: 10rem;
  width: 45rem;
  color: ${props => props.theme.text};
  box-shadow: 0 .2rem .25rem rgba(0,0,0,50%);
  transition: .2s;
  
  :is(:hover, :focus-visible) {
    box-shadow: 0 .4rem .45rem rgba(0,0,0,50%);
  }
`;

export const PostThumbnail = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  aspect-ratio: 1/1;
  
  img {
    border-radius: 1rem 0 0 1rem;
    object-position: top left;
    //border-radius: 100%;
    //object-fit: fill;
    //z-index: 1;
  }
  //img {
  //  //object-fit: fill;
  //  height: 10rem !important;
  //  width: 10rem !important;
  //}
`;

export const PostContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
`;

export const PostTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostDesc = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostName = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const PostStats = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PostComments = styled.div`

`;

export const PostLikes = styled.div`

`;

export const PostTime = styled.div`

`;