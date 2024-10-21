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
    <Styled.FooterWrapper>
      <Styled.FooterContainer>
        <Row justify="space-between">
          <Col>
            <Space size={4}>
              <Styled.CRIcon>©</Styled.CRIcon>
              <Styled.CopyRight>{t("Copyrights")}</Styled.CopyRight>
            </Space>
          </Col>
          <Col>
            <Space>
              <Styled.IconContainer>
                <a
                  href="https://www.youtube.com/@user-rl9rs7hi4y"
                  target="_blank"
                >
                  <YoutubeOutlined />
                </a>
              </Styled.IconContainer>
            </Space>
          </Col>
        </Row>
      </Styled.FooterContainer>
    </Styled.FooterWrapper>
  );
};
