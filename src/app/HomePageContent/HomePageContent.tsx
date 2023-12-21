"use client";
import { Row, Col, Space } from "antd";
import { ArabesqueIcon } from "../common/customIcons";
import * as Styled from "./HomePageContent.styled";
import { Advertisement } from "../common/components/Advertisement";

import fdree from "../../../public/images/fdree.jpg";
import head from "../../../public/images/head.png";
import Image from "next/image";
import { BlogCard } from "../common/components/BlogCard";
import { Video } from "../videos/Video";

export const HomePageContent: React.FC = () => {
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Styled.HomePageContainer>
        <Row justify={"center"} style={{ paddingTop: "120px" }}>
          <Styled.ArabesqueContainer span={24}>
            <ArabesqueIcon />
          </Styled.ArabesqueContainer>
          <Col span={24}>
            <Styled.HadeesSection>
              <Styled.HadeesSectionTitle>
                The Prophet of Islam (peace be upon him) says:
              </Styled.HadeesSectionTitle>
              <Styled.HadeesSectionDescription>
                {` “Dream are three fold, sometimes is divine guidance and glory
                from God, sometimes is sorrow from the devil, and sometimes
                are conflicts of daily living or past events"`}
              </Styled.HadeesSectionDescription>
            </Styled.HadeesSection>
          </Col>
        </Row>

        <Row>
          <Col>
            <Advertisement />
          </Col>
        </Row>

        <Styled.SecondSection>
          <Styled.SecondSectionContainer span={12}>
            <Space direction="vertical" size={4} align="end">
              <Space direction="vertical" size={24}>
                <Styled.DreamTitle> What are Dreams?</Styled.DreamTitle>
                <Styled.DreamsDescription>
                  Dreams are a series of images, events, sensations, and ideas
                  that come into mind when one is asleep. Different kinds of
                  dreams come to people when they are in different stages and
                  levels of sleep.
                </Styled.DreamsDescription>
              </Space>
              <Styled.DreamsButton>Interpret My Dream</Styled.DreamsButton>
            </Space>
          </Styled.SecondSectionContainer>
          <Col span={12} style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                bottom: "-3px",
                right: "0px",
                borderRadius: "20px",
                zIndex: 1,
              }}
            >
              <Image
                src={fdree}
                alt={"bg"}
                width={370}
                style={{ objectFit: "fill", borderRadius: "20px" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-3px",
                zIndex: 3,
                right: "140px",
              }}
            >
              <Image
                src={head}
                alt={"head"}
                height={300}
                style={{ borderRadius: "20px" }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "0px",
                right: "120px",
                width: "240px",
                height: "320px",
                borderRadius: "24.078px",
                background: "#AED932",
                zIndex: 2,
              }}
            ></div>
          </Col>
        </Styled.SecondSection>

        <Styled.BlogSection>
          <Col span={24}>
            <Styled.BlogSectionTitle>Blogs</Styled.BlogSectionTitle>
          </Col>
          <Col span={24} style={{ paddingTop: "18px" }}>
            <Row justify="center" gutter={47}>
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
            <Styled.BlogSectionTitle>Videos</Styled.BlogSectionTitle>
          </Col>
          {videos.map((video) => {
            return (
              <Col key={video.id} span={8}>
                <Video id={video.id} />
              </Col>
            );
          })}
        </Styled.VideoSection>

        <Row style={{ marginBottom: "76px" }}>
          <Col>
            <Advertisement />
          </Col>
        </Row>
      </Styled.HomePageContainer>
    </div>
  );
};

{
  /* <YouTubePlaylist
                apiKey="AIzaSyAb5SJv_rw-pDFFKqcBofymvQX923Lrc6k"
                playlistId="PL5ABPDOGW6TOkCrsy20yOWqVJdTIZH4Me"
                uniqueName="odhod-playlist"
              /> */
}
