import {useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Navbar, NavHome, BunDev, NavDrop, NavDropIcon} from "../../styles/Navbar/navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useToggle from "../../hooks/useToggle";
import DropdownComponent from "./Dropdown";
import useOutside from "../../hooks/useOutside";
import type {ThemeState, InnerDropdown} from "../../types/navbar";
import bunDevIcon from "../../public/images/bunDev.svg"
import {FlexSpace} from "../../styles/universal";

export const NavbarComponent = ({themeChanger}: { themeChanger: ThemeState }) => {
    // easter egg
    const [clicked, setClick] = useState(0);
    const [isOpen, toggleMenu] = useToggle(false);
    const innerDropdowns = useRef<InnerDropdown | null>(null);

    const closeDropdowns = () => {
        toggleMenu(false);
        innerDropdowns.current?.close();
        setClick(0);
    }

    const toggleDropdown = () => {
        toggleMenu();
        setClick(clicked + 1);
        if (isOpen) innerDropdowns.current?.close();
    }

    // close dropdowns when clicked outside of navbar menu
    const outsideRef = useRef(null);
    useOutside(outsideRef, closeDropdowns);

    return <div ref={outsideRef}>
        <Navbar>
            <Link href="/" passHref tabIndex={-1}>
                <NavHome>
                    <span className="bold">LEMPEK</span>
                </NavHome>
            </Link>
            <BunDev tabIndex={0} $clicked={clicked}>
                <Image src={bunDevIcon} alt="BunDev" priority={true}/>
                <span>HI!</span>
            </BunDev>
            <FlexSpace/>
            {/*<Link href={"/login"} passHref tabIndex={-1}>*/}
            {/*    <NavLogin lang={lang}>*/}
            {/*        <UserIcon lang={lang}>*/}
            {/*            /!* @ts-ignore *!/*/}
            {/*            {useIcon(<FontAwesomeIcon icon={["fas", "circle-user"]}/>)}*/}
            {/*        </UserIcon>*/}
            {/*        <span>{t("login")}</span>*/}
            {/*    </NavLogin>*/}
            {/*</Link>*/}
            <NavDrop onClick={toggleDropdown} $open={isOpen} $closer={closeDropdowns}>
                <NavDropIcon>
                    <FontAwesomeIcon icon={["fas", "xmark"]}/>
                    <FontAwesomeIcon icon={["fas", "bars"]}/>
                </NavDropIcon>
            </NavDrop>
        </Navbar>
        <DropdownComponent ref={innerDropdowns} isOpen={isOpen} themeChanger={themeChanger} closer={closeDropdowns}/>
    </div>;
}