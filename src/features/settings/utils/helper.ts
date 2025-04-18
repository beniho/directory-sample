import { Settings } from "../types";

/**
 * Get system dark mode setting
 * @returns true if system is in dark mode
 */
export const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * Get active theme from settings
 * @param settings Settings object
 * @returns Active theme ('light' or 'dark')
 */
export const getActiveTheme = (settings: Settings): "light" | "dark" => {
  if (settings.theme === "system") {
    return getSystemTheme();
  }

  return settings.theme;
};
