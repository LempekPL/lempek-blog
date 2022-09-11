import type {AboutData, Contributor} from "../../types/about";
import useTranslation from "next-translate/useTranslation";
import {
    ContributorsBox, ContributorProfile, ContributorImage, Name, Info, Title
} from "../../styles/About/aboutContributors";
import Image from "next/image";

const AboutContributors = ({data}: { data: AboutData }) => {
    const {t} = useTranslation("about");

    const contrs = [];
    for (let i = 0; i < data.contributors.length; i++) {
        contrs.push(
            <ContributorPlate key={data.contributors[i].name} data={data.contributors[i]}/>
        );
    }

    return <>
        <Title>Contributors and moderators</Title>
        <ContributorsBox>
            {contrs}
        </ContributorsBox>
    </>;
}

const ContributorPlate = ({data}: { data: Contributor }) => {
    return <>
        <ContributorProfile>
            <ContributorImage>
                <Image src={data.image ?? "/images/default.png"} alt={data.name} layout="fill" priority={true}/>
            </ContributorImage>
            <Name>{data.name}</Name>
            <Info>{data.info}</Info>
            {/* TODO: SOCIAL LINKS */}
        </ContributorProfile>
    </>
}

export default AboutContributors;