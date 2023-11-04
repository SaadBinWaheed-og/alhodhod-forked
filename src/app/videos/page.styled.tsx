import { styled } from "styled-components";
import { breakpoint } from "@/app/common/ui";

export const VideoSection = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 46px;
  align-items: center;
  flex-wrap: wrap;
  padding: 130px 20px 130px;
  justify-content: center;
  ${breakpoint.md} {
    padding: 130px 20px 130px;
    justify-content: center;
  }
  ${breakpoint.lg} {
    padding: 130px 72px;
    justify-content: space-between;
  }
  ${breakpoint.xl} {
    padding: 130px 72px 130px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-around;
  }
  ${breakpoint.custom(1370)} {
    padding: 130px 20px 130px;
    max-width: 1350px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 352px;
  overflow: hidden;

  ${breakpoint.md} {
    width: 432px;
  }

  ${breakpoint.lg} {
    width: 432px;
  }
`;

export const Video = styled.iframe`
  border-radius: 17.1px;
  width: 352px;
  height: 198px;
  border: none;

  ${breakpoint.md} {
    width: 432px;
    height: 243px;
  }

  ${breakpoint.lg} {
    width: 432px;
    height: 243px;
  }
`;

export const VideoTitle = styled.div`
  color: #23262f;
  font-family: var(--font-montserrat);
  font-size: 29.068px;
  font-style: normal;
  font-weight: 600;
  line-height: 37.946px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 348px;
`;

export const ImageWrapper = styled.div`
  width: 59.4px;
  height: 59.4px;
  border-radius: 50%;
  position: relative;
  background-color: #c1ff0b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Alhodhod = styled.div`
  color: rgba(35, 38, 47, 0.8);

  font-family: var(--font-montserrat);
  font-size: 18.551px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
