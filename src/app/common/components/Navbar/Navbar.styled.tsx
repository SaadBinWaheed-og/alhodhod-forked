import { styled } from "styled-components";
import { Menu } from "antd";

export const Navbar = styled(Menu)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: none;
  max-width: 767px;
  height: 27px;
  padding-top: 68px !important;
  padding-right: 98px !important;
  background-color: transparent !important;
  font-family: var(--font-montserrat);

  .ant-menu-item {
    color: #fff;
    background: #fff;
    font-size: 22px;
    font-weight: 600;
    line-height: 24px;
    border-bottom: none !important;
    background-color: transparent !important;
  }
  .ant-menu-item:first-child {
    padding-left: 0px !important;
  }

  .ant-menu-item:last-child {
    padding-right: 0px !important;
  }

  .ant-menu-item::after {
    border-bottom: none !important;
  }

  .ant-menu-item:hover::after {
    border-bottom: none !important;
  }

  .ant-menu-item-selected {
    color: #c1ff0b !important;
    font-weight: 600 !important;
  }

  .ant-menu-item:hover {
    color: #c1ff0b !important;
  }

  .ant-menu-item-selected:hover {
    color: #c1ff0b !important;
  }

  .ant-menu-submenu:hover {
    color: #c1ff0b !important;
  }

  .ant-menu-submenu {
    color: #fff;
    background: #fff;
    font-size: 22px;
    font-family: var(--font-montserrat);
    font-weight: 600;
    line-height: 24px;
    border-bottom: none !important;
    background-color: transparent !important;
  }

  .ant-menu-submenu::after {
    border-bottom: none !important;
  }

  .ant-menu-submenu-title {
    display: flex;
    flex-direction: row-reverse;
    margin: 0px !important;
  }
`;

export const LinkContainer = styled.div`
  color: #fff !important;
  :hover {
    color: #c1ff0b !important;
  }
`;

export const Option = styled.div`
  font-size: 18px;
`;
