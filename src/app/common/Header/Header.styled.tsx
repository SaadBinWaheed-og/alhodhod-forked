import { Button } from "antd";
import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  width: auto;
  height: 100vh;
  margin: 20px;
`;

export const NavbarContainer = styled.div`
  position: absolute;
  top: 68px;
  right: 98px;
  z-index: 1;
  padding-top: 40px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 98px;
  z-index: 1;
`;

export const HeaderTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  width: 100%;
`;

export const HeaderText = styled.div`
  color: white;
  font-size: 34px;
  font-weight: 400;
  /* color: #c1ff0b; */
`;

export const HeaderSubText = styled.div`
  color: white;
  font-size: 79px;
  font-weight: 700;
`;

export const WebsiteAddress = styled.div`
  font-size: 19px;
  font-weight: 800;
  color: white;
  text-align: center;
`;

export const WebsiteSince = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const HeaderButton = styled(Button)`
  margin-top: 38px;
  text-align: center;
  height: 83px;
  width: 365px;
  background: linear-gradient(94deg, #a2da00 26.2%, #93c600 99.21%);
  > span {
    color: #23262f;
    font-size: 30.376px;
    line-height: 2.3;
  }
`;
