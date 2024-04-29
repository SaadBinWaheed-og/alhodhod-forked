'use client';

import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
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
      if (language == "US" || language == "us") {
        router.push(`${pathname}?lang=en`);
      }
      else {
        router.push(`${pathname}?lang=${language?.toLocaleLowerCase()}`);
      }
    }
  }, [language]);

  useEffect(() => {
    if (localStorage && language) {
      localStorage.setItem('lang', language?.toLowerCase());
      if (language == "US" || language == "us") {
        router.push(`${pathname}?lang=en`);
      }
      else {
        router.push(`${pathname}?lang=${language?.toLocaleLowerCase()}`);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (!language){
      const urlParams = new URLSearchParams(window.location.search);
      const langFromUrl = urlParams.get('lang');
      if (langFromUrl) {
        if (langFromUrl == "EN" || langFromUrl == "en") {
          handleLanguageChange('US');
        }
        else{
          handleLanguageChange(langFromUrl?.toLocaleUpperCase());
        }
      }
      else {
        if (localStorage) {
          const langFromLocalStorage = localStorage.getItem('lang');
          handleLanguageChange(langFromLocalStorage?.toLocaleUpperCase() || 'US');
        } else {
          handleLanguageChange('US');
        }
      }
    }
  }, []);

  return (
    <div>
      <ReactFlagsSelect
        className="border-transparent mt-2"
        selected={language || 'US'}
        countries={["US", "FR", "SA"]}
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
