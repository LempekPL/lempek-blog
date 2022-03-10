import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    NavigationBar,
    NavigationDropdown,
    NavigationHome,
    DropdownText,
    DropdownMenu,
    DropdownButton,
    DropdownSettings,
    RightSide,
    NavigationButtonLogin
} from "./navbar.style";
import OptionsList from "./OptionsList";
import {useRef, useState} from "react";
import {FAbox} from "../useful-components.style";
import useTranslation from "next-translate/useTranslation";

const Navbar = ({changeTheme}) => {
    const {t, lang} = useTranslation("navbar");

    const [isMenuOpen, setOpenMenu] = useState(false);
    const changeMenuState = () => {
        if (isMenuOpen) {
            themeAndLang.current.close()
        }
        setOpenMenu(!isMenuOpen);
    };
    const closeMenu = () => {
        setOpenMenu(false);
        themeAndLang.current.close()
    };

    const themeAndLang = useRef();

    return (
        <>
            <NavigationBar>
                <Link href="/" passHref>
                    <NavigationHome>
                            <span className="bold">
                            LEMPEK
                            </span>
                    </NavigationHome>
                </Link>
                <RightSide>
                    <Link href={"/login"} passHref>
                        <NavigationButtonLogin lang={lang}>
                            <FAbox faBox={{
                                height: lang === "pl" ? "1rem" : "1.25rem",
                                display: "inline-block",
                                padding: "0 0.25rem 0 0"
                            }} faBoxSvg={{position: "relative"}} faRemove={{width: "500px", langs: ["pl"]}} lang={lang}>
                                <FontAwesomeIcon icon="fa-solid fa-circle-user"/>
                            </FAbox>
                            <span>{t("login")}</span>
                        </NavigationButtonLogin>
                    </Link>
                    <NavigationDropdown onClick={changeMenuState} isOpen={isMenuOpen}>
                        <FAbox>
                            <FontAwesomeIcon icon={["fas", "xmark"]}/>
                            <FontAwesomeIcon icon={["fas", "bars"]}/>
                        </FAbox>
                    </NavigationDropdown>
                </RightSide>
            </NavigationBar>
            <DropdownMenu isOpen={isMenuOpen}>
                <Link href="/" passHref>
                    <DropdownButton onClick={closeMenu} tabIndex={isMenuOpen ? "0" : "-1"}>
                        <DropdownText>
                            {t("home")}
                        </DropdownText>
                    </DropdownButton>
                </Link>
                <Link href={"/about"} passHref>
                    <DropdownButton onClick={closeMenu} tabIndex={isMenuOpen ? "0" : "-1"}>
                        <DropdownText>
                            {t("about")}
                        </DropdownText>
                    </DropdownButton>
                </Link>
                <DropdownSettings>
                    <OptionsList changeTheme={changeTheme} ref={themeAndLang} isMenuOpen={isMenuOpen}/>
                </DropdownSettings>
            </DropdownMenu>
        </>
    )
}

export default Navbar;