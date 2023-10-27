import styled from "styled-components";
import { Button, Card } from "antd";
import { breakpoint } from "../../ui";

export const ViewDetailsButton = styled(Button)`
  width: 162.128px;
  height: 50.565px;
  box-shadow: none;
  border-radius: 9.631px;
  border: 1.605px solid #e2e2e2;
  .ant-btn-primary:hover {
    background: #fff !important;
    border: 1.605px solid #e2e2e2 !important;
  }
  > span {
    font-family: var(--font-montserrat);
    color: #2a2d36;
    text-align: center;
    font-size: 19.054px;
    font-weight: 500;
  }
`;

export const BlogCard = styled(Card)<{ $width: number; $height: number }>`
  padding: 20px 24px !important;
  border-radius: 19.263px !important;
  .ant-card {
    width: 100%;
    ${breakpoint.lg} {
      width: ${({ $width }) => $width}px;
    }
    height: ${({ $height }) => $height}px;
  }
  .ant-card-cover {
    img {
      border-radius: 19.263px !important;
    }
  }
  .ant-card-meta-title {
    padding-top: 18px;
    color: #23262f;
    font-family: var(--font-montserrat);
    font-size: 27.667px;
    font-weight: 600;
    line-height: 36.118px;
  }
  .ant-card-meta-description {
    color: rgba(35, 38, 47, 0.8);
    font-family: var(--font-montserrat);
    font-size: 17.658px;
    font-weight: 400;
  }
  .ant-card-actions {
    border-top: none !important;
    margin-top: 8px !important;
    margin-bottom: 0px !important;
    > li {
      margin: 0px !important;
    }
  }
`;
