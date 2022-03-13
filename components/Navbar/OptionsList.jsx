import THEMES from "../../util/themes/theme";
import {getCookie, setCookies} from "cookies-next";
import setLanguage from "next-translate/setLanguage";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import useTranslation from "next-translate/useTranslation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FAbox} from "../useful-components.style";
import {
    SettingsList,
    OptionTextSelector,
    SettingsButton,
    SettingsItemButton,
    OptionText,
    FAsettings
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

const OptionsList = forwardRef(({changeTheme, isMain, isMenuOpen}, ref) => {
    const {t, lang} = useTranslation("navbar");
    const [isThemeState, setThemeState] = useState(false);
    const [isLangState, setLangState] = useState(false);
    const themeMenu = new useStator(isThemeState, setThemeState);
    const langMenu = new useStator(isLangState, setLangState);
    const [isTheme, setTheme] = useState(THEMES.DARK);

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

    useEffect(() => {setTheme(getCookie("NEXT_THEME") || "dark")}, []);

    return (
        <>
            <div>
                <OptionButton stator={themeMenu} isMenuOpen={isMenuOpen} translation={t("theme")}/>
                <SettingsList isOpen={themeMenu.isOpen()}>
                    <SettingButton setValue={isTheme} isOpen={themeMenu.isOpen()} translation={t("light")} fun={changeTh} val={THEMES.LIGHT}/>
                    <SettingButton setValue={isTheme} isOpen={themeMenu.isOpen()} translation={t("dark")} fun={changeTh} val={THEMES.DARK}/>
                    <SettingButton setValue={isTheme} isOpen={themeMenu.isOpen()} translation={t("amoled")} fun={changeTh} val={THEMES.AMOLED}/>
                    <SettingButton setValue={isTheme} isOpen={themeMenu.isOpen()} translation={t("lempek")} fun={changeTh} val={THEMES.LEMPEK}/>
                    <SettingButton setValue={isTheme} isOpen={themeMenu.isOpen()} translation={t("lunar")} fun={changeTh} val={THEMES.LUNAR}/>
                </SettingsList>
            </div>
            <div>
                <OptionButton stator={langMenu} isMenuOpen={isMenuOpen} translation={t("language")}/>
                <SettingsList isOpen={langMenu.isOpen()}>
                    <SettingButton setValue={lang} isOpen={langMenu.isOpen()} translation={t("en")} fun={changeLocale} val={"en"}/>
                    <SettingButton setValue={lang} isOpen={langMenu.isOpen()} translation={t("pl")} fun={changeLocale} val={"pl"}/>
                </SettingsList>
            </div>
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

const SettingButton = ({setValue, isOpen, translation, fun, val}) => {
    return (
        <SettingsItemButton isOpen={isOpen} tabIndex={isOpen ? "0" : "-1"} onClick={() => {
            fun(val);
        }}>
            <OptionText>
                <FAbox box={{
                    display: "inline",
                    height: "60%",
                    float: "left",
                    padding: ".5rem"
                }} boxSvg={{position: "relative"}}
                faChange={{style: {padding: ".8rem"}, width: "500px"}}>
                    {setValue === val ? <FontAwesomeIcon icon={["fas", "circle-check"]} /> : <FontAwesomeIcon icon={["far", "circle-xmark"]} />}
                </FAbox>
                {translation}
            </OptionText>
        </SettingsItemButton>
    );
}

OptionsList.displayName = "OptionsList";
export default OptionsList;