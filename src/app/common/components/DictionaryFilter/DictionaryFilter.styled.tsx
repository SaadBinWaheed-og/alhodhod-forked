import styled from "styled-components";
import { breakpoint } from "../../ui";

export const Container = styled.div`
  padding: 20px 40px;
  ${breakpoint.md} {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  /* height: 40px; */
  margin-top: -40px;
  position: relative;
  flex-direction: row;
  background-color: white;
  border-radius: 4px;
`;

export const SelectedCharacter = styled.div`
  width: 12%;
  background-color: #C1FF0B;
  border-top-right-radius: 17px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 17px;
  border-bottom-left-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  font-weight: 700;
`;

export const NoSelectedCharacter = styled.div`
  width: 12%;
`;


export const HeaderText = styled.div`
  width: 65%;
  margin: 0% 5%;
  padding-top: 10px;
  font-size: medium;
`;

export const AccordionDropDown = styled.div`
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
  margin: 5px;
  text-align: center;
  border: 0.891274px solid #616161;
  cursor: pointer;
  background-color: #f9f9f9;
`;

export const CharacterSelector = styled.div`
  margin-top: 20  px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: black;
`;

export const CharacterSelectorRow = styled.div`
  display: flex;
  padding: 10px 0px;
  gap: 2%;
  justify-content: center;
`;

export const Character = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
  padding: 5px;
  font-weight: 700;
`;
