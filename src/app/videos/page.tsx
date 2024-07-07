"use client";

import React from "react";
import * as Styled from "./page.styled";
import { Video } from "./Video";
import i18n from "@/i18n";

export default function Videos() {
  const videos = [
    { id: "ecAXYabuusA" },
    { id: "jpWPO5Qh8C8" },
    { id: "8YXxH8Z9P1Y" },
    { id: "lx2yMhcynuw" },
    { id: "zs-rk6WNhiE&t=2s" },
    { id: "IQEOOTf35hQ" },
    { id: "PRjdIzKM0Zc" },
    { id: "IL-ofaMugus" },
    { id: "IL-ofaMugus" },
  ];
  return (
    <div>
      <Styled.VideoSection>
        {videos.map((video) => {
          return (
            <Styled.VideoWrapper lang={i18n.language} key={video.id}>
              <Video id={video.id} />
            </Styled.VideoWrapper>
          );
        })}
      </Styled.VideoSection>
    </div>
  );
}
