"use client";
import React from "react";
import { Row, Col } from "antd";
import * as Styled from "./page.styled";
export default function About() {
  return (
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
            <Styled.Title>Dreams Analyzed</Styled.Title>
            <Styled.Description>
              Alhodhod Islamic Dictionary of Dreams contains more than 20,000
              dreams deeply analyse and commented by famous Muslim scholars like
              Ibn Sirine, Nabulsi, Ibn Shahin and others.
              <br></br> The website will go further and present everything that
              relates to dreams in the islamic culture.
            </Styled.Description>
          </Col>
          <Col
            xs={{ span: 24, order: 3 }}
            sm={{ span: 24, order: 3 }}
            md={{ span: 24, order: 3 }}
            lg={12}
          >
            <Styled.Title>
              New <span style={{ color: "#93C600" }}>Technologies</span>
            </Styled.Title>
            <Styled.Description>
              We worked hard for a few weeks to rebuilt the website using new
              technologies and tools ( cloud, vps, updating scripts…) to make
              responsive and friendly.
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
            <Styled.Title style={{ color: "#93C600" }}>Membership</Styled.Title>
            <Styled.Description>
              Shortly, incha Allah Taala, we will offer membership so you can
              get a private account where you can record your personal dreams
              and ask help from admin or other members willing to help you
              understanding the meaning of your dreams.
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
              In addition, we have established a YouTube channel to elevate your
              experience even further.
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
  );
}
