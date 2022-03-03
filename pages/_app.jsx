import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Link from "next/link";
// cookies
import {getCookie, setCookies} from "cookies-next";
// loading icons
import "../util/fontawesome";
// global styling
import "../styles/globals.css";
// themes
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import THEMES from "../util/themes/theme";
import {getTheme} from "../util/themes/getTheme";
// navbar
import Navbar from "../components/Navbar";
// translation
import useTranslation from 'next-translate/useTranslation'
// font awesome fix
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
}

const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
  }
`

export default function App({Component, pageProps}) {
    // set default theme
    const [themeName, setThemeName] = useState(THEMES.DARK);

    // change to save theme
    useEffect(() => setThemeName(getCookie("THEME")), []);

    // callback for changing theme from another component
    const changeTheme = (themeName) => {
        setThemeName(themeName);
        setCookies("THEME", themeName, OPTIONS);
    }

    const router = useRouter()
    const {t, lang} = useTranslation("common");
    const lem = t("lempek");

    return (
        <>
            <ThemeProvider theme={getTheme(themeName)}>
                <Head>
                    <link href={getTheme(themeName).icon} rel="icon" type="image/x-icon"/>
                    <title>Lempek blog</title>
                </Head>
                <Navbar changeTheme={changeTheme}/>
                <GlobalStyles/>
                <Component {...pageProps} />
                <ThemeButton onClick={() => {
                    changeTheme(THEMES.LIGHT);
                }}>LIGHT</ThemeButton>
                <ThemeButton onClick={() => {
                    setThemeName(THEMES.DARK);
                    setCookies("THEME", THEMES.DARK, OPTIONS);
                }}>DARK</ThemeButton>
                <ThemeButton onClick={() => {
                    setThemeName(THEMES.AMOLED);
                    setCookies("THEME", THEMES.AMOLED, OPTIONS);
                }}>AMOLED</ThemeButton>
                <ThemeButton onClick={() => {
                    setThemeName(THEMES.LEMPEK);
                    setCookies("THEME", THEMES.LEMPEK, OPTIONS);
                }}>{lem}</ThemeButton>
                <Link
                    href="/"
                    locale={router.locale === "en" ? "pl" : "en"}
                >
                    <button onClick={() => setCookies("NEXT_LOCALE", router.locale === "en" ? "pl" : "en", OPTIONS)}>
                        aaaa
                    </button>
                </Link>
            </ThemeProvider>
        </>
    )
}

const ThemeButton = styled.button`
  margin: 0.25rem;
`;