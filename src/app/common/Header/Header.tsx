"use client";

import Image from "next/image";
import { Navbar } from "../Navbar/Navbar";
import home from "../../../../public/images/home.svg";
import logo from "../../../../public/images/logo.png";
import { Button } from "antd";

import * as Styled from "./Header.styled";

export const Header: React.FC = () => {
  return (
    <Styled.HeaderContainer>
      <Image
        src={home}
        alt="Home page background"
        quality={100}
        fill
        style={{
          objectFit: "cover",
          borderRadius: "11px",
        }}
      />
      <Styled.NavbarContainer>
        <Navbar />
      </Styled.NavbarContainer>
      <Styled.LogoContainer>
        <Image src={logo} alt="Al-hodhod logo" quality={100} />
        <Styled.WebsiteAddress>Alhodhod.com</Styled.WebsiteAddress>
        <Styled.WebsiteSince>EST 2001</Styled.WebsiteSince>
      </Styled.LogoContainer>
      <Styled.HeaderTextContainer>
        <Styled.HeaderText>
          <span style={{ color: "#C1FF0B" }}>ISLAMIC </span>DREAMS
          INTERPRETATION
        </Styled.HeaderText>
        <Styled.HeaderSubText>
          BECAUSE YOUR <span style={{ color: "#C1FF0B" }}>DREAMS</span>
          <br />
          ARE <span style={{ color: "#C1FF0B" }}>MEANINGFUL!</span>
        </Styled.HeaderSubText>
        <Styled.HeaderButton href="/dictionary">
          Dictionary of Dreams
        </Styled.HeaderButton>
      </Styled.HeaderTextContainer>
    </Styled.HeaderContainer>
  );
};
