import { styled } from "styled-components";
import { breakpoint } from "../common/ui";
import { Row, Col, Button } from "antd";
import Image from "next/image";
export const HomePageContainer = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  ${breakpoint.md} {
    width: 100%;
    padding: 0 20px;
  }
  ${breakpoint.lg} {
    width: 100%;
    padding: 0 72px;
  }
  ${breakpoint.custom(1400)} {
    width: 1350px;
    padding: 0;
  }
`;

export const FirstSection = styled(Row)`
  padding-top: 120px;
  @media screen and (max-width: 768px) {
    padding-top: 34px;
  }
`;
export const HadeesSection = styled.div`
  padding: 68px 109px;
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
  font-family: var(--font-montserrat);
  @media screen and (max-width: 768px) {
    padding: 16px 26px;
  }
`;

export const ArabesqueContainer = styled(Col)`
  text-align: center;
  margin-bottom: -10px;
  z-index: 1;
`;

export const ArabesqueDesktop = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ArabesqueMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HadeesSectionTitle = styled.div`
  color: #23262f;
  font-family: var(--font-montserrat);
  font-size: 28px;
  font-weight: 500 !important;
  line-height: 36px;
  @media screen and (max-width: 768px) {
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 36.096px;
  }
`;
export const HadeesSectionDescription = styled.div`
  padding-top: 24px;
  color: rgba(35, 38, 47, 0.7);
  font-size: 28px;
  font-weight: 400;
  line-height: 36.096px;
  @media screen and (max-width: 768px) {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.6px;
    padding-top: 0px;
  }
`;

export const DreamTitle = styled.div`
  font-family: var(--font-montserrat);
  color: #23262f;
  text-align: center;
  font-size: 52px;
  font-weight: 700;
  line-height: 73.178px;
  padding-top: 16px;
  @media screen and (max-width: 768px) {
    font-size: 11.5px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0px;
    text-align: left;
  }
`;

export const DreamsDescription = styled.div`
  color: #23262f;
  font-family: var(--font-montserrat);
  font-size: 28px;
  font-weight: 400;
  line-height: 38.036px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.6px;
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: 768px) {
    justify-content: start;
  }
`;

export const DreamsButton = styled(Button)`
  font-family: var(--font-montserrat);
  color: #23262f;
  font-size: 21.173px;
  font-weight: 500;
  text-align: center;
  width: 267.271px;
  height: 66.617px;
  box-shadow: none;
  background: #fff;
  border: 0.803px solid #a0a0a0;
  border-radius: 10.4px;
  .ant-btn:hover {
    background: #fff !important;
    border: 0.803px solid #a0a0a0 !important;
  }
  > span {
    color: #23262f;
    font-size: 21.173px;
    font-weight: 500;
    background-color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: inline-flex;
    padding: 8px 11px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 110px;
    height: 27px;
    border-radius: 4.294px;
    border: 0.33px solid #94c801;
    background: linear-gradient(94deg, #a2da00 26.2%, #93c600 99.21%),
      linear-gradient(90deg, #97cb01 0%, rgba(151, 203, 1, 0) 100%);
    font-style: normal;
    line-height: normal;
    > span {
      color: #23262f;
      font-size: 8.714px;
      font-weight: 500;
      background: linear-gradient(94deg, #a2da00 26.2%, #93c600 99.21%),
        linear-gradient(90deg, #97cb01 0%, rgba(151, 203, 1, 0) 100%);
    }
  }
`;

export const SecondSection = styled(Row)`
  margin-top: 76px;
  background-color: #fff;
  width: 100%;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 34px;
  }
`;

export const SecondSectionContainer = styled(Col)`
  padding: 68px 58px;
  @media screen and (max-width: 768px) {
    padding: 16px 26px;
  }
`;

export const BlogSection = styled(Row)`
  margin-top: 76px;
  width: 100%;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 34px;
  }
`;

export const BlogSectionTitle = styled.div`
  color: #23262f;
  text-align: center;
  font-size: 52.427px;
  font-weight: 700;
  font-family: var(--font-montserrat);

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;

export const VideoSection = styled(Row)`
  margin-top: 76px;
  width: 100%;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 34px;
  }
`;

export const ImageDesignCol = styled(Col)`
  display: flex;
  justify-content: end;
  align-items: end;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ImageDesignContainer = styled.div`
  width: 100%;
  position: relative;
  height: 546px;
  @media screen and (max-width: 768px) {
    height: 237px;
  }
`;
export const GreenBox = styled.div`
  position: absolute;
  bottom: 0px;
  right: 120px;
  width: 240px;
  height: 320px;
  border-radius: 24px;
  background: #aed932;
  z-index: 2;
  @media screen and (max-width: 768px) {
    right: 135px;
    width: 75px;
    height: 143px;
  }
`;

export const DreamImageBgMobile = styled(Image)`
  border-radius: 20px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const DreamImageBgDesktop = styled(Image)`
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeadImageMobile = styled(Image)`
  border-radius: 20px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const HeadImageDesktop = styled(Image)`
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
