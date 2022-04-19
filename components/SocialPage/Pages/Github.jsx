import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Activity,
    SideBars,
    SideText,
    RecentActivity,
    RepoBox,
    RepoDesc,
    RepoName,
    RepoInfo,
    RepoStatusPlate,
    RepoLink,
    RepoPlates,
    RepoLang,
    RepoLangColor,
    RepoUpdated
} from "./github.style";
import colors from "../../../util/githubColors.json";
import useTranslation from "next-translate/useTranslation";
import {getCookie} from "cookies-next";
import {DivImage, Header, IconSpanLink, Name} from "./universal.style";

const Github = ({data}) => {
    data.repos = data.repos.filter((obj) => obj.name !== "LempekPL").sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    return (<>
        <Header href={data.user.html_url} target="_blank" tabIndex={-1}>
            <button>
                <DivImage>
                    <Image src={data.user.avatar_url} alt="Lempek" layout="fill" priority={true}/>
                </DivImage>
                <IconSpanLink>
                    <FontAwesomeIcon icon={["fas", "link"]}/>
                </IconSpanLink>
                <Name>{data.user.name}</Name>
            </button>
        </Header>
        <SideText>
            <SideBars>Repositories: {data.user.public_repos + data.user.total_private_repos}</SideBars>
            <SideBars>Followers: {data.user.followers}</SideBars>
            <SideBars>Following: {data.user.following}</SideBars>
        </SideText>
        <RecentActivity>Recent activity</RecentActivity>
        <Activity>
            {data.repos.map((repo, index) => {
                return <GithubBox key={index} repo={repo}/>
            })}
        </Activity>
    </>);
}


const GithubBox = ({repo}) => {
    const {t} = useTranslation("about");

    return (<>
        <RepoBox>
            <RepoLink href={repo.html_url} target="_blank" tabIndex="-1" lengthSize={repo.name.length}>
                <button>
                    <span><FontAwesomeIcon icon={["fas", "link"]}/></span>
                    <RepoName>{repo.name}</RepoName>
                </button>
            </RepoLink>
            <RepoPlates>
                {!repo.fork || <RepoStatusPlate statusPlate={"fork"}>Fork</RepoStatusPlate>}
                {!repo.archived || <RepoStatusPlate statusPlate={"archived"}>Archived</RepoStatusPlate>}
            </RepoPlates>
            <RepoInfo>
                <FontAwesomeIcon icon={["far", "star"]}/> {repo.stargazers_count} <FontAwesomeIcon
                icon={["fas", "code-fork"]}/> {repo.forks}
            </RepoInfo>
            <RepoDesc>{repo.description}</RepoDesc>
            <RepoLang><RepoLangColor color={colors[repo.language]?.color || "#ededed"}/> {repo.language}</RepoLang>
            <RepoUpdated>
                {t("updatedAt", {
                    date: new Date(repo.updated_at).toLocaleString(getCookie("NEXT_LOCALE") ?? "en", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    })
                })}
            </RepoUpdated>
        </RepoBox>
    </>);
}

export default Github;