import { styled } from "styled-components";
import { Button } from "antd";

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
`;

export const WebsiteAddress = styled.div`
  font-size: 19px;
  font-weight: 800;
  color: white;
  text-align: center;
  font-family: var(--font-montserrat);
`;

export const WebsiteSince = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  font-family: var(--font-montserrat);
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
`;

export const HeaderText = styled.div`
  color: white;
  font-size: 34px;
  font-weight: 400;
  font-family: var(--font-montserrat);
`;

export const HeaderDescription = styled.div`
  color: white;
  font-size: 34px;
  font-weight: 400;
  line-height: normal;
  width: 1053px;
  font-family: var(--font-montserrat);
`;

export const HeaderSubText = styled.div`
  color: white;
  font-size: 79px;
  font-weight: 700;
  font-family: var(--font-montserrat);
`;

export const HeaderButton = styled(Button)`
  font-family: var(--font-montserrat);
  margin-top: 38px;
  text-align: center;
  height: 83px;
  width: 365px;
  box-shadow: none;
  background: linear-gradient(94deg, #a2da00 26.2%, #93c600 99.21%);
  border: 1px solid #a2da00;
  .ant-btn-primary:hover {
    background: linear-gradient(94deg, #a2da00 26.2%, #93c600 99.21%);
    border: 1px solid #a2da00;
  }
  > span {
    color: #23262f;
    font-size: 30.376px;
    line-height: 2.3;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
