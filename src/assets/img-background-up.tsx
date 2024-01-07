import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#EEE"
      d="M284.527 0 0 202.462l107.413 150.951c16.01 22.499 47.228 27.76 69.727 11.75l203.049-144.485c22.5-16.01 27.76-47.228 11.75-69.728L284.527 0Z"
      opacity={0.2}
    />
  </Svg>
);
export default SvgComponent;
