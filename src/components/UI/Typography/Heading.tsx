import styled from "styled-components";

interface HeadingProps {
  size?: "m" | "s";
}

const Heading = styled.h1<HeadingProps>`
  font-size: ${({ size }) => (size === "m" ? "3.2rem" : "1.6rem")};
  font-weight: bold;
  line-height: 150%;
  color: var(--clr-dark);
`;

Heading.defaultProps = {
  size: "m",
};

export default Heading;
