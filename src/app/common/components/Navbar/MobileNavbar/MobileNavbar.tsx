"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  HomeFilled,
  GlobalOutlined,
  QuestionCircleOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import Link from "next/link";
import { Space } from "antd";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import * as Styled from "./MobileNavbar.styled";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";

type Props = {
  path: string;
};

export const MobileNavbar: React.FC<Props> = ({ path }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  return (
    <Styled.MobileNavbar>
      <div onClick={toggleDrawer}>
        {!open ? (
          <MenuOutlined style={{ fontSize: "20px", color: "white" }} />
        ) : (
          <CloseOutlined />
        )}
      </div>
      <Styled.Drawer
        title="Alhodhod"
        placement="right"
        onClose={toggleDrawer}
        open={open}
        closeIcon={false}
        extra={<CloseOutlined onClick={toggleDrawer} />}
      >
        <Styled.NavBarList>
          <Styled.NavbarListItem $active={path === "/"}>
            <Link href={"/"} onClick={closeDrawer}>
              <Space size={12}>
                {path === "/" ? (
                  <HomeFilled style={{ fontSize: "16px", color: "#CBCBCB" }} />
                ) : (
                  <HomeOutlined
                    style={{ fontSize: "16px", color: "#CBCBCB" }}
                  />
                )}
                <span>{t("Home")}</span>
              </Space>
            </Link>
          </Styled.NavbarListItem>

          <Styled.NavbarListItem $active={path === "/dictionary"}>
            <Link href="/dictionary" onClick={closeDrawer}>
              <Space size={12}>
                <Image
                  src={"/images/dictionarylogo.svg"}
                  alt="Al-hodhod logo"
                  quality={100}
                  width={18.4}
                  height={13.38}
                  style={{ paddingTop: "5px" }}
                />
                <span>{t("Dictionary of Dreams")}</span>
              </Space>
            </Link>
          </Styled.NavbarListItem>
          <Styled.NavbarListItem $active={path === "/blog"}>
            <Link href="/blog" onClick={closeDrawer}>
              <Space size={12}>
                <Image
                  src={"/images/blogLogo.svg"}
                  alt="Al-hodhod logo"
                  quality={100}
                  width={18.4}
                  height={18.4}
                  style={{ paddingTop: "5px", color: "black" }}
                />
                <span>{t("Blogs")}</span>
              </Space>
            </Link>
          </Styled.NavbarListItem>
          <Styled.NavbarListItem $active={path === "/videos"}>
            <Link href="/videos" onClick={closeDrawer}>
              <Space size={12}>
                <Image
                  src={"/images/videoLogo.svg"}
                  alt="Al-hodhod logo"
                  quality={100}
                  width={18.4}
                  height={18.4}
                  style={{ paddingTop: "5px", color: "black" }}
                />
                <span>{t("Videos")}</span>
              </Space>
            </Link>
          </Styled.NavbarListItem>
          <Styled.NavbarListItem $active={path === "/about"}>
            <Link href="/about" onClick={closeDrawer}>
              <Space size={12}>
                {path === "/about" ? (
                  <QuestionCircleFilled
                    style={{ fontSize: "16px", color: "#CBCBCB" }}
                  />
                ) : (
                  <QuestionCircleOutlined
                    style={{ fontSize: "16px", color: "#CBCBCB" }}
                  />
                )}
                <span>{t("About")}</span>
              </Space>
            </Link>
          </Styled.NavbarListItem>
          <Styled.NavbarListItem $active={false}>
            <Space size={12}>
              <GlobalOutlined
                style={{ fontSize: "16px", color: "#CBCBCB" }}
              />
              <span>{t("Language")}</span>
              <LanguageSwitcher />
            </Space>
          </Styled.NavbarListItem>
        </Styled.NavBarList>
      </Styled.Drawer>
    </Styled.MobileNavbar>
  );
};
