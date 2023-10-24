import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { Ref } from "react";

export type IconProps = IconComponentProps & {
  ref?: Ref<HTMLSpanElement> | undefined;
};
