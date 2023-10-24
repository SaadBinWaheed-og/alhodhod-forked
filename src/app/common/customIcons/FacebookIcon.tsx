import Icon from "@ant-design/icons";
import React from "react";

import { IconProps } from "./types";

const FacebookIconSvg = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 13.0301C24 6.38947 18.624 1 12 1C5.376 1 0 6.38947 0 13.0301C0 18.8526 4.128 23.7008 9.6 24.8195V16.6391H7.2V13.0301H9.6V10.0226C9.6 7.70075 11.484 5.81203 13.8 5.81203H16.8V9.42105H14.4C13.74 9.42105 13.2 9.96241 13.2 10.6241V13.0301H16.8V16.6391H13.2V25C19.26 24.3985 24 19.2737 24 13.0301Z"
      fill="white"
    />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => {
  return <Icon component={FacebookIconSvg} {...props} />;
};
