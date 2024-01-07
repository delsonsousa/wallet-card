import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#12C2E9"
      d="M26 19.998h-5v5a1 1 0 0 1-2 0v-5h-5a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 1 1 0 2Z"
    />
  </Svg>
);
export default SvgComponent;
