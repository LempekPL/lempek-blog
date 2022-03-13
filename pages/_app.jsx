import {useEffect, useState} from "react";
import Head from "next/head";
// cookies
import {getCookie, setCookies} from "cookies-next";
// loading icons
import "../util/fontawesome";
// global styling
import "../styles/globals.css";
// themes
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import THEMES from "../util/themes/theme";
import {getTheme} from "../util/themes/getTheme";
// navbar
import Navbar from "../components/Navbar";
// making grid
import grid, {Grid} from "../components/grid.style";
// font awesome fix
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
}

const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${props => props.theme.background};
  }
`

const App = ({Component, pageProps}) => {
    // set default theme
    const [themeName, setThemeName] = useState(THEMES.DARK);

    // change to save theme
    useEffect(() => setThemeName(getCookie("NEXT_THEME")), []);

    // callback for changing theme from another component
    const changeTheme = (themeName) => {
        setThemeName(themeName);
        setCookies("NEXT_THEME", themeName, OPTIONS);
    }

    return (
        <>
            <ThemeProvider theme={getTheme(themeName)}>
                <Head>
                    <link href={getTheme(themeName).icon} rel="icon" type="image/x-icon"/>
                    <title>Lempek blog</title>
                </Head>
                <Navbar changeTheme={changeTheme}/>
                <GlobalStyles/>
                <Grid>
                    <Component {...pageProps} />
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default App;