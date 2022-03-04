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
    RightBar, NavigationButtonLogin
} from "./navbar.style";
import OptionsList from "./OptionsList";
import {useState} from "react";
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
                    <NavigationLogin>
                        <Link href="/login">
                            <NavigationButtonLogin>
                                <FAbox faBox={{height: "1.25rem", display: "inline-block"}}
                                       faBoxSvg={{position: "relative"}}>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-user"/>
                                </FAbox>
                                <span>
                                    Login
                                </span>
                            </NavigationButtonLogin>
                        </Link>
                    </NavigationLogin>
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
                            <OptionsList changeTheme={changeTheme}/>
                        </DropdownSettings>
                    </DropdownMenu>}
                </RightBar>
            </NavigationBar>
        </nav>
    )
}