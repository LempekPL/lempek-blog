import Link from "next/link";
import Image from "next/image";
import {useRef, useState} from "react";
import useTranslation from "next-translate/useTranslation";
import {
    NavBar, NavHome,
    BunDev, RightSide,
    NavLogin, UserIcon,
    NavDrop, NavDropIcon
} from "../../styles/Navbar/navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useToggle from "../../hooks/useToggle";
import Dropdown from "./Dropdown";
import type {ChangeTheme, RefOptions} from "../../types/navbar";
import useOutside from "../../hooks/useOutside";
import useIcon from "../../hooks/useIcon";
import bunDevIcon from "../../public/images/bunDev.svg"

const Navbar = ({changeTheme}: { changeTheme: ChangeTheme }) => {
    const [clicked, setClick] = useState(0);
    const addClick = () => setClick(clicked + 1);
    const resetClick = () => setClick(0);
    const {t, lang} = useTranslation("navbar");

    const [isOpen, toggleMenu] = useToggle(false);
    const innerDropdowns = useRef<RefOptions>();

    const closer = () => {
        toggleMenu(false);
        innerDropdowns.current?.close();
        resetClick();
    }

    const outsideRef = useRef(null);
    useOutside(outsideRef, () => closer());


    return <>
        <div ref={outsideRef}>
            <NavBar>
                <Link href="/" passHref tabIndex={-1}>
                    <NavHome>
                        <span className="bold">LEMPEK</span>
                    </NavHome>
                </Link>
                {/* @ts-ignore */}
                <BunDev tabIndex={"0"} clicked={clicked}>
                    <Image src={bunDevIcon} alt="BunDev" priority={true}/>
                    <span>HI!</span>
                </BunDev>
                <RightSide>
                    {/*<Link href={"/login"} passHref tabIndex={-1}>*/}
                    {/*    <NavLogin lang={lang}>*/}
                    {/*        <UserIcon lang={lang}>*/}
                    {/*            /!* @ts-ignore *!/*/}
                    {/*            {useIcon(<FontAwesomeIcon icon={["fas", "circle-user"]}/>)}*/}
                    {/*        </UserIcon>*/}
                    {/*        <span>{t("login")}</span>*/}
                    {/*    </NavLogin>*/}
                    {/*</Link>*/}
                    <NavDrop onClick={() => {
                        toggleMenu();
                        addClick();
                        if (isOpen) innerDropdowns.current?.close();
                    }} // @ts-ignore
                             isOpen={isOpen} closer={closer}>
                        <NavDropIcon>
                            {useIcon(<FontAwesomeIcon icon={["fas", "xmark"]}/>)}
                            {useIcon(<FontAwesomeIcon icon={["fas", "bars"]}/>)}
                        </NavDropIcon>
                    </NavDrop>
                </RightSide>
            </NavBar>
            {/* @ts-ignore */}
            <Dropdown isOpen={isOpen} ref={innerDropdowns} changeTheme={changeTheme} closer={closer}/>
        </div>
    </>;
}

export default Navbar;