import styled from "styled-components";
import {NoButton} from "../useful-components.style";

export const GithubHeader = styled.a`
  outline: none;
  color: #003bb4;

  :is(:hover, :focus-visible) {
    color: #00288c;
  }

  :visited {
    color: #551A8B;
  }

  :visited:is(:hover, :focus-visible) {
    color: #3d1265;
  }
`;

export const GithubName = styled.span`
  margin-left: .25rem;
  font-size: 2rem;
  float: left;

  text-decoration: underline;
`;

export const GithubLink = styled.span`
  margin-left: .5rem;
  font-size: 2rem;
  float: left;
`;

export const GithubSideText = styled.span`
  margin-left: .5rem;
  font-size: 1.5rem;
  line-height: 3rem;
  float: right;
  padding-right: .5rem;
`;

export const GithubSideVBars = styled.span`
  color: ${props => props.theme.text};
  margin-left: .5rem;
  display: block;
  font-size: 1rem;
  height: 1rem;

  @media (min-width: 600px) {
    font-size: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 1000px) {
    display: inline;
    :is(:nth-child(1),:nth-child(2))::after {
      content: "|";
      margin-left: .5rem;
    }
  }
`;

export const GithubRecentActivity = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  padding-left: .5rem;
`;

export const GithubActivity = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 450px) {
    gap: .25rem;
  }
`;

export const GithubBox = styled.div`
  background-color: ${props => props.theme.about_github_box_background};
  border-radius: 1rem;
  padding: 1rem;
  min-width: 20rem;

  :focus-visible {
    outline: 2px solid royalblue;
  }

  @media (max-width: 599px) {
    border-radius: 0;
    display: none;

    :hover {
      cursor: pointer;
    }
  }
`;

export const GithubBoxA = styled.a`
  background-color: ${props => props.theme.about_github_box_background};
  border-radius: 1rem;
  text-decoration: none;
  padding: 1rem;
  min-width: 20rem;

  @media (min-width: 600px) {
    display: none;
  }

  @media (max-width: 599px) {
    border-radius: 0;

    :hover {
      cursor: pointer;
    }
  }
`;

export const FakeButton = styled(NoButton)`
  display: none;
  @media (max-width: 599px) {
    display: grid;
  }
  :focus-visible {
    outline: 2px solid royalblue;
  }
  // all grid templates
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "icon repo-name mini-info"
    "repo-desc repo-desc repo-desc";
    "mini-lang none none";
  grid-gap: 1rem;
`;

export const RepoName = styled.div`
  text-overflow: ellipsis;
  color: ${props => props.theme.text};
  font-size: 2rem;
  display: inline-block;
  text-decoration: none;
  background-color: inherit;
  border: none;
  button {
    cursor: pointer;
  }
  
  @media (min-width: 600px) {
    display: block;
  }

  button:focus-visible {
    outline: 2px solid royalblue;
  }
`;

export const RepoNameA = styled.a`
  text-overflow: ellipsis;
  color: ${props => props.theme.text};
  font-size: 2rem;
  display: inline-block;
  text-decoration: none;
  background-color: inherit;
  border: none;
  button {
    cursor: pointer;
  }
  
  > button > span {
    color: #003bb4;
  }
  :is(:hover, :focus-visible) {
    > button > span {
      color: #00288c;
    }
  }
  :visited {
    > button > span {
      color: #551a8b;
    }

    :is(:hover, :focus-visible) > button > span {
      color: #3d1265;
    }
  }
  

  @media (max-width: 600px) {
    display: block;
  }

  @media (min-width: 600px) {
    :visited:is(:hover, :focus-visible) button {
      color: #3d1265;
    }
    
    :is(:hover, :focus-visible) button {
      color: #00288c;
    }
  }

  button:focus-visible {
    outline: 2px solid royalblue;
  }
`;

export const RepoInfo = styled.div`
  font-size: 1rem;
  float: right;
  margin: .5rem;
  text-decoration: none;
`;

const PLATE_COLORS = {
    "archived": "#910000",
    "fork": "#a8a8a8",
}

export const RepoStatusPlate = styled.div`
  font-size: 1rem;
  border-radius: 1rem;
  display: inline-block;
  margin-top: -1rem;
  margin-left: .5rem;
  vertical-align: middle;
  line-height: 1.5rem;
  padding: .2rem .5rem;
  border: 1px solid ${props => PLATE_COLORS[props.statusPlate]};
  color: ${props => PLATE_COLORS[props.statusPlate]};

  @media (max-width: 600px) {
    margin-top: .5rem;
    :nth-child(2) {
      margin-left: 0;
    }
  }
`;

export const RepoDesc = styled.p`
  color: ${props => props.theme.text};
  font-size: 1rem;
  text-decoration: none !important;
`;

export const RepoBottomInfo = styled.div`
  font-size: 1rem;
`;