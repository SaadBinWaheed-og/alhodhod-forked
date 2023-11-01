"use client";
import * as Styled from './page.styled';
import { useState } from "react";
import { ArabesqueIcon, CaretDownIconGray } from "../common/customIcons";
import { AdvertisementContained } from "../common/components/Advertisement";

export default function dreamsList(symbol: string) {
  const [isInterpretationVisible, setInterpretationVisible] = useState(0);

  const handleItemClick = (index: number) => {
    if (index == isInterpretationVisible) {
      setInterpretationVisible(-1);
    }
    else {
      setInterpretationVisible(index);
    }
  };

  const displayDreamItems = () => {
    const itemsToRender = 9;
    const items = [];

    for (let i = 2; i < itemsToRender; i++) {
      items.push(
        <div key={i} className="DreamItemContainer">
          <Styled.DreamItem onClick={() => handleItemClick(i)}>
            <Styled.DreamItemCircle>
              {i}
            </Styled.DreamItemCircle>
            <Styled.DreamItemText>
              Seeing oneself in a dream riding a donkey 
            </Styled.DreamItemText>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}>
              <Styled.MeaningText>
                Meaning
              </Styled.MeaningText>
              <Styled.DropDownCircle>
                <CaretDownIconGray/>
              </Styled.DropDownCircle>
            </div>
          </Styled.DreamItem>
          {isInterpretationVisible === i && (
            <Styled.DreamInterpretationDiv>
              <Styled.DreamInterpretationHeader>
                Dream Interpretation
              </Styled.DreamInterpretationHeader>
              <Styled.DreamInterpretationLine/>
              <Styled.DreamInterpretationSubText>
                announces that it could mean a good outcome for the sick.
              </Styled.DreamInterpretationSubText>
              <AdvertisementContained/>
            </Styled.DreamInterpretationDiv>
          )}
        </div>
      );
    }

    return items;
  };

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
              {displayDreamItems()}
            </Styled.DreamList>
          </Styled.DreamsListDiv>
          <Styled.BackToLettersButton>Back To Letters</Styled.BackToLettersButton>
        </Styled.ListOfDreamsForSymbol>
    </div>
  );
}