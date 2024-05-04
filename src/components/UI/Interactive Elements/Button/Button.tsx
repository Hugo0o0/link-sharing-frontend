import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

const Button = styled.button<ButtonProps>`
  padding: 1.1rem 2.7rem;
  background-color: ${({ variant, disabled }) =>
    variant === "primary"
      ? disabled
        ? "var(--clr-secondary)"
        : "var(--clr-primary)"
      : "transparent"};
  color: ${({ variant }) =>
    variant === "primary" ? "white" : "var(--clr-primary)"};
  font-size: 1.6rem;
  font-weight: normal;
  opacity: ${({ disabled }) => (disabled ? 0.25 : 1)};
  border-radius: 8px;
  transition: all 0.3s;
  border: ${({ variant }) =>
    variant === "primary" ? "none" : "1px solid var(--clr-primary)"};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" ? "var(--clr-secondary)" : "var(--clr-blue-chalk)"};
    box-shadow: ${({ variant }) =>
      variant === "primary" ? "var(--shadow-active)" : "none"};
  }
`;

Button.defaultProps = {
  variant: "primary",
};

export default Button;
