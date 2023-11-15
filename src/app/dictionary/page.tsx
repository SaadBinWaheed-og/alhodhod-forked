"use client";
import * as Styled from "./page.styled";
import { ArabesqueIcon } from "../common/customIcons";
import ArrowIcon from "../../../public/images/arrow-vector.svg";
import { Advertisement } from "../common/components/Advertisement";
import { useState, useRef, useEffect } from 'react';
import { CsvRow } from "../../../pages/api/read-csv";

export default function Dictionary() {
  const listOfSymbolsRef = useRef<HTMLDivElement | null>(null);
  const targetSectionRef = useRef<HTMLDivElement | null>(null);
  const firstRowAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const secondRowAlphabets = ["I", "J", "K", "L", "M", "N", "O"];
  const thirdRowAlphabets = ["P", "Q", "R", "S", "T", "U", "V", "W"];
  const fourthRowAlphabets = ["X", "Y", "Z"];
  const [showListOfSymbols, setShowListOfSymbols] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [csvData, setCsvData] = useState<CsvRow[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/read-csv?attribute=lettre');
      if (response.ok) {
        const data = await response.json();
        const nameSortedData = data['data'];
        return nameSortedData;
      } else {
        console.error('Failed to fetch data');
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
      listOfSymbolsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToLettersButtonClick = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (showListOfSymbols && listOfSymbolsRef.current) {
      listOfSymbolsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showListOfSymbols]);

  const renderLettersListSymbols = () => {
    const itemsToRender = csvData[selectedLetter as any] || [];
    const items = [];
    const groupedData: { [key: string]: CsvRow[] } = {};
    if (Array.isArray(itemsToRender)){
      itemsToRender.forEach((row) => {
        const value = row['mot'];
        if (!groupedData[value]) {
          groupedData[value] = [];
        }
        groupedData[value].push(row);
      });
    }

    const symbolSortedData = Object.keys(groupedData);

    for (let i = 0; i < symbolSortedData.length; i++) {
      items.push(
        <Styled.LettersListItem onClick={() => localStorage.setItem('selectedSymbol', `${symbolSortedData[i]}`)} href={`/dreams?symbol=${symbolSortedData[i]}`} key={i}>
          <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}>              
            <Styled.LetterListItemCircle>{i + 1}</Styled.LetterListItemCircle>
          </div>
          <Styled.LettersListItemTextGroup>
            <Styled.LettersListItemTextOne>
              {symbolSortedData[i]}
            </Styled.LettersListItemTextOne>
            <Styled.LettersListItemTextTwo>
              {groupedData[symbolSortedData[i]].length} Dream(s) found
            </Styled.LettersListItemTextTwo>
          </Styled.LettersListItemTextGroup>
          <Styled.LettersListItemArrowIcon src={ArrowIcon} alt="< >" />
        </Styled.LettersListItem>
      );
    }
    return items;
  };

  return (
    <div>
      <Styled.ChooseTheFirstLetter>
        <Styled.SectionHeader ref={targetSectionRef}>Choose the first letter</Styled.SectionHeader>
        <ArabesqueIcon />
        <Styled.LetterSelection>
          <Styled.LetterRow>
            {firstRowAlphabets.map((letter, index) => (
              <Styled.LetterCircle onClick={() => handleButtonClick(letter)} key={index}>{letter}</Styled.LetterCircle>
            ))}
          </Styled.LetterRow>
          <Styled.LineBetweenLetters />
          <Styled.LetterRow>
            {secondRowAlphabets.map((letter, index) => (
              <Styled.LetterCircle onClick={() => handleButtonClick(letter)} key={index}>{letter}</Styled.LetterCircle>
            ))}
          </Styled.LetterRow>
          <Styled.LineBetweenLetters />
          <Styled.LetterRow>
            {thirdRowAlphabets.map((letter, index) => (
              <Styled.LetterCircle onClick={() => handleButtonClick(letter)} key={index}>{letter}</Styled.LetterCircle>
            ))}
          </Styled.LetterRow>
          <Styled.LineBetweenLetters />
          <Styled.LetterRow>
            {fourthRowAlphabets.map((letter, index) => (
              <Styled.LetterCircle onClick={() => handleButtonClick(letter)} key={index}>{letter}</Styled.LetterCircle>
            ))}
          </Styled.LetterRow>
        </Styled.LetterSelection>

        <div style={{ marginBottom: "76px" }}>
          <Advertisement />
        </div>
      </Styled.ChooseTheFirstLetter>
      {showListOfSymbols && (
        <Styled.ListOfSymbolsForLetterSection ref={listOfSymbolsRef}>
          <Styled.SectionHeader>List of Symbols for Letter</Styled.SectionHeader>
          <Styled.SelectedLetterSection>
            <Styled.SelectedLetterMedal>{selectedLetter}</Styled.SelectedLetterMedal>
            <Styled.LineBetweenLetters />
          </Styled.SelectedLetterSection>
          <Styled.LettersList>{renderLettersListSymbols()}</Styled.LettersList>
          <Styled.BackToLettersButton onClick={handleBackToLettersButtonClick}>Back To Letters</Styled.BackToLettersButton>

          <div style={{ marginBottom: "76px" }}>
            <Advertisement />
          </div>
        </Styled.ListOfSymbolsForLetterSection>
      )}
    </div>
  );
}
