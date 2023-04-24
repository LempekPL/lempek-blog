import {Property} from "csstype";

export type ThemeName = "light" | "dark" | "amoled" | "lempek" | "lunar" | "high_contrast"

export type Theme = {
    type: "light" | "dark" | "black" | "high_contrast"
    icon: string
    globalBackgroundColor: Property.Color
    globalBoxBackgroundColor: Property.Color
    globalTextColor: Property.Color

    primaryBackgroundColor: Property.Color
    primaryTextColor: Property.Color

    secondaryBackgroundColor: Property.Color
    secondaryTextColor: Property.Color


    navbarBackgroundColor: Property.Color
    navbarTextColor: Property.Color

    navbarMenuButtonBackgroundColor: Property.Color
    navbarMenuButtonIconColor: Property.Color

    navbarDropdownBorderColor: Property.Color
    navbarDropdownBackgroundColor: Property.Color
    navbarDropdownTextColor: Property.Color

    navbarDropdownSettingsBackgroundColor: Property.Color
    navbarDropdownSettingsTextColor: Property.Color


}