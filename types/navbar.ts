import {ThemeName} from "./theme";

export type ChangeTheme = (themeName: ThemeName) => void;

export type ThemeState = [ThemeName, ChangeTheme];

export const themeList: ThemeName[] = ["light", "dark", "amoled", "lempek", "lunar", "high_contrast"]

export type LocaleName = "en" | "pl" | "de";

export const localeList: LocaleName[] = ["en", "pl", "de"];

export interface InnerDropdown {
    close: () => void
}
