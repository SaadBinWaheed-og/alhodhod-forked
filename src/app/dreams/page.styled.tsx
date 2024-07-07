import { styled } from "styled-components";
import { breakpoint } from "../common/ui";
import Image from "next/image";
import Link from "next/link";
import { lateef } from "../fonts";

export const ListOfDreamsForSymbol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 4.58vw;
  margin-top: 22px;
  ${breakpoint.md} {
    margin-top: 130px;
    margin-bottom: 130px;
  }
`;

export const SectionHeader = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13.41px;
  margin-bottom: 37px;
  text-align: center;
  color: #23262f;
  ${breakpoint.md} {
    font-size: 44.47px;
    line-height: 54px;
    margin-bottom: 83px;
  }
  ${(props) => props.lang == "sa" && `font-family: ${lateef.variable};`}
`;

export const ArabesqueIcon = styled(Image)`
  width: 184px;
  height: 19px;
  ${breakpoint.md} {
    width: 713px;
    height: 77px;
  }
`;

export const DreamsListDiv = styled.div`
  width: 320px;
  padding-bottom: 32px;
  border-radius: 13px;
  ${breakpoint.md} {
    width: 1350px;
    background-color: white;
  }
`;

export const RightSideText = styled.div`
  font-size: 7px;
  font-weight: 500;
  line-height: 9px;
  letter-spacing: 0em;
  text-align: right;
  color: #5e5e5e;
  margin: 0 8.25vw 0 0;
  ${breakpoint.md} {
    font-size: 28px;
    font-weight: 400;
    line-height: 35px;
    margin: 8.25vh 3.25vw 8.25vh 0;
  }
  ${(props) => props.lang == "sa" && `font-family: ${lateef.variable};`}
`;

export const DreamList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DreamItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 11px auto 11px auto;
  padding: 9px 0px;
  width: 84.37vw;
  transition: border 0.1s;
  border: 0.9px solid white;
  border-radius: 5px;
  background: white;

  ${breakpoint.md} {
    width: 1200px;
    border-radius: 10px;
    background: #f9f9f9;
    border: 0.9px solid #f9f9f9;
    margin: 18px auto 18px auto;
    &:hover {
      box-shadow: 0 0 0 1.8px #c2ff0b, inset 0 0 0 1.8px #c2ff0b;
    }
  }
`;

export const DreamItemCircleTextContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const DreamItemCircle = styled.div`
  box-sizing: border-box;
  width: 26.44px;
  height: 26.44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 11px 10px;
  font-size: 9.5px;
  line-height: 12px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  border: 0.891274px solid #979797;
  cursor: pointer;
  background-color: #23262f;
  ${breakpoint.md} {
    width: 57.6px;
    height: 57.6px;
    font-size: 29.07px;
    line-height: 37.95px;
    margin: 25px 50px;
  }
  ${(props) => props.lang == "sa" && `font-family: ${lateef.variable};`}
`;

export const DreamItemText = styled.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
  color: #23262f;
  ${breakpoint.md} {
    font-size: 29px;
    line-height: 38px;
  }
  ${(props) => props.lang == "sa" && `font-family: ${lateef.variable};`}
  ${(props) => props.lang == "sa" && "text-align: right;"}
  ${(props) => props.lang != "sa" && "line-height: 15px;"}
`;

export const MeaningText = styled.div`
  display: none;
  ${breakpoint.md} {
    display: block;
    font-size: 28px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: right;
    color: #5e5e5e;
  }
  ${(props) => props.lang == "sa" && `font-family: ${lateef.variable};`}
`;

export const DropDownCircle = styled.div`
  box-sizing: border-box;
  width: 23.34px;
  height: 23.34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2.5vw 0 0.5vw;
  text-align: center;
  &:hover {
    background: linear-gradient(93.5deg, #a2da00 26.2%, #93c600 99.21%);
  }
  cursor: pointer;
  background-color: #f9f9f9;
  ${breakpoint.md} {
    width: 57.6px;
    height: 57.6px;
    border: 0.891274px solid #616161;
    &:hover {
      background: none;
    }
  }
`;

export const DreamInterpretationDiv = styled.div`
  margin: 0 auto;
  margin-top: 3vh;
  background: white;
  width: 84.37vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  ${breakpoint.md} {
    background: #f9f9f9;
    box-shadow: 0 0 0 1.8px #c2ff0b, inset 0 0 0 1.8px #c2ff0b;
    width: 1200px;
    border-radius: 10px;
  }
`;

export const DreamInterpretationHeader = styled.div`
  margin: 1.5vh 0;
  font-size: 11px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  ${breakpoint.md} {
    font-size: 32px;
    line-height: 39px;
    margin: 6vh 0;
  }
  ${(props) => props.lang == "sa" && `font-family: ${lateef.variable};`}
`;

export const DreamInterpretationLine = styled.div`
  width: 68vw;
  height: 0px;
  border: 0.18px solid #e6e6e6;
  ${breakpoint.md} {
    margin: 23px auto;
    border: 0.891274px solid #e6e6e6;
  }
`;

export const DreamInterpretationSubText = styled.div`
  margin: 5vh 35px 0 35px;
  font-size: 11px;
  font-weight: 400;
  font-style: italic;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  ${breakpoint.md} {
    font-size: 29px;
    font-style: normal;
    line-height: 38px;
  }
  ${(props) => props.lang == "sa" && `font-family: ${lateef.variable};`}
`;

export const BackToLettersButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justfiy-content: space-between;
   > *:not(:last-child) {
    margin-right: 1rem;
    ${breakpoint.md} {
      margin-right: 2rem;
    }
  }
`;

export const BackToLettersButton = styled(Link)`
  margin-top: 20px;
  margin-bottom: 76px;
  width: 180px;
  height: 50px;
  border: 1px solid;
  border-color: #878787;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: center;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  ${breakpoint.md} {
    width: 276px;
    height: 83px;
    font-size: 30px;
    font-weight: 500;
    line-height: 37px;
  }
  ${(props) => props.lang == "sa" && `font-family: ${lateef.variable};`}
`;
