import {forwardRef, Ref} from "react";
import {
    Drop, DropButton, DropText, DropSettings, DropLogin
} from "../../styles/Navbar/dropdown";
import OptionList from "./innerDrop";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import type {ChangeTheme, RefOptions} from "../../types/navbar";

const Dropdown = forwardRef((
    {isOpen, changeTheme, closer}:
        { isOpen: boolean, changeTheme: ChangeTheme, closer: () => void },
    ref: Ref<RefOptions>) => {
    const {t} = useTranslation("navbar");

    return <>
        {/* @ts-ignore*/}
        <Drop isOpen={isOpen}>
            <Link href="/" passHref>
                {/* @ts-ignore*/}
                <DropButton onClick={closer} tabIndex={isOpen ? "0" : "-1"}>
                    <DropText>
                        {t("home")}
                    </DropText>
                </DropButton>
            </Link>
            <Link href={"/login"} passHref>
                {/* @ts-ignore*/}
                <DropLogin onClick={closer} tabIndex={isOpen ? "0" : "-1"}>
                    <DropText>
                        {t("login")}
                    </DropText>
                </DropLogin>
            </Link>
            <Link href={"/about"} passHref>
                {/* @ts-ignore*/}
                <DropButton onClick={closer} tabIndex={isOpen ? "0" : "-1"}>
                    <DropText>
                        {t("about")}
                    </DropText>
                </DropButton>
            </Link>
            <Link href={"/changelog"} passHref>
                {/* @ts-ignore*/}
                <DropButton onClick={closer} tabIndex={isOpen ? "0" : "-1"}>
                    <DropText>
                        {t("changelog")}
                    </DropText>
                </DropButton>
            </Link>
            <Link href={"/experiments"} passHref>
                {/* @ts-ignore*/}
                <DropButton onClick={closer} tabIndex={isOpen ? "0" : "-1"}>
                    <DropText>
                        {t("experiments")}
                    </DropText>
                </DropButton>
            </Link>
            <DropSettings>
                <OptionList changeTheme={changeTheme} ref={ref} isOpen={isOpen}/>
            </DropSettings>
        </Drop>
    </>;
})

Dropdown.displayName = "Dropdown";
export default Dropdown;