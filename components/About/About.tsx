import Image from "next/image";
import {
    AboutMargins,
    AboutBox,
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
} from "../../styles/About/about";
import useTranslation from "next-translate/useTranslation";
import type {Socials} from "../../types/about";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useIcon from "../../hooks/useIcon";

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

const About = () => {
    const {t} = useTranslation("about");
    const years = Math.floor((Date.now() - Number(new Date(2004, 2, 29))) / (1000 * 60 * 60 * 24 * 365.25));

    const button_link_list = [];
    for (let i = 0; i < socials.length; i++) {
        button_link_list.push(
            <LinksLink key={socials[i].name}
                // @ts-ignore
                       companyColor={socials[i].color}
                       href={socials[i].link} target="_blank">
                 {/*eslint-disable-next-line react-hooks/rules-of-hooks */}
                <ButtonIcon>{useIcon(<FontAwesomeIcon icon={["fab", socials[i].name]}/>)}</ButtonIcon>
                <LinkText>{socials[i].name[0].toUpperCase() + socials[i].name.slice(1)}</LinkText>
            </LinksLink>
        );
    }

    return <>
        <AboutMargins>
            <AboutBox>
                <LempekAbout>
                    <LempekImage>
                        <Image src={"/images/lempekIRL.png"} alt="Lempek" width={14*16} height={14*16} priority={true}/>
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
                        {button_link_list}
                    </LinksList>
                </LempekInformation>
            </AboutBox>
        </AboutMargins>
    </>;
}

export default About;