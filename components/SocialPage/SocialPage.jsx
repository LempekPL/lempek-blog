import Github from "./Github";

const SocialPage = ({social, data}) => {
    switch (social) {
        case "github":
            return <Github data={data}/>
        case "linkedin":
            return <LinkedIn/>
        case "youtube":
            return <YouTube/>
        case "twitch":
            return <Twitch/>
        case "steam":
            return <Steam/>
        case "discord":
            return <Discord/>
        case "twitter":
            return <Twitter/>
        case "reddit":
            return <Reddit/>
        default:
            return <div>No social page found</div>
    }
};

const LinkedIn = () => {
    return (<>
        bbbbb
    </>)
}

const YouTube = () => {
    return (<>
        ccccd
    </>)
}

const Twitch = () => {
    return (<>
        dddd
    </>)
}

const Steam = () => {
    return (<>
        eeee
    </>)
}

const Discord = () => {
    return (<>
        ffff
    </>)
}

const Twitter = () => {
    return (<>
        eeee
    </>)
}

const Reddit = () => {
    return (<>
        ffff
    </>)
}

export default SocialPage;