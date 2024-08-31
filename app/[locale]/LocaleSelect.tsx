"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaFlagUsa } from "react-icons/fa";

const languageOptions = {
  en: {
    label: "English",
    icon: <FaFlagUsa />,
    flagUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsO852gjGqy9MLGVdw6-UQVA-sEIzzn3AqIw&s",
  },
  fr: {
    label: "Français",
    icon: <FaFlagUsa />,
    flagUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolA31NBfQ-dh7zzgLHCGlHKAGmf6I0GqZbQ&s",
  },
};

export const LocaleSelect = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const handleSwitch = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    changeLocale(newLocale);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleSwitch}
      title={`Switch to ${locale === "en" ? "Français" : "English"}`}
      className="w-8 h-8 p-0"
    >
      <Avatar>
        <AvatarImage
          src={languageOptions[locale].flagUrl}
          alt={languageOptions[locale].label}
          //className="w-6 h-6"
        />
        <AvatarFallback className="text-xs">
          {locale.toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </Button>
  );
};
