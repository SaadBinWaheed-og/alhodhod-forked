"use client";
import * as Styled from "./page.styled";
import { ArabesqueIcon } from "../common/customIcons";
import ArrowIcon from "../../../public/images/arrow-vector.svg";
import { Advertisement } from "../common/components/Advertisement";
import { useState, useRef, useEffect } from 'react';

export default function Dictionary() {
  const listOfSymbolsRef = useRef<HTMLDivElement | null>(null);
  const firstRowAlphabets = ["A", "B", "C", "D", "E", "F", "G"];
  const secondRowAlphabets = ["H", "I", "J", "K", "L", "M"];
  const thirdRowAlphabets = ["N", "O", "P", "Q", "R", "S", "T"];
  const fourthRowAlphabets = ["U", "V", "W", "X", "Y", "Z"];
  const [showListOfSymbols, setShowListOfSymbols] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState('');

  const handleButtonClick = (letter: string) => {
    setSelectedLetter(letter);
    setShowListOfSymbols(true);
    if (listOfSymbolsRef.current) {
      listOfSymbolsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (showListOfSymbols && listOfSymbolsRef.current) {
      listOfSymbolsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showListOfSymbols]);

  const renderLettersListSymbols = () => {
    const itemsToRender = 22;
    const items = [];

    for (let i = 0; i < itemsToRender; i++) {
      items.push(
        <Styled.LettersListItem href="/dreamsList" key={i}>
          <Styled.LetterListItemCircle>{i + 1}</Styled.LetterListItemCircle>
          <Styled.LettersListItemTextGroup>
            <Styled.LettersListItemTextOne>
              Lorem ipsum
            </Styled.LettersListItemTextOne>
            <Styled.LettersListItemTextTwo>
              21 Dreams found
            </Styled.LettersListItemTextTwo>
          </Styled.LettersListItemTextGroup>
          <Styled.LettersListItemArrowIcon src={ArrowIcon} alt="< >" />
        </Styled.LettersListItem>
      );
    }

    return items;
  };

  return (
    <div className="dictionaryOfDreams">
      <Styled.ChooseTheFirstLetter>
        <Styled.SectionHeader>Choose the first letter</Styled.SectionHeader>
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
          <Styled.BackToLettersButton>Back To Letters</Styled.BackToLettersButton>

          <div style={{ marginBottom: "76px" }}>
            <Advertisement />
          </div>
        </Styled.ListOfSymbolsForLetterSection>
      )}
    </div>
  );
}
