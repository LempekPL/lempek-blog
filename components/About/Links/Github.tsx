import type {AboutData, Repository} from "../../../types/about";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

const Github = ({data}: { data: AboutData }) => {
    // @ts-ignore
    data.repos = data.repos.filter((obj) => obj.name !== "LempekPL").sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    return <>

    </>;
}

const GithubBox = ({repo}: {repo: Repository}) => {
    const {t} = useTranslation("about");

    return <>

    </>;
}

export default Github;