import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#12C2E9"
      d="M27.375 19.625H14.612l4.632-4.631-1.238-1.238-6.743 6.744 6.743 6.744 1.238-1.238-4.632-4.631h12.763v-1.75Z"
    />
  </Svg>
);
export default SvgComponent;
