"use client";

import React from "react";
import * as Styled from "./Footer.styled";
import { Row, Col, Space, Divider } from "antd";
import Image from "next/image";
import logo from "../../../../../public/images/logo.png";
import {
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
// import { FacebookIcon } from "../customIcons/facebookIcon";
//icons to be replaces from customIcons once Khubaib provides the icons

export const Footer: React.FC = () => {
  return (
    <>
      <Styled.FooterWrapper>
        <Styled.FooterContainer>
          <Row justify="space-between">
            <Col>
              <Styled.UiList>
                <Styled.UiLink href="/">Home</Styled.UiLink>
                <Styled.UiLink href="/services">Services</Styled.UiLink>
                <Styled.UiLink href="/products">Products</Styled.UiLink>
                <Styled.UiLink href="/contact">Contact Us</Styled.UiLink>
                <Styled.UiLink href="/about">About Us</Styled.UiLink>
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
                  Copyright Alhodhod 2023. All Right reserved
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
