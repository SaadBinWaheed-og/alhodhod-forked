import React, { useEffect } from "react";

type Props = {
  adClient: string;
  adSlot: string;
  adFormat: string;
};

const AdsComponent = ({ adClient, adSlot, adFormat }: Props) => {
  useEffect(() => {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
    ></ins>
  );
};

export default AdsComponent;
