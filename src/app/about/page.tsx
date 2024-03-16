"use client";
import React from "react";
import { Row, Col } from "antd";
import * as Styled from "./page.styled";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n";
export default function About() {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <Styled.AboutPageContainer>
        <Col>
          <Row justify="center" align="middle">
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              md={{ span: 24, order: 1 }}
              lg={12}
            >
              <Styled.ImageContainer>
                <Styled.UiImageDesktop
                  src={"images/TwentyThousand.svg"}
                  alt="image for about page"
                  width={418}
                  height={397}
                />
                <Styled.UiImageMobile
                  src={"images/TwentyThousand.svg"}
                  alt="image for about page"
                  width={190}
                  height={181}
                />
              </Styled.ImageContainer>
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 24, order: 1 }}
              md={{ span: 24, order: 2 }}
              lg={12}
            >
              <Styled.Title>{t("Dreams Analyzed")}</Styled.Title>
              <Styled.Description>
                {t("DreamsAnalyzedDescription")}
                <br></br> {t("DreamsAnalyzedSubDescription")}
              </Styled.Description>
            </Col>
            <Col
              xs={{ span: 24, order: 3 }}
              sm={{ span: 24, order: 3 }}
              md={{ span: 24, order: 3 }}
              lg={12}
            >
              <Styled.Title>
                {t("New")} <span style={{ color: "#93C600" }}>{t("Technologies")}</span>
              </Styled.Title>
              <Styled.Description>
                {t("NewTechnologiesDescription")}
              </Styled.Description>
            </Col>
            <Col
              xs={{ span: 24, order: 4 }}
              sm={{ span: 24, order: 4 }}
              md={{ span: 24, order: 4 }}
              lg={12}
            >
              <Styled.ImageContainer>
                <Styled.UiImageDesktop
                  src={"images/Tech.svg"}
                  alt="image for about page"
                  width={418}
                  height={397}
                />
                <Styled.UiImageMobile
                  src={"images/Tech.svg"}
                  alt="image for about page"
                  width={190}
                  height={181}
                />
              </Styled.ImageContainer>
            </Col>
            <Col
              xs={{ span: 24, order: 6 }}
              sm={{ span: 24, order: 6 }}
              md={{ span: 24, order: 5 }}
              lg={12}
            >
              <Styled.ImageContainer>
                <Styled.UiImageDesktop
                  src={"images/Membership.svg"}
                  alt="image for about page"
                  width={418}
                  height={397}
                />
                <Styled.UiImageMobile
                  src={"images/Membership.svg"}
                  alt="image for about page"
                  width={190}
                  height={181}
                />
              </Styled.ImageContainer>
            </Col>
            <Col
              sm={{ span: 24, order: 5 }}
              xs={{ span: 24, order: 5 }}
              md={{ span: 24, order: 6 }}
              lg={12}
            >
              <Styled.Title style={{ color: "#93C600" }}>{t("Membership")}</Styled.Title>
              <Styled.Description>
                {t("MembershipDescription")}
              </Styled.Description>
            </Col>
            <Col
              md={{ span: 24, order: 7 }}
              lg={12}
              sm={{ span: 24, order: 7 }}
              xs={{ span: 24, order: 7 }}
            >
              <Styled.Title>YouTube Channel </Styled.Title>
              <Styled.Description>
                {t("YouTubeChannelDescription")}
              </Styled.Description>
            </Col>
            <Col
              md={{ span: 24, order: 8 }}
              lg={12}
              sm={{ span: 24, order: 8 }}
              xs={{ span: 24, order: 8 }}
            >
              <Styled.ImageContainer>
                <a
                  href="https://www.youtube.com/@user-rl9rs7hi4y"
                  target="_blank"
                >
                  <Styled.UiImageDesktop
                    src={"images/subscribe.svg"}
                    alt="image for about page"
                    width={418}
                    height={397}
                  />
                  <Styled.UiImageMobile
                    src={"images/subscribe.svg"}
                    alt="image for about page"
                    width={190}
                    height={181}
                  />
                </a>
              </Styled.ImageContainer>
            </Col>
          </Row>
        </Col>
      </Styled.AboutPageContainer>
    </I18nextProvider>
  );
}
