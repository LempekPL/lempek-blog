import {forwardRef, Ref, useImperativeHandle} from "react";
import useTranslation from "next-translate/useTranslation";
import useToggle from "../../hooks/useToggle";
import setLanguage from "next-translate/setLanguage";
import {getCookie, setCookie} from "cookies-next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    RadioButtonOpener, RadioButtonOpenerText,
    SettingsList, SettingsItemButton,
    SettingIcon, SettingName
} from "../../styles/Navbar/innerDrop";
import type {ThemeState, InnerDropdown} from "../../types/navbar";
import {localeList, themeList} from "../../types/navbar";

const OptionList = forwardRef((
    {isOpen, themeChanger: [themeName, setTheme]}: { isOpen: boolean, themeChanger: ThemeState },
    ref: Ref<InnerDropdown>
) => {
    const {t, lang} = useTranslation("navbar");
    const [openTheme, toggleTheme] = useToggle();
    const [openLang, toggleLang] = useToggle();

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

    const themeButtons: JSX.Element[] = [];
    for (const themeNameElement of themeList) {
        if (JSON.parse(getCookie("EXPERIMENTS") as string || "{}")?.theme?.high_contrast !== true && themeNameElement === "high_contrast") continue;
        themeButtons.push(<SettingButton
            key={themeNameElement} currValue={themeName}
            isOpen={openTheme} translation={t(themeNameElement)}
            change={[themeNameElement, setTheme]}
        />)
    }

    const localeButtons: JSX.Element[] = [];
    for (const langName of localeList) {
        if (JSON.parse(getCookie("EXPERIMENTS") as string || "{}")?.lang?.german !== true && langName === "de") continue;
        localeButtons.push(<SettingButton
            key={langName} currValue={lang}
            isOpen={openLang} translation={t(langName)}
            change={[langName, changeLocale]}
        />)
    }

    return <>
        <OptionButton toggle={toggleTheme} isSelfOpen={openTheme} isOpen={isOpen} translation={t("theme")}/>
        <SettingsList>
            {themeButtons.map((button) => button)}
        </SettingsList>
        <OptionButton toggle={toggleLang} isSelfOpen={openLang} isOpen={isOpen} translation={t("language")}/>
        <SettingsList>
            {localeButtons.map((button) => button)}
        </SettingsList>
    </>;
});

const OptionButton = (
    {toggle, translation, isSelfOpen, isOpen}:
        { toggle: () => void, translation: string, isSelfOpen: boolean, isOpen: boolean }
) => {
    return <RadioButtonOpener
        onClick={() => toggle()} tabIndex={isOpen ? 0 : -1}>
        <RadioButtonOpenerText $selfOpen={isSelfOpen}>
            {translation}
            <span><FontAwesomeIcon icon={["fas", "angle-down"]}/></span>
        </RadioButtonOpenerText>
    </RadioButtonOpener>;
}

const SettingButton = <T, >(
    {currValue, isOpen, translation, change}:
        { currValue: T, isOpen: boolean, translation: string, change: [T, (_: T) => void] }
) => {
    const checkMark = <FontAwesomeIcon icon={["fas", "circle-check"]}/>;
    const xMark = <FontAwesomeIcon icon={["far", "circle-xmark"]}/>;

    return <SettingsItemButton $open={isOpen} tabIndex={isOpen ? 0 : -1} onClick={() => {
        change[1](change[0]);
    }}>
        <SettingIcon>
            {currValue === change[0] ? checkMark : xMark}
        </SettingIcon>
        <SettingName>
            {translation}
        </SettingName>
    </SettingsItemButton>;
}

OptionList.displayName = "OptionList";
export default OptionList;