"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import home from "../../../../../public/images/homeBg.webp";
import logo from "../../../../../public/images/logo.png";
import { useTranslation } from "react-i18next";
import * as Styled from "./Header.styled";
import Link from "next/link";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const pathName = usePathname();
  const [path, setPath] = useState<string>("/");

  useEffect(() => {
    if (pathName) {
      setPath(pathName);
    }
  }, [pathName]);

  const isHomePage = path === "/";

  const headerTextContent = (
    <>
      {path === "/" && (
        <>
          <span style={{ color: "#C1FF0B" }}>{t("ISLAMIC")} </span>{t("DREAMS")}&nbsp;
          {t("INTERPRETATION")}{" "}
        </>
      )}
      {path === "/dictionary" && <>{t("ChooseTheFirstLetterOfThe")}</>}
      {path === "/dreams" && <>{t("ChooseTheRelevantDream")}</>}
    </>
  );

  const headerSubTextContent = (
    <>
      {path === "/" && (
        <>
          {t("BECAUSE YOUR")} <span style={{ color: "#C1FF0B" }}>{t("DREAMS")}&nbsp;</span>
          <Styled.BreakTag />
          {t("ARE")} <span style={{ color: "#C1FF0B" }}>{t("MEANINGFUL")}!</span>{" "}
        </>
      )}
      {path === "/dictionary" && (
        <>
          {t("Main")} <span style={{ color: "#C1FF0B" }}>{t("Symbol")}</span>
          <br />
          {t("in your")} <span style={{ color: "#C1FF0B" }}>{t("Dream")}</span>{" "}
        </>
      )}
      {path === "/dreams" && (
        <>
          {t("List of")} <span style={{ color: "#C1FF0B" }}>{t("Dream")}</span> {t("for")}
          <br />
          <span style={{ color: "#C1FF0B" }}>{t("Symbol")}</span>{" "}
        </>
      )}
      {path === "/videos" && (
        <>
          {t("Welcome to our")}
          <br />
          <span style={{ color: "#C1FF0B" }}>{t("Videos")}</span>{" "}
        </>
      )}
      {path === "/about" && (
        <>
          <span style={{ color: "#C1FF0B" }}>{t("About")}</span> {t("Us")}{" "}
        </>
      )}
    </>
  );

  const headerDescriptionContent = (
    <>
      {path === "/about" && (
        <>
          {t("HeaderDescriptionContent")}
        </>
      )}
    </>
  );

  return (
    <Styled.HeaderContainer>
      <Styled.LogoContainer>
        <Styled.DesktopLogoImage
          src={logo}
          alt="Al-hodhod logo"
          quality={100}
        />
        <Styled.MobileLogoImage
          src={logo}
          // src={"/images/mbLogo.png"}
          alt="Al-hodhod logo"
          quality={100}
        />
        <Styled.Title>Alhodhod</Styled.Title>
        <Styled.WebsiteAddress>Alhodhod.com</Styled.WebsiteAddress>
        <Styled.WebsiteSince>EST 2001</Styled.WebsiteSince>
      </Styled.LogoContainer>
      <Styled.HeroWrapper $isHomePage={isHomePage}>
        <Styled.ImageWrapper>
          <Image
            priority
            src={home}
            fill={true}
            alt="home page background"
            style={{
              borderRadius: "11px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Styled.ImageWrapper>

        <Styled.HeroContent>
          <Styled.NavBarContainer>
            <Navbar path={path} />
          </Styled.NavBarContainer>
          <Styled.HeaderTextContainer $isHomePage={isHomePage}>
            <Styled.HeaderText>{headerTextContent}</Styled.HeaderText>
            <Styled.HeaderSubText>{headerSubTextContent}</Styled.HeaderSubText>
            <Styled.HeaderDescription>
              {headerDescriptionContent}
            </Styled.HeaderDescription>
            <Styled.ButtonWrapper>
              {isHomePage && (
                <Link href="/dictionary">
                  <Styled.HeaderButton type="primary">
                  {t("Dictionary of Dreams")}
                  </Styled.HeaderButton>
                </Link>
              )}
            </Styled.ButtonWrapper>
          </Styled.HeaderTextContainer>
        </Styled.HeroContent>
      </Styled.HeroWrapper>
    </Styled.HeaderContainer>
  );
};
