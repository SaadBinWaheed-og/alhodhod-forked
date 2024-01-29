import { styled } from "styled-components";
import { Drawer as DrawerUi } from "antd";

export const MobileNavbar = styled.div`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const Drawer = styled(DrawerUi)`
  border-radius: 5px;
  background: #fff;
  box-shadow: 9px 9px 35px 0px rgba(0, 0, 0, 0.09);
`;
export const NavBarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 20px;
  }
`;

export const NavbarListItem = styled.li<{
  $active: boolean;
}>`
  display: flex;
  position: relative;
  line-height: 24px;
  color: #6d6c6c;
  font-size: 14.17px;
  font-weight: 400;
  padding: 12px 14px;
  border-radius: 2.01px;
  border: 1px solid #f4f4f4;
  background: ${({ $active }) => ($active ? "#F4F4F4" : "#fff")};

  a {
    text-decoration: none;
    color: #6d6c6c;
  }

  :hover {
    color: #c1ff0b !important;
  }
  :hover:before {
    content: "";
    position: absolute;
    bottom: -15px;
    background: #c1ff0b;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    left: calc(50%);
  }
`;
