import Link from "next/link";
import Image from "next/image";
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
    NavigationButtonLogin,
    EastereggBundev
} from "./navbar.style";
import OptionsList from "./OptionsList";
import {useRef, useState} from "react";
import {FAbox} from "../useful-components.style";
import useTranslation from "next-translate/useTranslation";

const Navbar = ({changeTheme}) => {
    const {t, lang} = useTranslation("navbar");
    const [clicked, setClick] = useState(0);
    const addClick = () => setClick(clicked + 1);
    const resetClick = () => setClick(0);

    const [isMenuOpen, setOpenMenu] = useState(false);
    const changeMenuState = () => {
        if (isMenuOpen) {
            themeAndLang.current.close();
        }
        setOpenMenu(!isMenuOpen);
    };
    const closeMenu = () => {
        setOpenMenu(false);
        themeAndLang.current.close();
        resetClick();
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
                <EastereggBundev tabIndex={"0"} clicked={clicked}>
                    <Image src="/images/bunDev.svg" alt="BunDev" height={"100%"} width={"100%"}/>
                    <span>HI!</span>
                </EastereggBundev>
                <RightSide>
                    <Link href={"/login"} passHref>
                        <NavigationButtonLogin lang={lang}>
                            <FAbox box={{
                                height: lang === "pl" ? "1rem" : "1.25rem",
                                display: "inline-block",
                                padding: "0 0.25rem 0 0"
                            }} boxSvg={{position: "relative"}} faRemove={{width: "500px", langs: ["pl"]}} lang={lang}>
                                <FontAwesomeIcon icon="fa-solid fa-circle-user"/>
                            </FAbox>
                            <span>{t("login")}</span>
                        </NavigationButtonLogin>
                    </Link>
                    <NavigationDropdown onClick={() => {
                        changeMenuState();
                        addClick();
                    }} isOpen={isMenuOpen}>
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
                <Link href={"/changelog"} passHref>
                    <DropdownButton onClick={closeMenu} tabIndex={isMenuOpen ? "0" : "-1"}>
                        <DropdownText>
                            {t("changelog")}
                        </DropdownText>
                    </DropdownButton>
                </Link>
                <Link href={"/experiments"} passHref>
                    <DropdownButton onClick={closeMenu} tabIndex={isMenuOpen ? "0" : "-1"}>
                        <DropdownText>
                            {t("experiments")}
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