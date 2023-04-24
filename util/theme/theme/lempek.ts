import DARK from "./dark";
import {Theme} from "../../../types/theme";

const lempek: Theme = {
    ...DARK,
    type: "dark",
    icon: "/otherFavicons/lempekdesigngreen.ico",
    globalBackgroundColor: "#005b0e",
    globalBoxBackgroundColor: "#006c10",
    globalTextColor: "#ccc",

    primaryBackgroundColor: "#00540a",
    primaryTextColor: "#afafaf",


    navbarBackgroundColor: "#006300",
    navbarTextColor: "#e7e7e7",

    navbarMenuButtonBackgroundColor: "#1e8600",
    navbarMenuButtonIconColor: "#e7e7e7",

    navbarDropdownBorderColor: "#009300",
    navbarDropdownBackgroundColor: "#008600",
    navbarDropdownTextColor: "#ddd",

    navbarDropdownSettingsBackgroundColor: "#009300",
    navbarDropdownSettingsTextColor: "#e5e5e5",
}

export default lempek;

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