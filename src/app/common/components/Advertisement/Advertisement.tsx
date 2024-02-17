"use client";
import React from "react";
import * as Styled from "./Advertisement.styled";
import { AdSenseComponent } from "../AdSenseComponent";

export const Advertisement: React.FC = () => {
  return (
    <Styled.AdvertisementContainer>
      <Styled.AdvertisementText>Advertisement</Styled.AdvertisementText>
      <AdSenseComponent
        adClient="ca-pub-4511775489420895"
        adFormat="auto"
        adSlot="4162141056"
      />
    </Styled.AdvertisementContainer>
  );
};
