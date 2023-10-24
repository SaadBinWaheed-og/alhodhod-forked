"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { MenuProps } from "antd";
import { ConfigProvider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useDevice } from "../hooks";
import * as Styled from "./Navbar.styled";
import { MobileNavbar } from "./MobileNavbar/MobileNavbar";
import { CaretDownIcon } from "../customIcons";

export const Navbar: React.FC = () => {
  const device = useDevice();
  const items: MenuProps["items"] = [
    {
      label: <Link href={"/"}>Home</Link>,
      key: "home",
    },
    {
      label: <Link href="/dictionary">Dictionary of Dreams</Link>,
      key: "dod",
    },
    {
      label: (
        <Styled.LinkContainer>
          <Link href="/blog" style={{ color: "#fff" }}>
            Blog
          </Link>
        </Styled.LinkContainer>
      ),
      key: "blog",
      icon: <CaretDownIcon style={{ paddingLeft: "9px" }} />,
      // onTitleClick: () => console.log("clicked"),
      theme: "dark",
      children: [
        {
          label: <Styled.Option>Option</Styled.Option>,
          key: "setting:1",
        },
        {
          type: "divider",
          key: "divider",
        },
        {
          label: <Styled.Option>Option</Styled.Option>,
          key: "setting:2",
        },
      ],
    },
    {
      label: <Link href="videos">Videos</Link>,
      key: "videos",
    },
    {
      label: <Link href="about">About</Link>,
      key: "about",
    },
  ];
  const [current, setCurrent] = useState("mail");

  const handleClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              dropdownWidth: 346,
              itemSelectedColor: "#c1ff0b",
              darkItemColor: "#272727",
              darkItemHoverColor: "#c1ff0b",
              darkItemSelectedColor: "#c1ff0b",
              darkSubMenuItemBg: "#fff",
              darkItemSelectedBg: "#fff",
              darkItemHoverBg: "#fff",
              darkItemBg: "#fff",
            },
          },
        }}
      >
        {device?.isBreakpoint("LG") ? (
          <>
            <Styled.Navbar
              onClick={handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              overflowedIndicator={<MenuOutlined />}
            />
          </>
        ) : (
          <MobileNavbar items={items} onClick={handleClick} current={current} />
        )}
      </ConfigProvider>
    </>
  );
};
