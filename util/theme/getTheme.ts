import {AMOLED, DARK, LEMPEK, LUNAR, LIGHT, HIGH_CONTRAST} from "./index";
import THEMES from "./theme";
import type {Theme} from "../../types/theme";

export const getTheme: (_: string) => Theme = themeName => {
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