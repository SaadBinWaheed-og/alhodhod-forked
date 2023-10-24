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
              <Space size={24} direction="vertical">
                <Styled.UiLink href="/">Home</Styled.UiLink>
                <Styled.UiLink href="/services">Services</Styled.UiLink>
                <Styled.UiLink href="/products">Products</Styled.UiLink>
                <Styled.UiLink href="/contact">Contact Us</Styled.UiLink>
                <Styled.UiLink href="/about">About Us</Styled.UiLink>
              </Space>
            </Col>
            <Col>
              <Styled.LogoContainer>
                <Image src={logo} alt="Al-hodhod logo" quality={100} />
                <Styled.WebsiteAddress>Alhodhod.com</Styled.WebsiteAddress>
                <Styled.WebsiteSince>EST 2001</Styled.WebsiteSince>
              </Styled.LogoContainer>
            </Col>
          </Row>
          <Divider style={{ marginTop: "65px", backgroundColor: "#545D79" }} />
          <Row justify="space-between">
            <Col>
              <Space size={4}>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "#BEC2CF",
                  }}
                >
                  ©
                </div>
                <Styled.CopyRight>
                  Copyright Alhodhod 2023. All Right reserved
                </Styled.CopyRight>
              </Space>
            </Col>
            <Col>
              <Space>
                <FacebookFilled style={{ fontSize: "20px", color: "white" }} />
                <TwitterCircleFilled
                  style={{ fontSize: "20px", color: "white" }}
                />
                <LinkedinFilled style={{ fontSize: "20px", color: "white" }} />
                <InstagramFilled style={{ fontSize: "20px", color: "white" }} />
              </Space>
            </Col>
          </Row>
        </Styled.FooterContainer>
      </Styled.FooterWrapper>
    </>
  );
};
