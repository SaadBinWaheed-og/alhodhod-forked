"use client";
import * as Styled from "./page.styled";
import { ArabesqueIcon } from "../common/customIcons";
import ArrowIcon from "../../../public/images/arrow-vector.svg";
import { Advertisement, AdvertisementContained } from "../common/components/Advertisement";
import { useState, useRef, useEffect } from "react";
import { CsvRow } from "../../../pages/api/read-csv";
import DictionaryFilter from "../common/components/DictionaryFilter/DictionaryFilter";
import LoadingSpinner from "../common/components/LoadingSpinner/LoadingSpinner";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n";

export default function Dictionary() {
  const { t } = useTranslation();
  const listOfSymbolsRef = useRef<HTMLDivElement | null>(null);
  const targetSectionRefDesktop = useRef<HTMLDivElement | null>(null);
  const firstRowAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const secondRowAlphabets = ["I", "J", "K", "L", "M", "N", "O"];
  const thirdRowAlphabets = ["P", "Q", "R", "S", "T", "U", "V", "W"];
  const fourthRowAlphabets = ["X", "Y", "Z"];
  const firstRowAlphabetsArabic = ["دال ", "خاء ", "حاء ", "جيم ", "ثاء ", "تاء ", "باء ", "الف "];
  const secondRowAlphabetsArabic = ["ضاد ", "صاد ", "شين ", "سين ", "زاي ", "راء ", "ذال "];
  const thirdRowAlphabetsArabic = ["لام ", "كاف ", "قاف ", "فاء ", "غين ", "عين ", "ظاء ", "طاء "];
  const fourthRowAlphabetsArabic = ["ياء ", "واو ", "هاء ", "نون ", "ميم "];

  const alphabets = [
    ...firstRowAlphabets,
    ...secondRowAlphabets,
    ...thirdRowAlphabets,
    ...fourthRowAlphabets,
  ];

  const arabicAlphabets = [
    ...firstRowAlphabetsArabic,
    ...secondRowAlphabetsArabic,
    ...thirdRowAlphabetsArabic,
    ...fourthRowAlphabetsArabic,
  ];

  const [showListOfSymbols, setShowListOfSymbols] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (language: string) => {
    try {
      if (!language) {
        language = localStorage?.getItem?.('lang') || 'US';
      }
      let api_url = '/api/read-csv?attribute=lettre';
      if (language === 'fr') {
        api_url = '/api/read-csv-fr?attribute=lettre';
      } else if (language === 'sa') {
        api_url = '/api/read-csv-ar?attribute=lettre';
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

  useEffect(() => {
    fetchData('').then((data) => {
      setCsvData(data);
      setLoading(false);
    });

    if (localStorage){
      if (localStorage.getItem('displayLetter') == '1'){
        const tempLetter = localStorage.getItem('selectedLetter');
        if (tempLetter != ''){
          handleButtonClick(tempLetter || '');
          localStorage.setItem('displayLetter', '0')
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLoading(true);
      setSelectedLetter("");
      setShowListOfSymbols(false);
      fetchData(i18n.language).then((data) => {
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


  useEffect(() => {
  }, [csvData]);

  const handleButtonClick = (letter: string) => {
    setSelectedLetter(letter);
    setShowListOfSymbols(true);
    if (listOfSymbolsRef.current) {
      listOfSymbolsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToLettersButtonClick = () => {
    if (targetSectionRefDesktop.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      targetSectionRefDesktop.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (showListOfSymbols && listOfSymbolsRef.current) {
      listOfSymbolsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showListOfSymbols]);

  const renderLettersListSymbols = () => {
    const itemsToRender = csvData?.[selectedLetter as any] || [];
    const items = [];
    if (itemsToRender) {
      const groupedData: { [key: string]: CsvRow[] } = {};
      if (Array.isArray(itemsToRender)) {
        itemsToRender.forEach((row) => {
          const value = row["mot"];
          if (!groupedData[value]) {
            groupedData[value] = [];
          }
          groupedData[value].push(row);
        });
      }

      const symbolSortedData = Object.keys(groupedData);

      for (let i = 0; i < symbolSortedData.length; i++) {
        items.push(
          <Styled.LettersListItem
            onClick={() => {
              localStorage.setItem("selectedSymbol", `${symbolSortedData[i]}`)
              localStorage.setItem("selectedLetter", `${selectedLetter}`)
            }
            }
            href={`/dreams?symbol=${symbolSortedData[i]}`}
            key={i}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Styled.LetterListItemCircle>{i + 1}</Styled.LetterListItemCircle>
            </div>
            <Styled.LettersListItemTextGroup>
              <Styled.LettersListItemTextOne lang={i18n.language}>
                {symbolSortedData[i]}
              </Styled.LettersListItemTextOne>
              <Styled.LettersListItemTextTwo>
                {groupedData[symbolSortedData[i]].length} {t("Dream")}(s) {t("found")}
              </Styled.LettersListItemTextTwo>
            </Styled.LettersListItemTextGroup>
            <Styled.LettersListItemArrowIcon src={ArrowIcon} height={100} width={100} alt="< >" />
          </Styled.LettersListItem>
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
        <Styled.ChooseTheFirstLetter>
          <Styled.SectionHeader
            ref={targetSectionRefDesktop}
            lang={i18n.language}
          >
            {t("ChooseTheFirstLetter")}
          </Styled.SectionHeader>
          <ArabesqueIcon />
          { i18n.language == "sa" ? (
            <Styled.LetterSelection>
              <Styled.LetterRow>
                {firstRowAlphabetsArabic.map((letter, index) => (
                  <Styled.LetterCircle
                    onClick={() => handleButtonClick(letter)}
                    key={index}
                    lang={i18n.language}
                  >
                    {letter}
                  </Styled.LetterCircle>
                ))}
              </Styled.LetterRow>
              <Styled.LineBetweenLetters />
              <Styled.LetterRow>
                {secondRowAlphabetsArabic.map((letter, index) => (
                  <Styled.LetterCircle
                    onClick={() => handleButtonClick(letter)}
                    key={index}
                    lang={i18n.language}
                  >
                    {letter}
                  </Styled.LetterCircle>
                ))}
              </Styled.LetterRow>
              <Styled.LineBetweenLetters />
              <Styled.LetterRow>
                {thirdRowAlphabetsArabic.map((letter, index) => (
                  <Styled.LetterCircle
                    onClick={() => handleButtonClick(letter)}
                    key={index}
                    lang={i18n.language}
                  >
                    {letter}
                  </Styled.LetterCircle>
                ))}
              </Styled.LetterRow>
              <Styled.LineBetweenLetters />
              <Styled.LetterRow>
                {fourthRowAlphabetsArabic.map((letter, index) => (
                  <Styled.LetterCircle
                    onClick={() => handleButtonClick(letter)}
                    key={index}
                    lang={i18n.language}
                  >
                    {letter}
                  </Styled.LetterCircle>
                ))}
              </Styled.LetterRow>
            </Styled.LetterSelection>
          ) : (
            <Styled.LetterSelection>
              <Styled.LetterRow>
                {firstRowAlphabets.map((letter, index) => (
                  <Styled.LetterCircle
                    onClick={() => handleButtonClick(letter)}
                    key={index}
                    lang={i18n.language}
                  >
                    {letter}
                  </Styled.LetterCircle>
                ))}
              </Styled.LetterRow>
              <Styled.LineBetweenLetters />
              <Styled.LetterRow>
                {secondRowAlphabets.map((letter, index) => (
                  <Styled.LetterCircle
                    onClick={() => handleButtonClick(letter)}
                    key={index}
                    lang={i18n.language}
                  >
                    {letter}
                  </Styled.LetterCircle>
                ))}
              </Styled.LetterRow>
              <Styled.LineBetweenLetters />
              <Styled.LetterRow>
                {thirdRowAlphabets.map((letter, index) => (
                  <Styled.LetterCircle
                    onClick={() => handleButtonClick(letter)}
                    key={index}
                    lang={i18n.language}
                  >
                    {letter}
                  </Styled.LetterCircle>
                ))}
              </Styled.LetterRow>
              <Styled.LineBetweenLetters />
              <Styled.LetterRow>
                {fourthRowAlphabets.map((letter, index) => (
                  <Styled.LetterCircle
                    onClick={() => handleButtonClick(letter)}
                    key={index}
                    lang={i18n.language}
                  >
                    {letter}
                  </Styled.LetterCircle>
                ))}
              </Styled.LetterRow>
            </Styled.LetterSelection>
          )
          }

          <div style={{ marginBottom: "76px" }}>
            <AdvertisementContained />
          </div>
        </Styled.ChooseTheFirstLetter>
        <DictionaryFilter
          alphabets={i18n.language == "sa" ? arabicAlphabets : alphabets}
          selectedCharacter={selectedLetter}
          handleButtonClick={handleButtonClick}
        />
        {showListOfSymbols && (
          <Styled.ListOfSymbolsForLetterSection ref={listOfSymbolsRef}>
            <Styled.SectionHeader>
              {t("List of Symbols for Letter")}
            </Styled.SectionHeader>
            <Styled.SelectedLetterSection>
              <Styled.SelectedLetterMedal lang={i18n.language}>
                {selectedLetter}
              </Styled.SelectedLetterMedal>
              <Styled.LineBetweenLetters />
            </Styled.SelectedLetterSection>
            <Styled.LettersList>
              {renderLettersListSymbols()}
            </Styled.LettersList>
            <Styled.BackToLettersButton
              onClick={handleBackToLettersButtonClick}
              lang={i18n.language}
            >
              {t("Back To Letters")}
            </Styled.BackToLettersButton>

            <div style={{ marginBottom: "76px" }}>
              <AdvertisementContained />
            </div>
          </Styled.ListOfSymbolsForLetterSection>
        )}
      </div>
    </I18nextProvider>
  );
}
