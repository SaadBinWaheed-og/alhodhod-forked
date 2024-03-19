"use client";
import { Row, Col, Space } from "antd";
import { ArabesqueIcon } from "../common/customIcons";
import * as Styled from "./HomePageContent.styled";
import { Advertisement, AdvertisementContained } from "../common/components/Advertisement";

import fdree from "../../../public/images/fdree.jpg";
import head from "../../../public/images/head.webp";
import Image from "next/image";
import { BlogCard } from "../common/components/BlogCard";
import { Video } from "../videos/Video";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const HomePageContent: React.FC = () => {
  const { t } = useTranslation();
  let blogIconSrc = "/images/blogIcon.svg";

  const videos = [
    { id: "ecAXYabuusA" },
    { id: "jpWPO5Qh8C8" },
    { id: "8YXxH8Z9P1Y" },
    // { id: "lx2yMhcynuw" },
    // { id: "zs-rk6WNhiE&t=2s" },
    // { id: "IQEOOTf35hQ" },
    // { id: "PRjdIzKM0Zc" },
    // { id: "IL-ofaMugus" },
    // { id: "IL-ofaMugus" },
  ];

  const blogs = [
    {
      id: 1,
      icon: blogIconSrc,
      title: "Dreams",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultricies at lacus vivamus lectus lobortis elementum........",
      link: "/blog",
    },
    {
      id: 2,
      icon: blogIconSrc,
      title: "Dreams",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultricies at lacus vivamus lectus lobortis elementum........",
      link: "/blog",
    },
    {
      id: 3,
      icon: blogIconSrc,
      title: "Dreams",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultricies at lacus vivamus lectus lobortis elementum........",
      link: "/blog",
    },
  ];
  return (
    <I18nextProvider i18n={i18n}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Styled.HomePageContainer>
          <Styled.FirstSection justify={"center"}>
            <Styled.ArabesqueContainer span={24}>
              <Styled.ArabesqueDesktop>
                <ArabesqueIcon />
              </Styled.ArabesqueDesktop>
              <Styled.ArabesqueMobile>
                <Image
                  src={"/images/arabArtMobile.svg"}
                  alt="art"
                  quality={100}
                  width={184}
                  height={19}
                  style={{ paddingTop: "5px" }}
                />
              </Styled.ArabesqueMobile>
            </Styled.ArabesqueContainer>
            <Col span={24}>
              <Styled.HadeesSection>
                <Styled.HadeesSectionTitle>
                {t("HadeesTitle")}
                </Styled.HadeesSectionTitle>
                <Styled.HadeesSectionDescription>
                  {t("HadeesDescription")}
                </Styled.HadeesSectionDescription>
              </Styled.HadeesSection>
            </Col>
          </Styled.FirstSection>

          <Row>
            <Col>
              <AdvertisementContained />
            </Col>
          </Row>

          <Styled.SecondSection>
            <Styled.SecondSectionContainer
              xs={{ order: 2, span: 24 }}
              sm={24}
              md={{ order: 1, span: 24 }}
              lg={12}
              xl={12}
              xxl={12}
            >
              <Space direction="vertical" size={4}>
                <Space direction="vertical" size={8}>
                  <Styled.DreamTitle> {t("What are Dreams?")}</Styled.DreamTitle>
                  <Styled.DreamsDescription>
                    {t("DreamsDescription")}
                  </Styled.DreamsDescription>
                </Space>
                <Styled.ButtonContainer>
                  <Styled.DreamsButton>{t("Interpret My Dream")}</Styled.DreamsButton>
                </Styled.ButtonContainer>
              </Space>
            </Styled.SecondSectionContainer>
            <Styled.ImageDesignCol
              xs={{ order: 1, span: 24 }}
              sm={24}
              md={{ order: 2, span: 24 }}
              lg={12}
              xl={12}
              xxl={12}
            >
              <Styled.ImageDesignContainer>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-3px",
                    right: "0px",
                    borderRadius: "20px",
                    zIndex: 1,
                  }}
                >
                  <Styled.DreamImageBgMobile
                    src={"/images/mobileBgDreams.png"}
                    alt={"bg"}
                    width={180}
                    height={229}
                  />
                  <Styled.DreamImageBgDesktop
                    src={fdree}
                    alt={"bg"}
                    width={370}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-3px",
                      zIndex: 3,
                      right: "140px",
                    }}
                  >
                    <Styled.HeadImageMobile
                      src={head}
                      alt={"head"}
                      height={143}
                    />
                    <Styled.HeadImageDesktop
                      src={head}
                      alt={"head"}
                      height={300}
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <Styled.GreenBox></Styled.GreenBox>
                </div>
              </Styled.ImageDesignContainer>
            </Styled.ImageDesignCol>
          </Styled.SecondSection>

          <Styled.BlogSection>
            <Col span={24}>
              <Styled.BlogSectionTitle>{t("Blogs")}</Styled.BlogSectionTitle>
            </Col>
            <Col span={24} style={{ paddingTop: "18px" }}>
              <Row justify="center" gutter={[47, 16]}>
                {blogs.map((blog) => {
                  return (
                    <Col
                      xs={24}
                      sm={24}
                      lg={12}
                      xl={8}
                      key={blog.id}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <BlogCard
                        width={400}
                        height={534.542}
                        icon={blog.icon}
                        title={blog.title}
                        description={blog.description}
                        link={blog.link}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Styled.BlogSection>

          <Styled.VideoSection justify={"center"} gutter={[16, 16]}>
            <Col span={24}>
              <Styled.BlogSectionTitle>{t("Videos")}</Styled.BlogSectionTitle>
            </Col>
            {videos.map((video) => {
              return (
                <Col key={video.id} sm={24} md={24} lg={8}>
                  <Video id={video.id} />
                </Col>
              );
            })}
          </Styled.VideoSection>

          <Row style={{ marginBottom: "76px" }}>
            <Col>
              <AdvertisementContained />
            </Col>
          </Row>
        </Styled.HomePageContainer>
      </div>
    </I18nextProvider>
  );
};

{
  /* <YouTubePlaylist
                apiKey="AIzaSyAb5SJv_rw-pDFFKqcBofymvQX923Lrc6k"
                playlistId="PL5ABPDOGW6TOkCrsy20yOWqVJdTIZH4Me"
                uniqueName="odhod-playlist"
              /> */
}
