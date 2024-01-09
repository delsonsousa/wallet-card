import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = ({ fill, ...props }: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke={fill}
      strokeWidth={1.5}
      d="M69.444 75H30.556A5.555 5.555 0 0 1 25 69.444V30.556A5.555 5.555 0 0 1 30.556 25h38.888A5.555 5.555 0 0 1 75 30.556v38.888A5.555 5.555 0 0 1 69.444 75Z"
    />
    <Path
      stroke={fill}
      strokeWidth={1.5}
      d="M25 58.333h17.778c.92 0 1.68.773 2.083 1.6C45.433 61.108 46.79 62.5 50 62.5c3.211 0 4.567-1.389 5.139-2.567.403-.827 1.164-1.6 2.083-1.6H75M25 36.111h50M25 47.222h50"
    />
  </Svg>
);
export default SvgComponent;
