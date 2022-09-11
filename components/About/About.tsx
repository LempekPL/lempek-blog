import Image from "next/image";
import {
    AboutMargins, AboutBox, LempekAbout, LempekImage, Name, LempekDesc, DescPointer
} from "../../styles/About/about";
import useTranslation from "next-translate/useTranslation";
import type {AboutData} from "../../types/about";
import Accounts from "./AboutLinks";
import Contributors from "./AboutContributors";

const About = ({data}: { data: AboutData }) => {
    const {t} = useTranslation("about");
    const years = Math.abs(Math.round((Date.now() - Number(new Date(2004, 2, 29))) / (1000 * 60 * 60 * 24 * 365.25)));

    return <>
        <AboutMargins>
            <AboutBox>
                <LempekAbout>
                    <LempekImage>
                        <Image src={"/images/lempekIRL.png"} alt="Lempek" layout="fill" priority={true}/>
                    </LempekImage>
                    <Name>PIOTR LEMPKOWSKI</Name>
                    <DescPointer/>
                    <LempekDesc>
                        {t("meIRL", {years})}
                    </LempekDesc>
                </LempekAbout>
                <Accounts data={data}/>
                <Contributors data={data}/>
            </AboutBox>
        </AboutMargins>
    </>;
}

export default About;