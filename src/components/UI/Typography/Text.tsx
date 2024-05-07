import styled from "styled-components";
import { Color, ColorToHex } from "../../../@types/types";

interface TextProps {
  size?: "m" | "s";
  color?: Color;
}

/**
 * @author https://github.com/Hugo0o0
 * @prop {string} [size=m] - Size of the text. It can be m or s. Default size is m.
 * @prop {Color} [color=black] - Color of the text. It can be primary, secondary, black, white, or grey. Default color is black.
 * @example <Text size="m" color="black">Hello World</Text>
 * @description Text component is used to render text in the application. It has two sizes: m and s. The default size is m.
 */
const Text = styled.p<TextProps>`
  font-size: ${({ size }) => (size === "m" ? "1.6rem" : "1.2rem")};
  font-weight: normal;
  line-height: 150%;
  color: ${({ color }) => ColorToHex[color || "black"]};
`;

Text.defaultProps = {
  size: "m",
};

export default Text;
