import styled from "styled-components";

interface TextProps {
  size?: "m" | "s";
}

const Text = styled.p<TextProps>`
  font-size: ${({ size }) => (size === "m" ? "1.6rem" : "1.2rem")};
  font-weight: normal;
  line-height: 150%;
  color: var(--clr-dark);
`;

Text.defaultProps = {
  size: "m",
};

export default Text;
