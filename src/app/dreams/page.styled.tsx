import { styled } from "styled-components";

export const ListOfDreamsForSymbol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 4.58vw;
  margin-top: 130px;
  margin-bottom: 130px;
`;

export const SectionHeader = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 44.47px;
  line-height: 54px;
  margin-bottom: 83px;
  color: #23262f;
`;

export const DreamsListDiv = styled.div`
  width: 1350px;
  background-color: white;
  padding-bottom: 32px;
  border-radius: 13px;
`;

export const RightSideText = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: right;
  margin: 8.25vh 3.25vw 8.25vh 0;
  color: #5E5E5E;
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
  margin: 18px auto 18px auto;
  width: 1200px;
  transition: border 0.1s;
  border: 0.9px solid #F9F9F9;
  border-radius: 10px;
  background: #F9F9F9;
  
  &:hover {
    box-shadow: 0 0 0 1.8px #C2FF0B, inset 0 0 0 1.8px #C2FF0B;
  }
`;

export const DreamItemCircle = styled.div`
  box-sizing: border-box;
  width: 57.6px;
  height: 57.6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5.5vh;
  font-size: 29.07px;
  font-weight: 600;
  line-height: 37.95px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  border: 0.891274px solid #979797;
  cursor: pointer;
  background-color: #23262F;
  margin: 25px 50px;
`;

export const DreamItemText = styled.div`
  font-size: 29px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: #23262F;
`;

export const MeaningText = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: right;
  color: #5E5E5E;
`;

export const DropDownCircle = styled.div`
  box-sizing: border-box;
  width: 57.6px;
  height: 57.6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2.5vw 0 0.5vw;
  text-align: center;
  border: 0.891274px solid #616161;
  cursor: pointer;
  background-color: #F9F9F9;
`;

export const DreamInterpretationDiv = styled.div`
  margin: 0 auto;
  margin-top: 3vh;
  background: #F9F9F9;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 0 1.8px #C2FF0B, inset 0 0 0 1.8px #C2FF0B;
`;

export const DreamInterpretationHeader = styled.div`
  margin-top: 6vh;
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: center;
`;

export const DreamInterpretationLine = styled.div`
  width: 68vw;
  height: 0px;
  margin: 23px auto;
  border: 0.891274px solid #e6e6e6;
`;

export const DreamInterpretationSubText = styled.div`
  margin: 5vh 35px 0 35px;
  font-size: 29px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
`;

export const BackToLettersButton = styled.a`
  margin: 0 auto;
  margin-top: 60px;
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
`;