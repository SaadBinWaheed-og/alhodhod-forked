"use client";
import * as Styled from "./page.styled";
import { ArabesqueIcon } from "../common/customIcons";
import ArrowIcon from "../../../public/images/arrow-vector.svg";
import { Advertisement } from "../common/components/Advertisement";
import { useState, useRef, useEffect } from "react";
import { CsvRow } from "../../../pages/api/read-csv";
import DictionaryFilter from "../common/components/DictionaryFilter/DictionaryFilter";
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
  const alphabets = [
    ...firstRowAlphabets,
    ...secondRowAlphabets,
    ...thirdRowAlphabets,
    ...fourthRowAlphabets,
  ];
  const [showListOfSymbols, setShowListOfSymbols] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [csvData, setCsvData] = useState<CsvRow[]>([]);

  const fetchData = async () => {
    try {
      const url = new URL("/api/read-csv", window.location.origin);
      url.searchParams.append('attribute', 'lettre');
      url.searchParams.append('lang', localStorage?.getItem?.('lang') || 'US');

      const response = await fetch(url.toString());
      // const response = await fetch("/api/read-csv?attribute=lettre");
      if (response.ok) {
        const data = await response.json();
        const nameSortedData = data["data"];
        return nameSortedData;
      } else {
        console.error("Failed to fetch data", response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      setCsvData(data);
    });
  }, []);

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
    const itemsToRender = csvData[selectedLetter as any] || [];
    const items = [];
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
          onClick={() =>
            localStorage.setItem("selectedSymbol", `${symbolSortedData[i]}`)
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
            <Styled.LettersListItemTextOne>
              {symbolSortedData[i]}
            </Styled.LettersListItemTextOne>
            <Styled.LettersListItemTextTwo>
              {groupedData[symbolSortedData[i]].length} {t("Dream")}(s) {t("found")}
            </Styled.LettersListItemTextTwo>
          </Styled.LettersListItemTextGroup>
          <Styled.LettersListItemArrowIcon src={ArrowIcon} alt="< >" />
        </Styled.LettersListItem>
      );
    }
    return items;
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <Styled.ChooseTheFirstLetter>
          <Styled.SectionHeader ref={targetSectionRefDesktop}>
          {t("ChooseTheFirstLetter")}
          </Styled.SectionHeader>
          <ArabesqueIcon />
          <Styled.LetterSelection>
            <Styled.LetterRow>
              {firstRowAlphabets.map((letter, index) => (
                <Styled.LetterCircle
                  onClick={() => handleButtonClick(letter)}
                  key={index}
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
                >
                  {letter}
                </Styled.LetterCircle>
              ))}
            </Styled.LetterRow>
          </Styled.LetterSelection>

          {/* <div style={{ marginBottom: "76px" }}>
            <Advertisement />
          </div> */}
        </Styled.ChooseTheFirstLetter>
        <DictionaryFilter alphabets={alphabets} selectedCharacter={selectedLetter} handleButtonClick={handleButtonClick}/>
        {showListOfSymbols && (
          <Styled.ListOfSymbolsForLetterSection ref={listOfSymbolsRef}>
            <Styled.SectionHeader>
              {t("List of Symbols for Letter")}
            </Styled.SectionHeader>
            <Styled.SelectedLetterSection>
              <Styled.SelectedLetterMedal>
                {selectedLetter}
              </Styled.SelectedLetterMedal>
              <Styled.LineBetweenLetters />
            </Styled.SelectedLetterSection>
            <Styled.LettersList>{renderLettersListSymbols()}</Styled.LettersList>
            <Styled.BackToLettersButton onClick={handleBackToLettersButtonClick}>
              {t("Back To Letters")}
            </Styled.BackToLettersButton>

            {/* <div style={{ marginBottom: "76px" }}>
              <Advertisement />
            </div> */}
          </Styled.ListOfSymbolsForLetterSection>
        )}
      </div>
    </I18nextProvider>
  );
}
