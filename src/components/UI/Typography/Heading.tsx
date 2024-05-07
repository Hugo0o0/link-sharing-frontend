import styled from "styled-components";
import { Color, ColorToHex } from "../../../@types/types";

interface HeadingProps {
  size?: "m" | "s";
  color?: Color;
}
/**
 * @author https://github.com/Hugo0o0
 * @prop {string} [size=m] - Size of the text. It can be m or s. Default size is m.
 * @prop {Color} [color=black] - Color of the text. It can be primary, secondary, black, white, or grey. Default color is black.
 * @example <Heading size="s" color="primary">Hello World</Heading>
 * @description Heading component is used to render headings in the application. It has two sizes: m and s. The default size is m.
 */
const Heading = styled.h1<HeadingProps>`
  font-size: ${({ size }) => (size === "m" ? "3.2rem" : "1.6rem")};
  font-weight: bold;
  line-height: 150%;
  color: ${({ color }) => ColorToHex[color || "black"]};
`;

Heading.defaultProps = {
  size: "m",
};

export default Heading;
