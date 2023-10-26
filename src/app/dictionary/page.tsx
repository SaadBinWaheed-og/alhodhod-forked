import { SectionHeader, ChooseTheFirstLetter, LetterSelection, LetterCircle, LetterRow, LineBetweenLetters, AdvertisementRectangle, AdvertisementImageTag, AdvertisementText, ListOfSymbolsForLetterSection, LettersList, SelectedLetterSection, LettersListItem, LetterListItemCircle, LettersListItemTextGroup, LettersListItemTextOne, LettersListItemTextTwo, LettersListItemArrowIcon, BackToLettersButton, SelectedLetterMedal } from "./page.styled";
import Image from 'next/image';
import GreenVector from "../../../public/images/green-vector.svg";
import AdvertisementImage from "../../../public/images/advertisement.svg";
import ArrowIcon from "../../../public/images/arrow-vector.svg"

export default function Home() {
  const firstRowAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const secondRowAlphabets = ['H', 'I', 'J', 'K', 'L', 'M'];
  const thirdRowAlphabets = ['N', 'O', 'P', 'Q', 'R', 'S', 'T'];
  const fourthRowAlphabets = ['U', 'V', 'W', 'X', 'Y', 'Z'];

  const renderLettersListItems = () => {
    const itemsToRender = 22;
    const items = [];

    for (let i = 0; i < itemsToRender; i++) {
      items.push(
        <LettersListItem key={i}>
          <LetterListItemCircle>{i + 1}</LetterListItemCircle>
          <LettersListItemTextGroup>
            <LettersListItemTextOne>Lorem ipsum</LettersListItemTextOne>
            <LettersListItemTextTwo>21 Dreams found</LettersListItemTextTwo>
          </LettersListItemTextGroup>
          <LettersListItemArrowIcon src={ArrowIcon} alt="< >" />
        </LettersListItem>
      );
    }

    return items;
  };

  return (
    <div className="dictionaryOfDreams">
      <ChooseTheFirstLetter>
        <SectionHeader>
          Choose the first letter
        </SectionHeader>
        <Image src={GreenVector} alt="Green Vector" />
        <LetterSelection>
          <LetterRow>
            {firstRowAlphabets.map((letter, index) => (
              <LetterCircle key={index}>
                {letter}
              </LetterCircle>
            ))}
          </LetterRow>
          <LineBetweenLetters/>
          <LetterRow>
            {secondRowAlphabets.map((letter, index) => (
              <LetterCircle key={index}>
                {letter}
              </LetterCircle>
            ))}
          </LetterRow>
          <LineBetweenLetters/>
          <LetterRow>
            {thirdRowAlphabets.map((letter, index) => (
              <LetterCircle key={index}>
                {letter}
              </LetterCircle>
            ))}
          </LetterRow>
          <LineBetweenLetters/>
          <LetterRow>
            {fourthRowAlphabets.map((letter, index) => (
              <LetterCircle key={index}>
                {letter}
              </LetterCircle>
            ))}
          </LetterRow>
        </LetterSelection>
        <AdvertisementRectangle>
          <AdvertisementText>
            Advertisement
          </AdvertisementText>
          <AdvertisementImageTag src={AdvertisementImage} layout="fill" alt="Advertisement" />
        </AdvertisementRectangle>
      </ChooseTheFirstLetter>
      <ListOfSymbolsForLetterSection>
        <SectionHeader>
          List of Symbols for Letter
        </SectionHeader>
        <SelectedLetterSection>
          <SelectedLetterMedal>
            R 
          </SelectedLetterMedal>
          <LineBetweenLetters/>
        </SelectedLetterSection>
        <LettersList>
          {renderLettersListItems()}
        </LettersList>
        <BackToLettersButton>Back To Letters</BackToLettersButton>
        <AdvertisementRectangle>
          <AdvertisementText>
            Advertisement
          </AdvertisementText>
          <AdvertisementImageTag src={AdvertisementImage} layout="fill" alt="Advertisement" />
        </AdvertisementRectangle>
      </ListOfSymbolsForLetterSection>
    </div>
  )
}