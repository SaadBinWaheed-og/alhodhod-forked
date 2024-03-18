"use client";
import React, { useMemo, useState, forwardRef, ForwardedRef } from "react";
import * as Styled from "./DictionaryFilter.styled";
import { CaretDownIconGray } from "../../customIcons";
import { sliceInChunks } from "../../utils/utility";
import { useTranslation } from "react-i18next";

type Props = {
  alphabets: string[];
  selectedCharacter: string;
  handleButtonClick: Function;
};

const DictionaryFilter = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement | null>) => {
  const { t } = useTranslation();
  const { alphabets, selectedCharacter, handleButtonClick } = props;
  const slicedAlphabets = useMemo(
    () => sliceInChunks(alphabets, 9),
    [alphabets]
  );
  const [openAccordion, setOpenAccordion] = useState(false);

  const handleToggleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <Styled.Container ref={ref}>
      <Styled.Header>
        {!!selectedCharacter ? (
          <Styled.SelectedCharacter>
            {selectedCharacter}
          </Styled.SelectedCharacter>
        ) : (
          <Styled.NoSelectedCharacter />
        )}
        <Styled.HeaderText>{t("ChooseTheFirstLetter")}</Styled.HeaderText>
        <Styled.AccordionDropDown onClick={handleToggleAccordion}>
          <CaretDownIconGray />
        </Styled.AccordionDropDown>
      </Styled.Header>
      {openAccordion && (
        <Styled.CharacterSelector>
          {slicedAlphabets.map((alphabetsRow, index) => {
            const isLastIndex = index + 1 === slicedAlphabets.length;
            const dividerStyle = { borderBottom: "1px solid #0000000f" };
            return (
              <Styled.CharacterSelectorRow
                key={`row_${index}`}
                style={!isLastIndex ? dividerStyle : {}}
              >
                {alphabetsRow.map((alphabet) => {
                  const selected =
                    alphabet === selectedCharacter
                      ? { backgroundColor: "#C1FF0B", borderRadius: "50%" }
                      : {};
                  return (
                    <Styled.Character
                      key={alphabet}
                      style={selected}
                      onClick={() => handleButtonClick(alphabet)}
                    >
                      {alphabet}
                    </Styled.Character>
                  );
                })}
              </Styled.CharacterSelectorRow>
            );
          })}
        </Styled.CharacterSelector>
      )}
    </Styled.Container>
  );
});

export default DictionaryFilter;
