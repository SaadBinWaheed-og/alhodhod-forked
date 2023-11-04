import React, { useEffect, useState } from "react";
import { Space } from "antd";
import Image from "next/image";
import * as Styled from "./page.styled";
import { set } from "lodash";

type Props = {
  id: string;
};

export const Video: React.FC<Props> = ({ id }) => {
  const [videoTitle, setVideoTitle] = useState("");
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${"AIzaSyAb5SJv_rw-pDFFKqcBofymvQX923Lrc6k"}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.items.length > 0) {
          const title = data.items[0].snippet.title;
          setVideoTitle(title);
          console.log("Video Title:", title);
        } else {
          console.log("Video not found or the API key is invalid.");
        }
      })
      .catch((error) => {
        console.error("Error fetching video information:", error);
      });
  }, [id, url]);
  return (
    <>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Styled.Video
          id={id}
          src={`https://www.youtube.com/embed/${id}`}
          allowFullScreen
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></Styled.Video>
        <Space style={{ paddingTop: "17px" }} size={18}>
          <Styled.ImageWrapper>
            <Image
              src="/images/videoIcon.png"
              alt="play"
              width={29.6}
              height={42.0}
            />
          </Styled.ImageWrapper>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Styled.VideoTitle>{videoTitle}</Styled.VideoTitle>
            <Styled.Alhodhod>AL-hodhod</Styled.Alhodhod>
          </div>
        </Space>
      </a>
    </>
  );
};
