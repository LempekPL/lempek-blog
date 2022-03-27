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

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
}

class useStator {
    constructor(is, set) {
        this.is = is;
        this.set = set;
    }

    isOpen() {
        return this.is;
    }

    changeState() {
        this.set(!this.is);
    };

    close() {
        this.set(false);
    };
}

const useActiveElement = () => {
    const [active, setActive] = useState(null);

    const handleFocusIn = (e) => {
        setActive(document.activeElement);
    }

    useEffect(() => {
        document.addEventListener('focusin', handleFocusIn)
        return () => {
            document.removeEventListener('focusin', handleFocusIn)
        };
    }, [])

    return active;
}

const OptionsList = forwardRef(({changeTheme, isMain, isMenuOpen}, ref) => {
    const {t, lang} = useTranslation("navbar");
    const [isThemeState, setThemeState] = useState(false);
    const [isLangState, setLangState] = useState(false);
    const themeMenu = new useStator(isThemeState, setThemeState);
    const langMenu = new useStator(isLangState, setLangState);
    const [isTheme, setTheme] = useState(THEMES.DARK);
    const activeElement = useActiveElement();
    // useEffect(() => {
    //     if (activeElement) {
    //         activeElement.value && console.log(activeElement.value);
    //     }
    //     console.log(activeElement);
    // }, [activeElement])

    // allow closing options in parent
    useImperativeHandle(ref, () => ({
        close() {
            themeMenu.close();
            langMenu.close();
        },
    }))

    // callback for changing locale from another component
    const changeLocale = (localeName) => {
        (async () => {
            await setLanguage(localeName);
        })()
        setCookies("NEXT_LOCALE", localeName, OPTIONS);
    }

    const changeTh = (themeName) => {
        changeTheme(themeName);
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
                isOpen={themeMenu.isOpen()} translation={t(THEMES[themesKey])}
                change={[changeTh, THEMES[themesKey]]}
                activeElement={activeElement}
            />
        )
    }

    // all languages
    const langs = ["en", "pl", "de"];
    const buttonsLang = [];
    for (const langVal of langs) {
        if (JSON.parse(getCookie("EXPERIMENTS") || "{}")?.lang?.german !== true && langVal === "de") continue;
        buttonsLang.push(
            <SettingButton
                key={langVal} setValue={lang}
                isOpen={langMenu.isOpen()} translation={t(langVal)}
                change={[changeLocale, langVal]}
                activeElement={activeElement}
            />
        )
    }

    return (
        <>
            <OptionButton stator={themeMenu} isMenuOpen={isMenuOpen} translation={t("theme")}/>
            <SettingsList isOpen={themeMenu.isOpen()}>
                {buttons}
            </SettingsList>
            <OptionButton stator={langMenu} isMenuOpen={isMenuOpen} translation={t("language")}/>
            <SettingsList isOpen={langMenu.isOpen()}>
                {buttonsLang}
            </SettingsList>
        </>
    )
})

const OptionButton = ({stator, translation, isMenuOpen}) => {
    return (
        <SettingsButton onClick={() => {
            stator.changeState();
        }} tabIndex={isMenuOpen ? "0" : "-1"}>
            <OptionTextSelector>
                {translation}
                <FAsettings isOpen={stator.isOpen()} box={{
                    display: "inline-block"
                }} boxSvg={{position: "relative"}}>
                    <FontAwesomeIcon icon={["fas", "angle-down"]}/>
                </FAsettings>
            </OptionTextSelector>
        </SettingsButton>
    );
}

const SettingButton = ({setValue, isOpen, translation, change, activeElement}) => {
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