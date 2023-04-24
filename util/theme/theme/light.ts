import DARK from "./dark";
import {Theme} from "../../../types/theme";

const light: Theme = {
    ...DARK,
    type: "light",
    icon: "/otherFavicons/lempekdesignlight.ico",
    globalBackgroundColor: "#fff",
    globalBoxBackgroundColor: "#e5e5e5",
    globalTextColor: "#000",

    primaryBackgroundColor: "#d5d5d5",
    primaryTextColor: "#000000",


    navbarBackgroundColor: "#c5c5c5",
    navbarTextColor: "#000000",

    navbarMenuButtonBackgroundColor: "#b9b9b9",
    navbarMenuButtonIconColor: "#000000",

    navbarDropdownBorderColor: "#8f8f8f",
    navbarDropdownBackgroundColor: "#b8b8b8",
    navbarDropdownTextColor: "#000000",

    navbarDropdownSettingsBackgroundColor: "#a8a8a8",
    navbarDropdownSettingsTextColor: "#000000",
}

export default light;

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