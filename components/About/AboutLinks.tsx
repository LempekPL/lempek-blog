import type {AboutData} from "../../types/about";
import useTranslation from "next-translate/useTranslation";
import {
    LinksMargins, LinksList, LinksBox, LinksButton, ButtonIcon, LinkProfile
} from "../../styles/About/aboutLinks";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {IconName} from "@fortawesome/fontawesome-common-types";
// import Image from "next/image";

const socials: IconName[] = [
    "github",
    "linkedin",
    "twitter"
]

const Accounts = ({data}: { data: AboutData }) => {
    const {t} = useTranslation("about");
    const [getLink, setLink] = useState(0);

    const list = [];
    for (let i = 0; i < socials.length; i++) {
        list.push(
            <LinksButton key={socials[i]} onClick={() => {
                setLink(i)
            }}> <ButtonIcon><FontAwesomeIcon icon={["fab", socials[i]]}/></ButtonIcon>
                {socials[i][0].toUpperCase() + socials[i].slice(1)}</LinksButton>
        );
    }

    return <>
        <LinksMargins>
            <LinksList>
                {list}
            </LinksList>
            <LinksBox>
                {/* @ts-ignore */}
                <LinkProfile currentLink={getLink} displayAt={0}>
                    aaaaaaa
                </LinkProfile>
                {/* @ts-ignore */}
                <LinkProfile currentLink={getLink} displayAt={1}>
                    bbbbbbbb
                </LinkProfile>
            </LinksBox>
        </LinksMargins>
    </>;
}

export default Accounts;