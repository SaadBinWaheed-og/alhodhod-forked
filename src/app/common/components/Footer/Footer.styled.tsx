import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Divider as UiDivider } from "antd";

export const FooterWrapper = styled.div`
  padding: 0px 20px 20px;
`;
export const FooterContainer = styled.div`
  border-radius: 10px;
  background: linear-gradient(98deg, #102650 -0.23%, #54526d 94.26%);
  padding: 128px 98px 43px 98px;

  @media screen and (max-width: 768px) {
    padding: 0px 18px 8px 18px;
  }
`;

export const UiLink = styled(Link)`
  font-family: var(--font-montserrat);
  color: #fff;
  font-size: 27px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    font-size: 13.944px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const LogoContainer = styled.div`
  top: 40px;
  left: 98px;
`;

export const WebsiteAddress = styled.div`
  font-family: var(--font-montserrat);
  font-size: 19px;
  font-weight: 800;
  color: white;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WebsiteSince = styled.div`
  font-family: var(--font-montserrat);
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CopyRight = styled.div`
  font-family: var(--font-montserrat);
  color: #bec2cf;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  @media screen and (max-width: 768px) {
    font-size: 6.49px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const UiList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media screen and (max-width: 768px) {
    row-gap: 8px;
    padding-top: 24px;
  }
`;

export const DesignImageMobile = styled(Image)`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const DesignImageDesktop = styled(Image)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Divider = styled(UiDivider)`
  margin-top: 65px;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 4px;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  a {
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;

export const CRIcon = styled.div`
  font-size: 20px;
  color: #bec2cf;
  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;
