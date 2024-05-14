import { Link } from "react-router-dom";
import styled from "styled-components";

interface TabButtonProps {
  active?: boolean;
}

const TabButton = styled(Link)<TabButtonProps>`
  border-radius: 8px;
  padding: 1.1rem 2.7rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 150%;
  background-color: ${(props) =>
    props.active ? "var(--clr-blue-chalk)" : "transparent"};
  color: ${(props) =>
    props.active ? "var(--clr-primary)" : "var(--clr-smokey-grey)"};
  transition: all 0.3s;

  &:hover * {
    color: var(--clr-primary);
  }
`;

export default TabButton;
