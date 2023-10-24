import React, { useState } from "react";
import { Button, Drawer } from "antd";
import type { MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import * as Styled from "./MobileNavbar.styled";

type Props = {
  items: MenuProps["items"];
  current: string;
  onClick: (e: any) => void;
};

export const MobileNavbar: React.FC<Props> = ({ items, current, onClick }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button type="primary" onClick={toggleDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={toggleDrawer}
        open={open}
      >
        <Styled.Navbar
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
          style={{ backgroundColor: "blue" }}
          overflowedIndicator={<MenuOutlined />}
        />
      </Drawer>
    </>
  );
};
