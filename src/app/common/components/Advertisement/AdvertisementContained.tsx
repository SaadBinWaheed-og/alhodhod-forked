"use client";
import React from "react";
import * as Styled from "./Advertisement.styled";

import AdvertisementImage from "../../../../../public/images/advertisement.webp";

export const AdvertisementContained: React.FC = () => {
  return (
    <Styled.AdvertisementContainedContainer>
      <Styled.AdvertisementImageTag
        src={AdvertisementImage}
        fill={true}
        alt="Advertisement"
      />
    </Styled.AdvertisementContainedContainer>
  );
};
