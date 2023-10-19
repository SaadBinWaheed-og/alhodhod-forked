import React, { useState } from "react";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Menu } from "antd";

export const Navbar: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      label: <Link href={"/"}>Home</Link>,
      key: "home",
    },
    {
      label: <Link href="/dictionaryOfDreams">Dictionary of Dreams</Link>,
      key: "dod",
    },
    {
      label: <Link href="/blog">Blog</Link>,
      key: "blog",
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
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

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );

  // return (
  //   <div>
  //     <Link href={"/"}>Home</Link>
  //     <Link href="/dictionaryOfDreams">Dictionary of Dreams</Link>
  //     <Link href="/blog">Blog</Link>
  //     <Link href="videos">Videos</Link>
  //   </div>
  // );
};
