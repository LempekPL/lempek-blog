import type {Theme} from "../../../types/theme";

const dark: Theme = {
    type: "dark",
    icon: "/otherFavicons/lempekdesigndark.ico",
    globalBackgroundColor: "#595959",
    globalBoxBackgroundColor: "#505050",
    globalTextColor: "#4b4b4b",

    primaryBackgroundColor: "#646464",
    primaryTextColor: "#adadad",

    secondaryBackgroundColor: "red", // placeholder
    secondaryTextColor: "red", // placeholder


    navbarBackgroundColor: "#4b4b4b",
    navbarTextColor: "#eee",

    navbarMenuButtonBackgroundColor: "#545454",
    navbarMenuButtonIconColor: "#eee",

    navbarDropdownBorderColor: "#757575",
    navbarDropdownBackgroundColor: "#626262",
    navbarDropdownTextColor: "#d7d7d7",

    navbarDropdownSettingsBackgroundColor: "#757575",
    navbarDropdownSettingsTextColor: "#b7b7b7",

}

// navbar_background:        "#4b4b4b", - nav bg
// navbar_button:            "#545454", - nav button bg
// navbar_text_button:       "#eee", - navbar text and nav button icon
// dropdown_button_backg:    "transparent",
// dropdown_text_button:     "#d7d7d7", - nav text col
// dropdown_button:          "#626262", - nav drop bg
// dropdown_settings_border: "#b7b7b7", - nav drop sett text
// dropdown_drop_settings_background: "#757575", - nav drop setting bg and nav drop border
// background_box:   "#505050", - global box bg
// background:       "#595959", - global bg
// text:             "#b4b4b4", - global text
// search_bar:       "#646464" - primarybg
export default dark;