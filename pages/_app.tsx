import {useEffect, useState} from "react";
import {getCookie, setCookie} from "cookies-next";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {NavbarComponent as Navbar} from "../components/Navbar/Navbar";
import Head from "next/head";
import "../util/fontawesome";
import "../styles/globals.css";
import {getTheme} from "../util/theme/theme";
import type {Theme, ThemeName} from "../types/theme";
import type {AppProps} from "next/app";
import type {ThemeState} from "../types/navbar";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false

const GlobalStyles = createGlobalStyle`
  html, body {
    background: var(--global-background-color);
  }

  // load styles as css variables for ease of use
  * {
    --global-background-color: ${(props: { theme: Theme }) => props.theme.globalBackgroundColor};
    --global-box-background-color: ${(props: { theme: Theme }) => props.theme.globalBoxBackgroundColor};
    --global-text-color: ${(props: { theme: Theme }) => props.theme.globalTextColor};
    --primary-background-color: ${(props: { theme: Theme }) => props.theme.primaryBackgroundColor};
    --primary-text-color: ${(props: { theme: Theme }) => props.theme.primaryTextColor};
      // --secondary-background-color: ${(props: { theme: Theme }) => props.theme.secondaryBackgroundColor};
      // --secondary-text-color: ${(props: { theme: Theme }) => props.theme.secondaryTextColor};
    --navbar-background-color: ${(props: { theme: Theme }) => props.theme.navbarBackgroundColor};
    --navbar-text-color: ${(props: { theme: Theme }) => props.theme.navbarTextColor};
    --navbar-menu-button-background-color: ${(props: { theme: Theme }) => props.theme.navbarMenuButtonBackgroundColor};
    --navbar-menu-button-icon-color: ${(props: { theme: Theme }) => props.theme.navbarMenuButtonIconColor};
    --navbar-dropdown-border-color: ${(props: { theme: Theme }) => props.theme.navbarDropdownBorderColor};
    --navbar-dropdown-background-color: ${(props: { theme: Theme }) => props.theme.navbarDropdownBackgroundColor};
    --navbar-dropdown-text-color: ${(props: { theme: Theme }) => props.theme.navbarDropdownTextColor};
    --navbar-dropdown-settings-background-color: ${(props: {
      theme: Theme
    }) => props.theme.navbarDropdownSettingsBackgroundColor};
    --navbar-dropdown-settings-text-color: ${(props: { theme: Theme }) => props.theme.navbarDropdownSettingsTextColor};
  }

  // TODO: low motion mode
  //* {
  //  transition: 0ms !important;
  //}
`;

const App = ({Component, pageProps}: AppProps) => {
    const [themeName, setThemeName] = useState<ThemeName>("dark");
    useEffect(() => {
        let theme = getCookie("NEXT_THEME") as ThemeName
        setThemeName(theme)
    }, []);

    const changeTheme = (themeName: ThemeName) => {
        setThemeName(themeName);
        setCookie("NEXT_THEME", themeName, {
            sameSite: true
        });
    }

    return <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyles theme={getTheme(themeName)}/>
        <Head>
            <link href={getTheme(themeName).icon} rel="icon" type="image/x-icon"/>
            <title>Lempek Blog</title>
        </Head>
        <Navbar themeChanger={[themeName, changeTheme] as ThemeState}/>
        <Component {...pageProps} />
    </ThemeProvider>;
}

export default App;