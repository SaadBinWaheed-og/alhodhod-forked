"use client";
import React from "react";
import * as Styled from "./Advertisement.styled";

import AdvertisementImage from "../../../../../public/images/advertisement.svg";

export const AdvertisementContained: React.FC = () => {
  return (
    <Styled.AdvertisementContainedContainer>
      <Styled.AdvertisementImageTag
        src={AdvertisementImage}
        layout="fill"
        alt="Advertisement"
      />
    </Styled.AdvertisementContainedContainer>
  );
};
