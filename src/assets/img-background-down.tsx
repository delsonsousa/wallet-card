import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#EEE"
      d="M131.002 384.546 398.79 160.412 279.88 18.342c-17.724-21.176-49.258-23.974-70.434-6.25L18.342 172.042c-21.176 17.724-23.974 49.258-6.25 70.434l118.91 142.07Z"
      opacity={0.2}
    />
  </Svg>
);
export default SvgComponent;
