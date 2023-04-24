import {forwardRef, Ref} from "react";
import {Dropdown, DropButton, DropText, DropSettings, DropLogin} from "../../styles/Navbar/dropdown";
import OptionList from "./innerDrop";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import type {ThemeState, InnerDropdown} from "../../types/navbar";

const DropdownComponent = forwardRef((
    {isOpen, themeChanger, closer}: { isOpen: boolean, themeChanger: ThemeState, closer: VoidFunction },
    ref: Ref<InnerDropdown>
) => {
    const {t} = useTranslation("navbar");

    return <>
        <Dropdown $open={isOpen}>
            <Link href="/" passHref tabIndex={-1}>
                <DropButton onClick={closer} tabIndex={isOpen ? 0 : -1}>
                    <DropText>
                        {t("home")}
                    </DropText>
                </DropButton>
            </Link>
            {/*<Link href={"/login"} passHref tabIndex={-1}>*/}
            {/*    /!* @ts-ignore*!/*/}
            {/*    <DropLogin onClick={closer} tabIndex={isOpen ? "0" : "-1"}>*/}
            {/*        <DropText>*/}
            {/*            {t("login")}*/}
            {/*        </DropText>*/}
            {/*    </DropLogin>*/}
            {/*</Link>*/}
            <Link href={"/about"} passHref tabIndex={-1}>
                <DropButton onClick={closer} tabIndex={isOpen ? 0 : -1}>
                    <DropText>
                        {t("about")}
                    </DropText>
                </DropButton>
            </Link>
            <Link href={"/changelog"} passHref tabIndex={-1}>
                <DropButton onClick={closer} tabIndex={isOpen ? 0 : -1}>
                    <DropText>
                        {t("changelog")}
                    </DropText>
                </DropButton>
            </Link>
            <Link href={"/experiments"} passHref tabIndex={-1}>
                <DropButton onClick={closer} tabIndex={isOpen ? 0 : -1}>
                    <DropText>
                        {t("experiments")}
                    </DropText>
                </DropButton>
            </Link>
            <DropSettings>
                <OptionList themeChanger={themeChanger} ref={ref} isOpen={isOpen}/>
            </DropSettings>
        </Dropdown>
    </>;
})

DropdownComponent.displayName = "Dropdown";
export default DropdownComponent;