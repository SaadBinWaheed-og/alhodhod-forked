import Icon from "@ant-design/icons";
import React from "react";

import { IconProps } from "./types";

const CaretDownIconGraySvg = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="#616161"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector"
      d="M10.59 0.000156279L6 4.58016L1.41 0.000155477L5.24537e-07 1.41016L6 7.41016L12 1.41016L10.59 0.000156279Z"
      fill="#616161"
    />
  </svg>
);

export const CaretDownIconGray: React.FC<IconProps> = (props) => {
  return <Icon component={CaretDownIconGraySvg} {...props} />;
};
