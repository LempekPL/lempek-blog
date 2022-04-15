import THEMES from "../../util/themes/theme";
import {getCookie, setCookies} from "cookies-next";
import setLanguage from "next-translate/setLanguage";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import useTranslation from "next-translate/useTranslation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    SettingsList,
    OptionTextSelector,
    SettingsButton,
    SettingsItemButton,
    FAsettings,
    OptionIcon,
    OptionName
} from "./options.style"
import useToggle from "../../hooks/useToggle";

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
};

const OptionsList = forwardRef(({changeTheme: chT, isMain, isMenuOpen}, ref) => {
    const {t, lang} = useTranslation("navbar");
    const [openTheme, toggleTheme] = useToggle();
    const [openLang, toggleLang] = useToggle();
    const [isTheme, setTheme] = useState(THEMES.DARK);

    // allow closing options in parent
    useImperativeHandle(ref, () => ({
        close() {
            toggleTheme(false);
            toggleLang(false);
        },
    }))

    // callback for changing locale from another component
    const changeLocale = (localeName) => {
        (async () => {
            await setLanguage(localeName);
        })()
        setCookies("NEXT_LOCALE", localeName, OPTIONS);
    }

    const changeTheme = (themeName) => {
        chT(themeName);
        setTheme(themeName);
    }

    useEffect(() => {
        setTheme(getCookie("NEXT_THEME") || "dark")
    }, []);

    const buttons = [];
    for (const themesKey in THEMES) {
        if (JSON.parse(getCookie("EXPERIMENTS") || "{}")?.theme?.high_contrast !== true && THEMES[themesKey] === "high_contrast") continue;
        buttons.push(
            <SettingButton
                key={THEMES[themesKey]} setValue={isTheme}
                isOpen={openTheme} translation={t(THEMES[themesKey])}
                change={[changeTheme, THEMES[themesKey]]}
            />
        )
    }

    // all languages
    const langs = ["en", "pl", "de"];
    const buttonsLang = [];
    for (const langValue of langs) {
        if (JSON.parse(getCookie("EXPERIMENTS") || "{}")?.lang?.german !== true && langValue === "de") continue;
        buttonsLang.push(
            <SettingButton
                key={langValue} setValue={lang}
                isOpen={openLang} translation={t(langValue)}
                change={[changeLocale, langValue]}
            />
        )
    }

    return (
        <>
            <OptionButton toggle={toggleTheme} isOpen={openTheme} isMenuOpen={isMenuOpen} translation={t("theme")}/>
            <SettingsList isOpen={openTheme}>
                {buttons}
            </SettingsList>
            <OptionButton toggle={toggleLang} isOpen={openLang} isMenuOpen={isMenuOpen} translation={t("language")}/>
            <SettingsList isOpen={openLang}>
                {buttonsLang}
            </SettingsList>
        </>
    )
})

const OptionButton = ({toggle, translation, isOpen, isMenuOpen}) => {
    return (
        <SettingsButton onClick={() => {
            toggle();
        }} tabIndex={isMenuOpen ? "0" : "-1"}>
            <OptionTextSelector>
                {translation}
                <FAsettings isOpen={isOpen} box={{
                    display: "inline-block"
                }} boxSvg={{position: "relative"}}>
                    <FontAwesomeIcon icon={["fas", "angle-down"]}/>
                </FAsettings>
            </OptionTextSelector>
        </SettingsButton>
    );
}

const SettingButton = ({setValue, isOpen, translation, change}) => {
    return (
        <SettingsItemButton isOpen={isOpen} tabIndex={isOpen ? "0" : "-1"} onClick={() => {
            change[0](change[1]);
        }}>
            <OptionIcon>
                {setValue === change[1] ?
                    <FontAwesomeIcon icon={["fas", "circle-check"]}/> :
                    <FontAwesomeIcon icon={["far", "circle-xmark"]}/>
                }
            </OptionIcon>
            <OptionName>
                {translation}
            </OptionName>
        </SettingsItemButton>
    );
}

OptionsList.displayName = "OptionsList";
export default OptionsList;