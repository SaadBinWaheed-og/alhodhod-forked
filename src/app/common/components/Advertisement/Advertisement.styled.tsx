import { styled } from "styled-components";
import Image from "next/image";
import { breakpoint } from "../../ui";

export const AdvertisementContainer = styled.div`
  display: flex;
  margin-top: 8vh;
  flex-direction: column;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  border-radius: 30px;
  ${breakpoint.md} {
    width: 100%;
  }
  ${breakpoint.lg} {
    width: 100%;
  }
  ${breakpoint.custom(1400)} {
    width: 1350px;
    padding: 0;
  }
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
