import {useEffect, useState} from "react";
import THEMES from "../util/theme/theme";
import {getCookie, setCookies} from "cookies-next";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {getTheme} from "../util/theme/getTheme";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../util/fontawesome";
import "../styles/globals.css";
import type {Theme} from "../types/theme";
import type {AppProps} from "next/app";

config.autoAddCss = false;

const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${(props: { theme: Theme }) => props.theme.background};
  }
`;

const App = ({Component, pageProps}: AppProps) => {
    const [themeName, setThemeName] = useState(THEMES.DARK);
    useEffect(() => setThemeName(getCookie("NEXT_THEME") as string), []);
    const changeTheme = (themeName: string) => {
        setThemeName(themeName);
        setCookies("NEXT_THEME", themeName, {
            secure: process.env.IN_DEV === "false",
            sameSite: "lax"
        });
    }


    return <>
        <ThemeProvider theme={getTheme(themeName)}>
            <Head>
                <link href={getTheme(themeName).icon} rel="icon" type="image/x-icon"/>
                <title>Lempek Website</title>
            </Head>
            <Navbar changeTheme={changeTheme}/>
            <GlobalStyles/>
            <Component {...pageProps} />
        </ThemeProvider>
    </>;
}

export default App;