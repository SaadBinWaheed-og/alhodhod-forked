'use client';

import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("");
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    changeLanguage(selectedLanguage.toLowerCase());
  };

  useEffect(() => {
    if (localStorage && language) {
      localStorage.setItem('lang', language?.toLowerCase());
    }
  }, [language]);

  useEffect(() => {
    if (!language){
      if (localStorage) {
        handleLanguageChange(localStorage.getItem('lang')?.toLocaleUpperCase() || 'US');
      }
      else {
        handleLanguageChange('US');
      }
    }
  }, []);

  return (
    <div>
      <ReactFlagsSelect
        className="border-transparent mt-2"
        selected={language || 'US'}
        countries={["US", "FR"]}
        customLabels={{
          US: "English",
          FR: "French",
        }}
        onSelect={(countryCode) => handleLanguageChange(countryCode)}
        showOptionLabel={false}
        showSelectedLabel={false}
        fullWidth={true}
        selectButtonClassName="bg-inherit border-transparent"
      />
    </div>
  );
};

export default LanguageSwitcher;
