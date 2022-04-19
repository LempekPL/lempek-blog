import styled from "styled-components";
import {linkColoring} from "../../useful-components.style";

export const SideText = styled.span`
  font-size: 1.5rem;
  float: right;
  line-height: 3rem;
  margin-left: .5rem;
  padding-right: .5rem;
`;

export const SideBars = styled.span`
  color: ${props => props.theme.text};
  display: block;
  font-size: 1rem;
  height: 1rem;
  margin-left: .5rem;

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

export const RecentActivity = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  padding-left: .5rem;
  margin-top: 4rem;
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 450px) {
    gap: .25rem;
  }
`;

export const RepoBox = styled.div`
  align-items: center;
  background-color: ${props => props.theme.about_github_box_background};
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 3rem 2fr 1fr;
  grid-template-areas: 
          "repo-link repo-plate repo-info" 
          "repo-desc repo-desc repo-desc"
          "repo-updated repo-updated repo-lang";
  grid-gap: 1rem;
  min-width: 20rem;
  padding: 1rem;

  :focus-visible {
    outline: 2px solid royalblue;
  }

  @media (max-width: 599px) {
    border-radius: 0;
    grid-template-areas: 
          "repo-link repo-link repo-info" 
          "repo-desc repo-desc repo-plate"
          "repo-updated repo-updated repo-lang";

    :hover {
      cursor: pointer;
    }
  }
`;

export const RepoLink = styled.a`
  border: none;
  color: ${props => props.theme.text};
  display: inline-block;
  font-size: 2rem;
  grid-area: repo-link;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;

  button {
    border: inherit;
    background-color: inherit;
    color: inherit;
    cursor: pointer;
    font-size: inherit;
    text-decoration: inherit;
  }

  button:focus-visible {
    outline: 2px solid royalblue;
  }

  ${() => linkColoring("button > span")};

  @media (max-width: 600px) {
    display: block;
    overflow: ${props => props.lengthSize > 12 ? "hidden" : "visible"};
  }

  @media (min-width: 600px) {
    :visited:is(:hover, :focus-visible) button {
      color: #3d1265;
    }

    :is(:hover, :focus-visible) button {
      color: #00288c;
    }
  }
`;

export const RepoName = styled.p`
  display: inline-block;
  margin: 0 0 0 .5rem;
`;

export const RepoPlates = styled.span`
  grid-area: repo-plate;
`;

const PLATE_COLORS = {
    "archived": "#910000",
    "fork": "#bb8b0f",
}

export const RepoStatusPlate = styled.div`
  border: 1px solid ${props => PLATE_COLORS[props.statusPlate]};
  border-radius: 1rem;
  color: ${props => PLATE_COLORS[props.statusPlate]};
  display: inline-block;
  font-size: 1rem;
  padding: .4rem .4rem;

  @media (max-width: 600px) {
    margin-top: .5rem;
    :nth-child(2) {
      margin-left: 0;
    }
  }
`;

export const RepoInfo = styled.div`
  color: ${props => props.theme.text};
  font-size: 1rem;
  float: right;
  grid-area: repo-info;
  text-decoration: none;
`;

export const RepoDesc = styled.p`
  align-self: flex-start;
  color: ${props => props.theme.text};
  font-size: 1.25rem;
  text-decoration: none !important;
  grid-area: repo-desc;
  margin: 0;
`;

export const RepoLang = styled.div`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  grid-area: repo-lang;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const RepoLangColor = styled.div`
  background-color: ${props => props.color};
  border-radius: 100%;
  display: inline-block;
  grid-area: repo-lang;
  height: 1rem;
  width: 1rem;
`;

export const RepoUpdated = styled.div`
  color: ${props => props.theme.text};
  font-size: 1rem;
  grid-area: repo-updated;
`;