import {Box, TSpan} from "../components/useful-components.style";

const About = () => {
    return (
        <>
            <Box
                box={{borderRadius: "0 1rem 0 1rem"}}
                boxChange={{width: "500px", style:{width: "100%", borderRadius: "unset"}}}
            >
                <TSpan>I&apos;m 18 y/o programmer.
                    My hobbies are transporting stuff (like trains, trams, buses etc.), tinkering with logic gates and playing games.</TSpan>
            </Box>
        </>
    )
}

export default About;