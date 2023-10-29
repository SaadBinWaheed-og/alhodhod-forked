"use client";
import * as Styled from './page.styled';
import { ArabesqueIcon, CaretDownIconLarge } from "../common/customIcons";

export default function dreamsList(symbol: string) {
  return (
    <div className="dreamsList">
        <Styled.ListOfDreamsForSymbol>
          <Styled.SectionHeader>List of dreams for symbol Riding a donkey</Styled.SectionHeader>
            <ArabesqueIcon />
          <Styled.DreamsListDiv>
            <Styled.RightSideText>
              07 Dreams Found
            </Styled.RightSideText>
            <Styled.DreamList>
              <Styled.DreamItem>
                <Styled.DreamItemCircle>
                  02
                </Styled.DreamItemCircle>
                <Styled.DreamItemText>
                  Seeing oneself in a dream riding a donkey 
                </Styled.DreamItemText>
                <Styled.MeaningText>
                  Meaning
                </Styled.MeaningText>
                <Styled.DropDownCircle>
                  <CaretDownIconLarge/>
                </Styled.DropDownCircle>
              </Styled.DreamItem>
            </Styled.DreamList>
          </Styled.DreamsListDiv>
        </Styled.ListOfDreamsForSymbol>
    </div>
  );
}