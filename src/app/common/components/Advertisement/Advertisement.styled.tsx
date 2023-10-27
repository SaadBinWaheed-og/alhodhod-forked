import { styled } from "styled-components";
import Image from "next/image";

export const AdvertisementContainer = styled.div`
  display: flex;
  margin-top: 8vh;
  flex-direction: column;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  width: 78.125vw;
  border-radius: 30px;
`;

export const AdvertisementText = styled.div`
  font-size: 31px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
`;

export const AdvertisementImageTag = styled(Image)`
  position: relative !important;
  border-radius: 20px;
`;
