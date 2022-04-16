import {Links, Pointer, LinkBox, InfoBox, BrandIcons} from "./about-list.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import SocialPage from "../SocialPage";

const socials = {
    0: "github",
    1: "linkedin",
    2: "twitter",
    3: "discord",
    4: "youtube",
    5: "twitch",
    6: "steam",
    7: "reddit"
}

const AboutList = ({data}) => {
    const [getSelectedLink, setSelectedLink] = useState(0);

    return (<>
        <Links>
            <FAbutton num={0} changer={setSelectedLink} selLink={getSelectedLink} socials={socials}/>
            <FAbutton num={1} changer={setSelectedLink} selLink={getSelectedLink} socials={socials}/>
            <FAbutton num={2} changer={setSelectedLink} selLink={getSelectedLink} socials={socials}/>
            {/*<FAbutton num={3} changer={setSelectedLink} selLink={getSelectedLink} socials={socials}/>*/}
            {/*<FAbutton num={4} changer={setSelectedLink} selLink={getSelectedLink} socials={socials}/>*/}
            {/*<FAbutton num={5} changer={setSelectedLink} selLink={getSelectedLink} socials={socials}/>*/}
            {/*<FAbutton num={6} changer={setSelectedLink} selLink={getSelectedLink} socials={socials}/>*/}
            {/*<FAbutton num={7} changer={setSelectedLink} selLink={getSelectedLink} socials={socials}/>*/}
        </Links>
        <InfoBox>
            {/* minToLink 1 => 16, 2 => 15 .. 9 => 8 .. 16 => 1 */}
            <Pointer minToLink={14} selectedLink={getSelectedLink}/>
            <LinkBox>
                <SocialPage social={socials[getSelectedLink]} data={data}/>
            </LinkBox>
        </InfoBox>
    </>)
}

const FAbutton = ({num, socials, changer, selLink}) => {
    return (
        <BrandIcons selectedLink={selLink} thisLink={num} tabIndex="0" onClick={() => changer(num)}>
            <FontAwesomeIcon icon={["fab", socials[num]]} fixedWidth/>
        </BrandIcons>
    )
}

export default AboutList;

