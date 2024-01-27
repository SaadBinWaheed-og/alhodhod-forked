"use client";
import { styled } from "styled-components";
import Image from "next/image";
import { breakpoint } from "../common/ui";
// Component for section headers
export const SectionHeader = styled.p`
  display: none;
  ${breakpoint.md} {
    font-style: normal;
    font-weight: 600;
    font-size: 44.47px;
    line-height: 54px;
    color: #23262f;
  }
`;

export const LetterFilterMobile = styled.div`
  padding: 0px 20px;
`;

export const ChooseTheFirstLetter = styled.div`
  display: none;
  ${breakpoint.md} {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 4.58vw;
  }
`;

export const LetterSelection = styled.div`
  width: 1350px;
  background: #ffffff;
  border-radius: 21.3906px;
  padding: 2.96vh 0;
`;
export const LetterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 1300px;
`;

export const LetterCircle = styled.div`
  box-sizing: border-box;
  width: 71.3px;
  height: 71.3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6.5vh;
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: center;
  border: 0.891274px solid #979797;
  cursor: pointer;
`;

export const LineBetweenLetters = styled.div`
  width: 1250px;
  height: 0px;
  margin: 23px auto;
  border: 0.891274px solid #e6e6e6;
`;

export const ListOfSymbolsForLetterSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 8.54vh;
`;

export const LettersList = styled.div`
  ${breakpoint.md} {
    width: 78.125vw;
    background-color: white;
    padding: 0px;
    grid-template-columns: repeat(2, 1fr);
  }
  width: 96%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 32px;
`;

export const SelectedLetterSection = styled.div`
  display: none;
  ${breakpoint.md} {
    width: 78.125vw;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 13px;
  }
`;

export const SelectedLetterMedal = styled.div`
  background-color: #f9f9f9;
  width: 174.81px;
  height: 230.1px;
  top: 2183.12px;
  left: 873.04px;
  border-radius: 0px 0px 80.27px 80.27px;
  font-size: 167px;
  font-weight: 700;
  line-height: 203px;
  letter-spacing: 0em;
  text-align: center;
`;

export const LettersListItem = styled.a`
  width: 100%;
  border-radius: 17.84px;
  margin-top: 32px;
  display: flex;
  background-color: white;
  color: inherit;
  text-decoration: none;
  ${breakpoint.md} {
    margin: 0 auto;
    background-color: #f9f9f9;
    width: 35.35vw;
  }
`;

export const LetterListItemCircle = styled.div`
  width: 50px;
  height: 50px;
  ${breakpoint.md} {
    width: 80.27px;
    height: 80.27px;
  }
  margin: 12px 24px;
  border-radius: 50%;
  background: linear-gradient(93.5deg, #a2da00 26.2%, #93c600 99.21%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 29px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
`;

export const LettersListItemTextGroup = styled.div`
  margin: auto 0;
`;

export const LettersListItemTextOne = styled.div`
  ${breakpoint.md} {
    font-size: 29px;
    line-height: 38px;
  }
  font-size: large;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
`;

export const LettersListItemTextTwo = styled.div`
  ${breakpoint.md} {
    font-size: 17px;
  }
  font-size: medium;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
`;

export const test = styled.div`
  font-family: var(--font-montserrat);
  font-size: 17px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LettersListItemArrowIcon = styled(Image)`
  margin: auto 0;
  margin-left: auto;
  margin-right: 25px;
  height: 4vh;
  width: 5vw;
  ${breakpoint.md} {
    height: 1.98vh;
    width: 1.67vw;
  }
`;

export const BackToLettersButton = styled.a`
  margin-top: 20px;
  width: 276px;
  height: 83px;
  border: 1px solid;
  border-color: #878787;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: center;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;
