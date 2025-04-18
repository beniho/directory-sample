import { useEffect, useState } from "react";
import { defaultSettings } from "../constants";
import { Settings } from "../types";

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(() => {
    const savedSettings = localStorage.getItem("settings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return { settings, updateSettings };
};
