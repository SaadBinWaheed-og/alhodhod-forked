"use client";

import React from "react";
import Link from "next/link";
import * as Styled from "./Navbar.styled";
import { MobileNavbar } from "./MobileNavbar/MobileNavbar";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

type Props = {
  path: string;
};

export const Navbar: React.FC<Props> = ({ path }) => {
  const { t } = useTranslation();
  return (
    <>
      <Styled.NavBarList>
        <Styled.NavbarListItem $active={path === "/"}>
          <Link href={"/"}>{t("Home")}</Link>{" "}
        </Styled.NavbarListItem>
        <Styled.NavbarListItem $active={path === "/dictionary"}>
          <Link href="/dictionary">{t("Dictionary of Dreams")}</Link>
        </Styled.NavbarListItem>
        <Styled.NavbarListItem $active={path === "/blog"}>
          <Link href="/blog" style={{ color: "#fff" }}>
            {t("Blog")}
          </Link>
        </Styled.NavbarListItem>
        <Styled.NavbarListItem $active={path === "/videos"}>
          <Link href="/videos">{t("Videos")}</Link>
        </Styled.NavbarListItem>
        <Styled.NavbarListItem $active={path === "/about"}>
          <Link href="about">{t("About")}</Link>
        </Styled.NavbarListItem>
        {/* <Styled.LanguageSwitcherContainer>
          <LanguageSwitcher />
        </Styled.LanguageSwitcherContainer> */}
      </Styled.NavBarList>

      <div
        style={{
          position: "absolute",
          top: "30px",
          right: "24px",
        }}
      >
        <MobileNavbar path={path} />
      </div>
    </>
  );
};
