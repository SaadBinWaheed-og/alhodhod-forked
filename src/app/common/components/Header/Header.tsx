"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import home from "../../../../../public/images/home.svg";
import logo from "../../../../../public/images/logo.png";

import * as Styled from "./Header.styled";

export const Header: React.FC = () => {
  const pathName = usePathname();
  const [path, setPath] = useState<string>("/");

  useEffect(() => {
    setPath(pathName);
  }, [path, pathName]);

  const isHomePage = path === "/";

  const headerTextContent = (
    <>
      {path === "/" && (
        <>
          <span style={{ color: "#C1FF0B" }}>ISLAMIC </span>DREAMS
          INTERPRETATION{" "}
        </>
      )}
      {path === "/dictionary" && <>Choose the first letter of the</>}
      {path === "/DreamsList" && <>Choose the relevant dream</>}
    </>
  );

  const headerSubTextContent = (
    <>
      {path === "/" && (
        <>
          BECAUSE YOUR <span style={{ color: "#C1FF0B" }}>DREAMS</span>
          <br />
          ARE <span style={{ color: "#C1FF0B" }}>MEANINGFUL!</span>{" "}
        </>
      )}
      {path === "/dictionary" && (
        <>
          Main <span style={{ color: "#C1FF0B" }}>Symbol</span>
          <br />
          in your <span style={{ color: "#C1FF0B" }}>Dream</span>{" "}
        </>
      )}
      {path === "/DreamsList" && (
        <>
          List of <span style={{ color: "#C1FF0B" }}>Dreams</span> for
          <br />
          <span style={{ color: "#C1FF0B" }}>Symbol</span>{" "}
        </>
      )}
      {path === "/videos" && (
        <>
          Welcome to our
          <br />
          <span style={{ color: "#C1FF0B" }}>Videos</span>{" "}
        </>
      )}
      {path === "/about" && (
        <>
          <span style={{ color: "#C1FF0B" }}>About</span> Us{" "}
        </>
      )}
    </>
  );

  const headerDescriptionContent = (
    <>
      {path === "/about" && (
        <>
          Alhodhod.com is dedicated since 2001 to the islamic interpretation of
          dreams to help Muslims understanding the meanings of their dreams.
        </>
      )}
    </>
  );

  return (
    <Styled.HeaderContainer>
      <Styled.LogoContainer>
        <Image src={logo} alt="Al-hodhod logo" quality={100} />
        <Styled.WebsiteAddress>Alhodhod.com</Styled.WebsiteAddress>
        <Styled.WebsiteSince>EST 2001</Styled.WebsiteSince>
      </Styled.LogoContainer>
      <Styled.HeroWrapper $isHomePage={isHomePage}>
        <Styled.ImageWrapper>
          <Image
            priority
            src={home}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="home page background"
            style={{ borderRadius: "11px" }}
          />
        </Styled.ImageWrapper>

        <Styled.HeroContent>
          <Styled.NavBarContainer>
            <Navbar />
          </Styled.NavBarContainer>
          <Styled.HeaderTextContainer $isHomePage={isHomePage}>
            <Styled.HeaderText>{headerTextContent}</Styled.HeaderText>
            <Styled.HeaderSubText>{headerSubTextContent}</Styled.HeaderSubText>
            <Styled.HeaderDescription>
              {headerDescriptionContent}
            </Styled.HeaderDescription>
            {isHomePage && (
              <Styled.HeaderButton href="/dictionary" type="primary">
                Dictionary of Dreams
              </Styled.HeaderButton>
            )}
          </Styled.HeaderTextContainer>
        </Styled.HeroContent>
      </Styled.HeroWrapper>
    </Styled.HeaderContainer>
  );
};
