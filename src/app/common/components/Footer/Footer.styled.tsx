import { styled } from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.div`
  padding: 0px 20px;
`;
export const FooterContainer = styled.div`
  border-radius: 10px;
  background: linear-gradient(98deg, #102650 -0.23%, #54526d 94.26%);
  padding: 128px 98px 43px 98px;
`;

export const UiLink = styled(Link)`
  font-family: var(--font-montserrat);
  color: #fff;
  font-size: 27px;
  font-weight: 400;
  line-height: 24px;
`;
export const LogoContainer = styled.div`
  top: 40px;
  left: 98px;
`;

export const WebsiteAddress = styled.div`
  font-family: var(--font-montserrat);
  font-size: 19px;
  font-weight: 800;
  color: white;
  text-align: center;
`;

export const WebsiteSince = styled.div`
  font-family: var(--font-montserrat);
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const CopyRight = styled.div`
  font-family: var(--font-montserrat);
  color: #bec2cf;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;
