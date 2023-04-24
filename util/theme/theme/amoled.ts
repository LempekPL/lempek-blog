import DARK from "./dark";
import {Theme} from "../../../types/theme";

const amoled: Theme = {
    ...DARK,
    type: "dark",
    icon: "/otherFavicons/lempekdesignamoled.ico",
    globalBackgroundColor: "#050505",
    globalBoxBackgroundColor: "#000000",
    globalTextColor: "#b4b4b4",

    primaryBackgroundColor: "#0c0c0c",
    primaryTextColor: "#707070",


    navbarBackgroundColor: "#0a0a0a",
    navbarTextColor: "#d2d2d2",

    navbarMenuButtonBackgroundColor: "#262626",
    navbarMenuButtonIconColor: "#d2d2d2",

    navbarDropdownBorderColor: "#2a2a2a",
    navbarDropdownBackgroundColor: "#212121",
    navbarDropdownTextColor: "#e7e7e7",

    navbarDropdownSettingsBackgroundColor: "#2a2a2a",
    navbarDropdownSettingsTextColor: "#737373",
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

export default amoled;