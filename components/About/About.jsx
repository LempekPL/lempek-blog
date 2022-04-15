import Image from "next/image";
import {Name, AboutBox, LempekImage, LempekDesc} from "./about.style";
import useTranslation from "next-translate/useTranslation";
import AboutList from "./AboutList";

const About = ({data}) => {
    const {t} = useTranslation("about");
    const years = Math.abs(Math.round((Date.now() - new Date(2004, 2, 29, 23, 58, 7)) / (1000 * 60 * 60 * 24 * 365.25)));

    return (
        <>
            <AboutBox>
                <Name>PIOTR LEMPKOWSKI</Name>
                <LempekImage>
                    <Image src={"/images/lempekIRL.png"} alt="Lempek" layout="fill" priority={true}/>
                </LempekImage>
                <LempekDesc>
                    {t("meIRL", {years})}
                </LempekDesc>
                <AboutList data={data}/>
            </AboutBox>
        </>
    )
}

export default About;

