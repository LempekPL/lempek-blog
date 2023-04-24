import DARK from "./dark";
import {Theme} from "../../../types/theme";

const lunar: Theme = {
    ...DARK,
    type: "dark",
    icon: "/otherFavicons/lempekdesigngreen.ico",
    globalBackgroundColor: "#001b4b",
    globalBoxBackgroundColor: "#00163b",
    globalTextColor: "#ccc",

    primaryBackgroundColor: "#002c70",
    primaryTextColor: "#cdd9de",


    navbarBackgroundColor: "#001646",
    navbarTextColor: "#d2d2d2",

    navbarMenuButtonBackgroundColor: "#001b4b",
    navbarMenuButtonIconColor: "#e7e7e7",

    navbarDropdownBorderColor: "#002f86",
    navbarDropdownBackgroundColor: "#002367",
    navbarDropdownTextColor: "#e7e7e7",

    navbarDropdownSettingsBackgroundColor: "#002467",
    navbarDropdownSettingsTextColor: "#e7e7e7",
}

export default lunar;

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