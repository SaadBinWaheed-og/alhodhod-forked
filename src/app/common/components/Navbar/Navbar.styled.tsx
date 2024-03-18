import { styled } from "styled-components";

export const NavBarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 41.4px 0px 0px 0px;
  display: flex;
  align-items: center;
  > li {
    margin-right: 57.7px;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavbarListItem = styled.li<{
  $active?: boolean;
}>`
  display: inline-block;
  position: relative;
  background: transparent;
  color: ${({ $active }) => ($active ? "#c1ff0b" : "#fff")};
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  border-bottom: none !important;
  a {
    text-decoration: none;
    color: ${({ $active }) => ($active ? "#c1ff0b" : "#fff")};
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

export const LanguageSwitcherContainer = styled.div`
  padding-right: 24px;
`;