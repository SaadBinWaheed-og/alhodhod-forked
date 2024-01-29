"use client";

import React from "react";
import Link from "next/link";
import * as Styled from "./Navbar.styled";
import { MobileNavbar } from "./MobileNavbar/MobileNavbar";

type Props = {
  path: string;
};

export const Navbar: React.FC<Props> = ({ path }) => {
  return (
    <>
      <Styled.NavBarList>
        <Styled.NavbarListItem $active={path === "/"}>
          <Link href={"/"}>Home</Link>{" "}
        </Styled.NavbarListItem>
        <Styled.NavbarListItem $active={path === "/dictionary"}>
          <Link href="/dictionary">Dictionary of Dreams</Link>
        </Styled.NavbarListItem>
        <Styled.NavbarListItem $active={path === "/blog"}>
          <Link href="/blog" style={{ color: "#fff" }}>
            Blog
          </Link>
        </Styled.NavbarListItem>
        <Styled.NavbarListItem $active={path === "/videos"}>
          <Link href="/videos">Videos</Link>
        </Styled.NavbarListItem>
        <Styled.NavbarListItem $active={path === "/about"}>
          <Link href="about">About</Link>
        </Styled.NavbarListItem>
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
