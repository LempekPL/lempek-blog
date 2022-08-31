import {forwardRef, Ref, useEffect, useImperativeHandle, useState} from "react";
import useTranslation from "next-translate/useTranslation";
import useToggle from "../../hooks/useToggle";
import THEMES from "../../util/theme/theme";
import setLanguage from "next-translate/setLanguage";
import {getCookie, setCookie} from "cookies-next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    OptionButtonStyle, OptionTextSelector,
    OptionFAIcon, SettingsList,
    SettingsItemButton,
    SettingIcon, SettingName
} from "../../styles/Navbar/innerDrop";
import type {ChangeTheme, RefOptions} from "../../types/navbar";

const OptionList = forwardRef((
    {isOpen, changeTheme}: { isOpen: boolean, changeTheme: ChangeTheme }
    , ref: Ref<RefOptions>) => {
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

    const changeLocale = (localeName: string) => {
        (async () => {
            await setLanguage(localeName);
        })()
        setCookie("NEXT_LOCALE", localeName, {
            secure: process.env.IN_DEV === "false",
            sameSite: "lax"
        });
    }

    const changeT = (themeName: string) => {
        changeTheme(themeName);
        setTheme(themeName);
    }

    useEffect(() => {
        setTheme(getCookie("NEXT_THEME") as string || "dark")
    }, []);

    const buttons = [];
    for (const themesKey in THEMES) {
        // @ts-ignore
        if (JSON.parse(getCookie("EXPERIMENTS") as string || "{}")?.theme?.high_contrast !== true && THEMES[themesKey] === "high_contrast") continue;
        buttons.push(
            <SettingButton
                /* @ts-ignore */
                key={THEMES[themesKey]} setValue={isTheme}
                /* @ts-ignore */
                isOpen={openTheme} translation={t(THEMES[themesKey])}
                /* @ts-ignore */
                change={[changeT, THEMES[themesKey]]}
            />
        )
    }

    const langs = ["en", "pl", "de"];
    const buttonsLang = [];
    for (const langValue of langs) {
        if (JSON.parse(getCookie("EXPERIMENTS") as string || "{}")?.lang?.german !== true && langValue === "de") continue;
        buttonsLang.push(
            <SettingButton
                key={langValue} setValue={lang}
                isOpen={openLang} translation={t(langValue)}
                change={[changeLocale, langValue]}
            />
        )
    }

    return <>
        <OptionButton toggle={toggleTheme} isSelfOpen={openTheme} isOpen={isOpen} translation={t("theme")}/>
        {/* @ts-ignore */}
        <SettingsList isOpen={openTheme}>
            {buttons}
        </SettingsList>
        <OptionButton toggle={toggleLang} isSelfOpen={openLang} isOpen={isOpen} translation={t("language")}/>
        {/* @ts-ignore */}
        <SettingsList isOpen={openLang}>
            {buttonsLang}
        </SettingsList>
    </>;
});

const OptionButton = (
    {toggle, translation, isSelfOpen, isOpen}:
        { toggle: () => void, translation: string, isSelfOpen: boolean, isOpen: boolean }
) => {
    return <>
        <OptionButtonStyle
            onClick={() => {
                toggle();
            }} // @ts-ignore
            tabIndex={isOpen ? "0" : "-1"}>
            <OptionTextSelector>
                {translation}
                {/* @ts-ignore */}
                <OptionFAIcon isSelfOpen={isSelfOpen}>
                    <FontAwesomeIcon icon={["fas", "angle-down"]}/>
                </OptionFAIcon>
            </OptionTextSelector>
        </OptionButtonStyle>
    </>;
}

const SettingButton = (
    {setValue, isOpen, translation, change}:
        { setValue: string, isOpen: boolean, translation: string, change: [(_: string) => void, string] }
) => {
    return <>
        {/* @ts-ignore */}
        <SettingsItemButton isOpen={isOpen} tabIndex={isOpen ? "0" : "-1"} onClick={() => {
            change[0](change[1]);
        }}>
            <SettingIcon>
                {setValue === change[1] ?
                    <FontAwesomeIcon icon={["fas", "circle-check"]}/> :
                    <FontAwesomeIcon icon={["far", "circle-xmark"]}/>
                }
            </SettingIcon>
            <SettingName>
                {translation}
            </SettingName>
        </SettingsItemButton>
    </>;
}

OptionList.displayName = "OptionList";
export default OptionList;