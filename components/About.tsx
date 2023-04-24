import Image from "next/image";
import {
    LempekAbout,
    LempekImage,
    LempekNames,
    Name,
    Nick,
    LempekDesc,
    LinksList,
    LinkText,
    ButtonIcon,
    LinksLink,
    LempekDescBox,
    LempekInformation
} from "../styles/about";
import useTranslation from "next-translate/useTranslation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MainBox, MainLayout} from "../styles/universal";
import type {Socials} from "../types/about";
import LempekIRL from "../public/images/lempekIRL.png";

export const AboutComponent = () => {
    const {t} = useTranslation("about");
    const years = Math.floor((Date.now() - Number(new Date(2004, 2, 29))) / (1000 * 60 * 60 * 24 * 365.25));

    const socialButtons: JSX.Element[] = [];
    for (let i = 0; i < socials.length; i++) {
        socialButtons.push(
            <LinksLink key={socials[i].name}
                       $companyColor={socials[i].color}
                       href={socials[i].link} target="_blank">
                <ButtonIcon><FontAwesomeIcon icon={["fab", socials[i].name]}/></ButtonIcon>
                <LinkText>{socials[i].name[0].toUpperCase() + socials[i].name.slice(1)}</LinkText>
            </LinksLink>
        );
    }

    return <>
        <MainLayout>
            <MainBox>
                <LempekAbout>
                    <LempekImage>
                        <Image src={LempekIRL} alt="Lempek" priority={true} width={16 * 14} height={16 * 14}/>
                    </LempekImage>
                    <LempekNames>
                        <Name>Piotr Lempkowski</Name>
                        <Nick>LEMPEK</Nick>
                    </LempekNames>
                </LempekAbout>
                <LempekInformation>
                    <LempekDescBox>
                        <LempekDesc>
                            {t("meIRL", {years})}
                        </LempekDesc>
                    </LempekDescBox>
                    <LinksList>
                        {socialButtons.map((item) => item)}
                    </LinksList>
                </LempekInformation>
            </MainBox>
        </MainLayout>
    </>;
}

const socials: Socials[] = [
    {
        name: "github",
        link: "https://github.com/LempekPL",
        color: "#171515"
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/piotrlempek/",
        color: "#0077B5"
    },
    {
        name: "twitter",
        link: "https://twitter.com/LEMPEKPL",
        color: "#1DA1F2"
    },
    {
        name: "discord",
        link: "https://discord.com/channels/@me/249253855613812736",
        color: "#5865F2"
    },
    {
        name: "twitch",
        link: "https://www.twitch.tv/lempekpl",
        color: "#9146FF"
    },
    {
        name: "youtube",
        link: "https://www.youtube.com/@Lempek",
        color: "#FF0000"
    },
    {
        name: "steam",
        link: "https://steamcommunity.com/id/LempekPL/",
        color: "#0B4A7C"
    }
]