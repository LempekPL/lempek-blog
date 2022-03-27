import {AMOLED, DARK, LEMPEK, LUNAR, LIGHT, HIGH_CONTRAST} from "./index";
import THEMES from "./theme";

export const getTheme = themeName => {
    switch (themeName) {
        case THEMES.LIGHT:
            return LIGHT;
        case THEMES.LEMPEK:
            return LEMPEK;
        case THEMES.LUNAR:
            return LUNAR;
        case THEMES.AMOLED:
            return AMOLED;
        case THEMES.HIGH_CONTRAST:
            return HIGH_CONTRAST;
        default:
            return DARK;
    }
}