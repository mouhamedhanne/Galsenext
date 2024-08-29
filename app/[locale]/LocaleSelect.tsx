"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { FaFlagUsa } from "react-icons/fa";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

const languageOptions = {
  en: {
    label: "English",
    icon: <FaFlagUsa />,
  },
  fr: {
    label: "Français",
    icon: <FaFlagUsa />,
  },
};

export const LocaleSelect = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <Select
      onValueChange={(value) => changeLocale(value as "en" | "fr")}
      value={locale}
    >
      <SelectTrigger className="flex items-center space-x-2">
        {languageOptions[locale]?.icon}
        <SelectValue placeholder={languageOptions[locale]?.label} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languageOptions).map(([key, { label, icon }]) => (
          <SelectItem key={key} value={key}>
            <span className="flex items-center space-x-2">
              {icon} <span>{label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
