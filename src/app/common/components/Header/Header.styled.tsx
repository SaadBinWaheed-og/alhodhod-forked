import { styled } from "styled-components";
import { Button } from "antd";
import Image from "next/image";

export const HeaderContainer = styled.div`
  position: relative;
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const HeroWrapper = styled.div<{
  $isHomePage: boolean;
}>`
  position: relative;
  width: calc(100vw - 40px);
  height: ${({ $isHomePage }) => ($isHomePage ? "95vh" : "75")};

  @media (max-width: 768px) {
    width: 100%;
    height: 312px;
  }
`;

export const ImageWrapper = styled.div`
  z-index: -1;
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 98px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    left: 44px;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const WebsiteAddress = styled.div`
  font-size: 19px;
  font-weight: 800;
  color: white;
  text-align: center;
  font-family: var(--font-montserrat);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WebsiteSince = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  font-family: var(--font-montserrat);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderTextContainer = styled.div<{
  $isHomePage?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: ${({ $isHomePage }) => ($isHomePage ? "calc(30vh)" : "199px")};
  padding-bottom: ${({ $isHomePage }) => ($isHomePage ? "0px" : "163px")};
  text-align: center;
  font-family: var(--font-montserrat);
  @media screen and (max-width: 768px) {
    text-align: left !important;
    padding-top: ${({ $isHomePage }) => ($isHomePage ? "96px" : "calc(18vh)")};
    padding-left: 24px;
    padding-bottom: 0px;
  }
`;

export const HeaderText = styled.div`
  width: 100%;
  color: white;
  font-size: 34px;
  font-weight: 400;
  font-family: var(--font-montserrat);
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
  }
`;

export const HeaderDescription = styled.div`
  color: white;
  font-size: 34px;
  font-weight: 400;
  line-height: normal;
  width: 1053px;
  font-family: var(--font-montserrat);
  @media screen and (max-width: 768px) {
    width: 100%;
    color: #f5f5f5;
    font-family: var(--font-montserrat);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const HeaderSubText = styled.div`
  color: white;
  font-size: 79px;
  font-weight: 700;
  font-family: var(--font-montserrat);
  @media screen and (max-width: 768px) {
    font-size: 31px;
    font-weight: 700;
    text-align: left;
    width: -webkit-fill-available;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: start;
  }
`;

export const HeaderButton = styled(Button)`
  font-family: var(--font-montserrat);
  margin-top: 38px;
  text-align: center;
  height: 83px;
  width: 365px;
  box-shadow: none;
  background: linear-gradient(94deg, #a2da00 26.2%, #93c768 99.21%);
  border: 1px solid #a2da00;
  .ant-btn-primary:hover {
    background: linear-gradient(94deg, #a2da00 26.2%, #93c768 99.21%);
    border: 1px solid #a2da00;
  }
  > span {
    color: #23262f;
    font-size: 30.376px;
    line-height: 2.3;
  }
  text-decoration: none;
  @media screen and (max-width: 768px) {
    width: 136px;
    height: 33px;
    margin-top: 10px;
    padding: 0px !important;
    > span {
      color: #23262f;
      font-size: 11.318px;
      font-weight: 500;
      line-height: normal;
      padding-top: 7px;
    }
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MobileLogoImage = styled(Image)`
  width: 19.287px;
  height: 29.301px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const DesktopLogoImage = styled(Image)`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 50%;
    height: 50%;
    margin-left: 25%;
  }
`;

export const Title = styled.div`
  position: absolute;
  color: #fff;
  text-align: center;
  font-family: var(--font-montserrat);
  font-size: 25.94px;
  font-weight: 700;
  line-height: 37.093px;
  left: 28px;
  top: 0px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const BreakTag = styled.br`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
