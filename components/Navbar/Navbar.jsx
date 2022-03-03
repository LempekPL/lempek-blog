import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    NavigationBar,
    NavigationDropdown,
    NavigationHome,
    NavigationLogin,
    DropdownItem,
    DropdownText,
    DropdownMenu,
    DropdownSettings,
    RightBar, NavigationButtonLogin, SettingsList
} from "./navbar.style";
import {useState} from "react";
import THEMES from "../../util/themes/theme";
import {FAbox} from "../useful-components.style";

export default ({changeTheme}) => {
    const [isMenuOpen, setOpenMenu] = useState(false);

    const changeMenuState = () => {
        setOpenMenu(!isMenuOpen);
    };

    const closeMenu = () => {
        setOpenMenu(false);
    };

    return (
        <nav className="move-content-under-navbar">
            <NavigationBar>
                <Link href="/" tabindex="0">
                    <NavigationHome>
                            <span className="bold">
                            LEMPEK
                            </span>
                    </NavigationHome>
                </Link>
                <RightBar>
                    <Link href="/login">
                        <NavigationLogin>
                            <NavigationButtonLogin>
                                <FAbox faBox={{height: "1.25rem", display: "inline-block"}} faBoxSvg={{position: "relative"}}>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                                </FAbox>
                                <span>
                                    Login
                                </span>
                            </NavigationButtonLogin>
                        </NavigationLogin>
                    </Link>
                    <NavigationDropdown onClick={changeMenuState} isOpen={isMenuOpen}>
                        <FAbox>
                            <FontAwesomeIcon icon={["fas", "xmark"]}/>
                            <FontAwesomeIcon icon={["fas", "bars"]}/>
                        </FAbox>
                    </NavigationDropdown>
                    {isMenuOpen && <DropdownMenu>
                        <Link href="/">
                            <DropdownItem onClick={closeMenu}>
                                <DropdownText>
                                    Home
                                </DropdownText>
                            </DropdownItem>
                        </Link>
                        <Link href="/about">
                            <DropdownItem onClick={closeMenu}>
                                <DropdownText>
                                    About
                                </DropdownText>
                            </DropdownItem>
                        </Link>
                        <DropdownSettings>
                            {isMenuOpen && <SettingsList>
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
                            </SettingsList>}
                        </DropdownSettings>
                    </DropdownMenu>}
                </RightBar>
            </NavigationBar>
        </nav>
    )
}