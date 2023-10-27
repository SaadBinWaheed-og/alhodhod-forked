"use client";
import React from "react";
import Image from "next/image";
import { Card } from "antd";

import * as Styled from "./BlogCard.styled";

const { Meta } = Card;

type Props = {
  width: number;
  height: number;
  icon: string;
  title: string;
  description: string;
  link: string;
};
export const BlogCard: React.FC<Props> = ({
  width,
  height,
  icon,
  title,
  description,
  link,
}) => {
  return (
    <Styled.BlogCard
      hoverable
      cover={<Image alt="example" src={icon} height={300} />}
      $width={width}
      $height={height}
      actions={[
        <div
          key="view-details"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Styled.ViewDetailsButton
            key="view-details"
            style={{ color: "black" }}
          >
            View Details
          </Styled.ViewDetailsButton>
        </div>,
      ]}
      bodyStyle={{
        padding: "0px",
        fontSize: "20px",
      }}
    >
      <Meta key="meta" title={title} description={description} />
    </Styled.BlogCard>
  );
};
