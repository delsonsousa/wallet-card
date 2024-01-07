import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Circle,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <G clipPath="url(#a)">
      <Circle cx={16} cy={15.5} r={16} fill="#12C2E9" />
      <Path
        fill="#fff"
        d="m12.539 8.5-.241.312-.913 1.227h-.77v-.77H7.538v.77H6v13.846h20V10.038h-5.385l-.913-1.226-.24-.312h-6.923Zm.769 1.539h5.384l.914 1.226.24.312h4.616v3.077H19.99A4.633 4.633 0 0 0 16 12.346c-1.697 0-3.188.935-3.99 2.308H7.537v-3.077h4.616l.24-.312.914-1.226Zm8.077 2.307v1.539h1.538v-1.539h-1.538ZM16 13.885a3.066 3.066 0 0 1 3.077 3.077A3.066 3.066 0 0 1 16 20.038a3.066 3.066 0 0 1-3.077-3.076A3.066 3.066 0 0 1 16 13.885Zm-8.462 2.307h3.919c-.045.254-.07.512-.072.77A4.627 4.627 0 0 0 16 21.577a4.627 4.627 0 0 0 4.615-4.616 4.7 4.7 0 0 0-.072-.769h3.919v6.154H7.538v-6.154Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
