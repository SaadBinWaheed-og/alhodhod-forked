"use client";

import React from "react";
import * as Styled from "./Footer.styled";
import { Row, Col, Space } from "antd";
import logo from "../../../../../public/images/logo.png";
import { useTranslation } from "react-i18next";
import {
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  InstagramFilled,
  YoutubeOutlined,
} from "@ant-design/icons";
// import { FacebookIcon } from "../customIcons/facebookIcon";
//icons to be replaces from customIcons once Khubaib provides the icons

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Styled.FooterWrapper>
        <Styled.FooterContainer>
          <Row justify="space-between">
            <Col>
              <Styled.UiList>
                <Styled.UiLink href="/">{t("Home")}</Styled.UiLink>
                <Styled.UiLink href="/dictionary">{t("Dictionary of Dreams")}</Styled.UiLink>
                <Styled.UiLink href="/blog">{t("Blog")}</Styled.UiLink>
                <Styled.UiLink href="/videos">{t("Videos")}</Styled.UiLink>
                <Styled.UiLink href="/about">{t("About Us")}</Styled.UiLink>
              </Styled.UiList>
            </Col>
            <Col>
              <Styled.LogoContainer>
                <Styled.DesignImageDesktop
                  src={logo}
                  alt="Al-hodhod logo"
                  quality={100}
                />
                <Styled.DesignImageMobile
                  src={"/images/footerDesign.svg"}
                  alt="Al-hodhod logo"
                  width={90}
                  height={130}
                  quality={100}
                />
                <Styled.WebsiteAddress>Alhodhod.com</Styled.WebsiteAddress>
                <Styled.WebsiteSince>EST 2001</Styled.WebsiteSince>
              </Styled.LogoContainer>
            </Col>
          </Row>
          <Styled.Divider style={{ backgroundColor: "#545D79" }} />
          <Row justify="space-between">
            <Col>
              <Space size={4}>
                <Styled.CRIcon>©</Styled.CRIcon>
                <Styled.CopyRight>
                  {t("Copyrights")}
                </Styled.CopyRight>
              </Space>
            </Col>
            <Col>
              <Space>
                <Styled.IconContainer>
                  <FacebookFilled />
                </Styled.IconContainer>
                <Styled.IconContainer>
                  <TwitterCircleFilled />
                </Styled.IconContainer>
                <Styled.IconContainer>
                  <a
                    href="https://www.youtube.com/@user-rl9rs7hi4y"
                    target="_blank"
                  >
                    <YoutubeOutlined />
                  </a>
                </Styled.IconContainer>
                <Styled.IconContainer>
                  <LinkedinFilled />
                </Styled.IconContainer>
                <Styled.IconContainer>
                  <InstagramFilled />
                </Styled.IconContainer>
              </Space>
            </Col>
          </Row>
        </Styled.FooterContainer>
      </Styled.FooterWrapper>
    </>
  );
};
