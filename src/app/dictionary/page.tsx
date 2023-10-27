import * as Styled from "./page.styled";
import Image from "next/image";
import GreenVector from "../../../public/images/green-vector.svg";
import ArrowIcon from "../../../public/images/arrow-vector.svg";
import { Advertisement } from "../common/components/Advertisement";

export default function Home() {
  const firstRowAlphabets = ["A", "B", "C", "D", "E", "F", "G"];
  const secondRowAlphabets = ["H", "I", "J", "K", "L", "M"];
  const thirdRowAlphabets = ["N", "O", "P", "Q", "R", "S", "T"];
  const fourthRowAlphabets = ["U", "V", "W", "X", "Y", "Z"];

  const renderLettersListItems = () => {
    const itemsToRender = 22;
    const items = [];

    for (let i = 0; i < itemsToRender; i++) {
      items.push(
        <Styled.LettersListItem key={i}>
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
        <Image src={GreenVector} alt="Green Vector" />
        <Styled.LetterSelection>
          <Styled.LetterRow>
            {firstRowAlphabets.map((letter, index) => (
              <Styled.LetterCircle key={index}>{letter}</Styled.LetterCircle>
            ))}
          </Styled.LetterRow>
          <Styled.LineBetweenLetters />
          <Styled.LetterRow>
            {secondRowAlphabets.map((letter, index) => (
              <Styled.LetterCircle key={index}>{letter}</Styled.LetterCircle>
            ))}
          </Styled.LetterRow>
          <Styled.LineBetweenLetters />
          <Styled.LetterRow>
            {thirdRowAlphabets.map((letter, index) => (
              <Styled.LetterCircle key={index}>{letter}</Styled.LetterCircle>
            ))}
          </Styled.LetterRow>
          <Styled.LineBetweenLetters />
          <Styled.LetterRow>
            {fourthRowAlphabets.map((letter, index) => (
              <Styled.LetterCircle key={index}>{letter}</Styled.LetterCircle>
            ))}
          </Styled.LetterRow>
        </Styled.LetterSelection>

        <Advertisement />
      </Styled.ChooseTheFirstLetter>
      <Styled.ListOfSymbolsForLetterSection>
        <Styled.SectionHeader>List of Symbols for Letter</Styled.SectionHeader>
        <Styled.SelectedLetterSection>
          <Styled.SelectedLetterMedal>R</Styled.SelectedLetterMedal>
          <Styled.LineBetweenLetters />
        </Styled.SelectedLetterSection>
        <Styled.LettersList>{renderLettersListItems()}</Styled.LettersList>
        <Styled.BackToLettersButton>Back To Letters</Styled.BackToLettersButton>

        <Advertisement />
      </Styled.ListOfSymbolsForLetterSection>
    </div>
  );
}
