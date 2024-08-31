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
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAAD1BMVEXOESb///8AJlR/kqnzxMlwvJaeAAAApUlEQVR4nO3PQREAIAgAMAT6ZzYEeOdja7DIuTpbOh4wNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0/GJ4AUOofWVeGcMdAAAAAElFTkSuQmCC",
  },
};

export const LocaleSwitch = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const handleSwitch = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    changeLocale(newLocale);
  };

  return (
    <Button
      onClick={handleSwitch}
      title={`Switch to ${locale === "en" ? "Français" : "English"}`}
      className="p-0 h-auto"
    >
      <Avatar>
        <AvatarImage
          src={languageOptions[locale].flagUrl}
          alt={languageOptions[locale].label}
        />
        <AvatarFallback>{locale.toUpperCase()}</AvatarFallback>
      </Avatar>
    </Button>
  );
};
