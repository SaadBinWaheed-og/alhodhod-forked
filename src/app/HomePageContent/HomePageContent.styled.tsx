import { styled } from "styled-components";
import { breakpoint } from "../common/ui";
import { Row, Col, Button } from "antd";

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
    padding: 0;
  }
`;
export const HadeesSection = styled.div`
  padding: 68px 109px;
  border-radius: 20px;
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
  font-size: 28px;
  font-weight: 400;
  line-height: 36.096px;
`;

export const DreamTitle = styled.div`
  font-family: var(--font-montserrat);
  color: #23262f;
  text-align: center;
  font-size: 52px;
  font-weight: 700;
  line-height: 73.178px;
`;

export const DreamsDescription = styled.div`
  color: #23262f;
  font-family: var(--font-montserrat);
  font-size: 28px;
  font-weight: 400;
  line-height: 38.036px;
  text-align: justify;
`;

export const DreamsButton = styled(Button)`
  font-family: var(--font-montserrat);
  color: #23262f;
  font-size: 21.173px;
  font-weight: 500;
  text-align: center;
  width: 267.271px;
  height: 66.617px;
  box-shadow: none;
  background: #fff;
  border: 0.803px solid #a0a0a0;
  border-radius: 10.4px;
  .ant-btn:hover {
    background: #fff !important;
    border: 0.803px solid #a0a0a0 !important;
  }
  > span {
    color: #23262f;
    font-size: 21.173px;
    font-weight: 500;
    background-color: #fff;
  }
`;

export const SecondSection = styled(Row)`
  margin-top: 76px;
  background-color: #fff;
  width: 100%;
  border-radius: 20px;
`;

export const SecondSectionContainer = styled(Col)`
  padding-left: 58px;
  padding-top: 68px;
  padding-bottom: 68px;
`;

export const BlogSection = styled(Row)`
  margin-top: 76px;
  width: 100%;
  border-radius: 20px;
`;

export const BlogSectionTitle = styled.div`
  color: #23262f;
  text-align: center;
  font-size: 52.427px;
  font-weight: 700;
  font-family: var(--font-montserrat);
`;

export const VideoSection = styled(Row)`
  margin-top: 76px;
  width: 100%;
  border-radius: 20px;
`;
