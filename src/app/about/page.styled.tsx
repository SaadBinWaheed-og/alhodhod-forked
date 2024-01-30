import { styled } from "styled-components";
import { Row } from "antd";
import { breakpoint } from "../common/ui";
import Image from "next/image";

export const AboutPageContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  row-gap: 46px;
  align-items: center;
  flex-wrap: wrap;
  padding: 34px 20px 34px;
  justify-content: center;
  ${breakpoint.md} {
    padding: 130px 20px 130px;
    justify-content: center;
  }
  ${breakpoint.lg} {
    padding: 130px 72px;
    justify-content: space-between;
  }
  ${breakpoint.xl} {
    padding: 130px 72px 130px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-around;
  }
  ${breakpoint.custom(1370)} {
    padding: 130px 20px 130px;
    max-width: 1350px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: #23262f;
  font-family: var(--font-montserrat);
  font-size: 70.812px;
  font-style: normal;
  font-weight: 700;
  line-height: 99.572px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 39.331px;
  }
`;

export const Description = styled.div`
  font-family: var(--font-montserrat);
  font-size: 32.672px;
  font-style: normal;
  font-weight: 400;
  line-height: 42.651px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.847px;
  }
`;

export const UiImageDesktop = styled(Image)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const UiImageMobile = styled(Image)`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
