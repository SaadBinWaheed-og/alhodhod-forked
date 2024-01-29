"use client";
import React from "react";
import * as Styled from "./Advertisement.styled";

import AdvertisementImage from "../../../../../public/images/advertisement.svg";

export const Advertisement: React.FC = () => {
  return (
    <Styled.AdvertisementContainer>
      <Styled.AdvertisementText>Advertisement</Styled.AdvertisementText>
      <Styled.AdvertisementImageTag
        src={AdvertisementImage}
        fill={true}
        alt="Advertisement"
      />
    </Styled.AdvertisementContainer>
  );
};
