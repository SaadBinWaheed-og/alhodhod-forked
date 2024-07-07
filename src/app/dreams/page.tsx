"use client";
import * as Styled from './page.styled';
import { useState, useEffect } from "react";
import { ArabesqueIcon, CaretDownIconGray } from "../common/customIcons";
import { AdvertisementContained } from "../common/components/Advertisement";
import { CsvRow } from '../../../pages/api/read-csv';
import Arabesque from "public/images/arabesque.svg";
import LoadingSpinner from "../common/components/LoadingSpinner/LoadingSpinner";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n";

export default function Dreams() {
  const { t } = useTranslation();
  const [isInterpretationVisible, setInterpretationVisible] = useState(9999);
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  const [symbol, setSymbol] = useState<string>();
  const [letter, setLetter] = useState<string>();
  const [loading, setLoading] = useState(true);

  const handleItemClick = (index: number) => {
    if (index == isInterpretationVisible) {
      setInterpretationVisible(-1);
    } else {
      setInterpretationVisible(index);
    }
  };

  useEffect(() => {
    if (localStorage) {
      setSymbol(localStorage.getItem("selectedSymbol") || "");
      setLetter(localStorage.getItem("selectedLetter") || "");
    }
    fetchData().then((data) => {
      setLoading(false);
      setCsvData(data);
    });
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLoading(true);
      fetchData().then((data) => {
        setCsvData(data);
        setLoading(false);
      });
    };

    // Subscribe to language change event
    i18n.on('languageChanged', handleLanguageChange);

    // Unsubscribe from language change event on component unmount
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const fetchData = async () => {
    try {
      const lang = localStorage?.getItem?.('lang') || 'US';
      let api_url = '/api/read-csv?attribute=mot';
      if (lang === 'fr') {
        api_url = '/api/read-csv-fr?attribute=mot';
      } else if (lang === 'sa') {
        api_url = '/api/read-csv-ar?attribute=mot';
      }

      const response = await fetch(api_url);
      if (response.ok) {
        const data = await response.json();
        const nameSortedData = data["data"];
        return nameSortedData;
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getItemsCount = () => {
    const totalItems = csvData[`${symbol}` as any] || [];
    if (Array.isArray(totalItems)) {
      return totalItems.length;
    } else {
      return 0;
    }
  };

  const displayDreamItems = () => {
    const itemsToRender = csvData[`${symbol}` as any] || [];
    const items = [];

    if (Array.isArray(itemsToRender)) {
      for (let i = 0; i < itemsToRender.length; i++) {
        items.push(
          <div key={i}>
            <Styled.DreamItem>
              <Styled.DreamItemCircleTextContainer>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Styled.DreamItemCircle lang={i18n.language}>
                    {i + 1}
                  </Styled.DreamItemCircle>
                </div>
                <Styled.DreamItemText lang={i18n.language}>
                  {itemsToRender[i].enonce}
                </Styled.DreamItemText>
              </Styled.DreamItemCircleTextContainer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginLeft: "18px",
                }}
              >
                <Styled.MeaningText lang={i18n.language}>
                  {t("Meaning")}
                </Styled.MeaningText>
                <Styled.DropDownCircle onClick={() => handleItemClick(i)}>
                  <CaretDownIconGray />
                </Styled.DropDownCircle>
              </div>
            </Styled.DreamItem>
            {isInterpretationVisible === i && (
              <Styled.DreamInterpretationDiv>
                <Styled.DreamInterpretationHeader lang={i18n.language}>
                  {t("Dream Interpretation")}
                </Styled.DreamInterpretationHeader>
                <Styled.DreamInterpretationLine />
                <Styled.DreamInterpretationSubText lang={i18n.language}>
                  {itemsToRender[i].interp}
                </Styled.DreamInterpretationSubText>
                <AdvertisementContained />
                <div className="temp" style={{ marginTop: "55px" }} />
              </Styled.DreamInterpretationDiv>
            )}
          </div>
        );
      }
    }

    return items;
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <I18nextProvider i18n={i18n}>
      <div>
        <Styled.ListOfDreamsForSymbol>
          <Styled.ArabesqueIcon src={Arabesque} alt="arabesque" />
          <Styled.SectionHeader lang={i18n.language}>
            {t("List of dreams for symbol")} {symbol}
          </Styled.SectionHeader>
          <Styled.DreamsListDiv>
            <Styled.RightSideText lang={i18n.language}>
              {getItemsCount()} {t("Dream")}(s) {t("found")}
            </Styled.RightSideText>
            <Styled.DreamList>{displayDreamItems()}</Styled.DreamList>
          </Styled.DreamsListDiv>
          <Styled.BackToLettersButtonContainer>
            <Styled.BackToLettersButton href={`/dictionary`} lang={i18n.language} onClick={() => localStorage && localStorage.setItem('displayLetter', '1')}>
              {t("Back To Letter")} {letter}
            </Styled.BackToLettersButton>
            <Styled.BackToLettersButton href={`/dictionary`} lang={i18n.language}>
              {t("Back To Letters")}
            </Styled.BackToLettersButton>
          </Styled.BackToLettersButtonContainer>
        </Styled.ListOfDreamsForSymbol>
      </div>
    </I18nextProvider>
  );
}