import {DropdownItem, DropdownText, SettingsList} from "./navbar.style";
import THEMES from "../../util/themes/theme";
import {useEffect} from "react";
import {setCookies} from "cookies-next";
import Link from "next/link";
import setLanguage from "next-translate/setLanguage";

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
}

export default ({changeTheme}) => {

    // callback for changing locale from another component
    const changeLocale = (localeName) => {
        (async () => {
            await setLanguage(localeName);
        })()
        setCookies("NEXT_LOCALE", localeName, OPTIONS);
    }

    const isThemesOpen = true;
    const isLocalesOpen = true;
    return (
        <>
            {isThemesOpen && <SettingsList>
                <DropdownItem onClick={() => {
                    changeTheme(THEMES.LIGHT);
                }}>
                    <DropdownText>
                        LIGHT
                    </DropdownText>
                </DropdownItem>
                <DropdownItem onClick={() => {
                    changeTheme(THEMES.DARK);
                }}>
                    <DropdownText>
                        DARK
                    </DropdownText>
                </DropdownItem>
            </SettingsList>
            }
            {isLocalesOpen && <SettingsList>
                <DropdownItem onClick={() => {
                    changeLocale("pl");
                }}>
                    <DropdownText>
                        PL
                    </DropdownText>
                </DropdownItem>
                <DropdownItem onClick={() => {
                    changeLocale("en");
                }}>
                    <DropdownText>
                        EN
                    </DropdownText>
                </DropdownItem>
            </SettingsList>
            }
        </>
    )
}