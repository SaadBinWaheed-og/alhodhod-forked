'use client';

import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(localStorage.getItem('lang') ? localStorage.getItem('lang')?.toUpperCase() : "US");
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    changeLanguage(selectedLanguage.toLowerCase());
  };

  useEffect(() => {
    localStorage.setItem('lang', language?.toLowerCase() || 'us');
  }, [language]);

  return (
    <div>
      <ReactFlagsSelect
        className="border-transparent mt-2"
        selected={language || 'us'}
        countries={["US", "SA", "FR"]}
        customLabels={{
          US: "English",
          SA: "Arabic",
          FR: "French",
        }}
        onSelect={(countryCode) => handleLanguageChange(countryCode)}
        showOptionLabel={false}
        showSelectedLabel={false}
        fullWidth={false}
        selectButtonClassName="bg-inherit border-transparent"
      />
    </div>
  );
};

export default LanguageSwitcher;
