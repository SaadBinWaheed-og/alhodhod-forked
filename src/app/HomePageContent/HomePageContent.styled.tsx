import { styled } from "styled-components";
import { breakpoint } from "../common/ui";
import { Row, Col } from "antd";

export const HomePageContainer = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  ${breakpoint.md} {
    width: 100%;
    padding: 0 20px;
  }
  ${breakpoint.lg} {
    width: 100%;
    padding: 0 72px;
  }
  ${breakpoint.custom(1400)} {
    width: 1350px;
  }
`;
export const HadeesSection = styled.div`
  padding: 68px 109px;
  border-radius: 21px;
  background-color: #fff;
  text-align: center;
  font-family: var(--font-montserrat);
`;

export const ArabesqueContainer = styled(Col)`
  text-align: center;
  margin-bottom: -10px;
  z-index: 1;
`;

export const HadeesSectionTitle = styled.div`
  color: #23262f;
  font-family: var(--font-montserrat);
  font-size: 28px;
  font-weight: 500 !important;
  line-height: 36px;
`;
export const HadeesSectionDescription = styled.div`
  padding-top: 24px;
  color: rgba(35, 38, 47, 0.7);
  font-family: var(--font-montserrat);
  font-size: 28px;
  font-weight: 300;
  line-height: 36.096px;
  letter-spacing: 0.09em;
  word-spacing: 0.2em;
`;
