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
    }
    fetchData().then((data) => {
      setLoading(false);
      setCsvData(data);
    });
  }, []);

  const fetchData = async () => {
    try {
      const lang = localStorage?.getItem?.('lang') || 'US';
      let api_url = '/api/read-csv?attribute=mot';
      if (lang === 'fr') {
        api_url = '/api/read-csv-fr?attribute=mot';
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
                  <Styled.DreamItemCircle>{i + 1}</Styled.DreamItemCircle>
                </div>
                <Styled.DreamItemText>
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
                <Styled.MeaningText>{t("Meaning")}</Styled.MeaningText>
                <Styled.DropDownCircle onClick={() => handleItemClick(i)}>
                  <CaretDownIconGray />
                </Styled.DropDownCircle>
              </div>
            </Styled.DreamItem>
            {isInterpretationVisible === i && (
              <Styled.DreamInterpretationDiv>
                <Styled.DreamInterpretationHeader>
                  {t("Dream Interpretation")}
                </Styled.DreamInterpretationHeader>
                <Styled.DreamInterpretationLine />
                <Styled.DreamInterpretationSubText>
                  {itemsToRender[i].interp}
                </Styled.DreamInterpretationSubText>
                {/* <AdvertisementContained /> */}
                <div className="temp" style={{marginTop: "55px"}}/>
              </Styled.DreamInterpretationDiv>
            )}
          </div>
        );
      }
    }

    return items;
  };

  return ( loading ? <LoadingSpinner/> : 
    <I18nextProvider i18n={i18n}>
      <div>
        <Styled.ListOfDreamsForSymbol>
          <Styled.ArabesqueIcon src={Arabesque} alt="arabesque" />
          <Styled.SectionHeader>
            {t("List of dreams for symbol")} {symbol}
          </Styled.SectionHeader>
          <Styled.DreamsListDiv>
            <Styled.RightSideText>
              {getItemsCount()} {t("Dream")}(s) {t("found")}
            </Styled.RightSideText>
            <Styled.DreamList>{displayDreamItems()}</Styled.DreamList>
          </Styled.DreamsListDiv>
          <Styled.BackToLettersButton href={`/dictionary`}>
            {t("Back To Letters")}
          </Styled.BackToLettersButton>
        </Styled.ListOfDreamsForSymbol>
      </div>
    </I18nextProvider>
  );
}