import dark from "./theme/dark";
import light from "./theme/light";
import amoled from "./theme/amoled";
import lempek from "./theme/lempek";
import lunar from "./theme/lunar";
import highContrast from "./theme/high_contrast";
import {Theme, ThemeName} from "../../types/theme";

export const getTheme = (name: ThemeName): Theme => {
    switch (name) {
        case "light":
            return light;
        case "amoled":
            return amoled;
        case "lempek":
            return lempek;
        case "lunar":
            return lunar;
        case "high_contrast":
            return highContrast;
        default:
            return dark;
    }
}