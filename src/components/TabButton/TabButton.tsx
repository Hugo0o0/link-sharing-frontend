import styled from "styled-components";

interface TabButtonProps {
  active?: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  padding: 1.1rem 2.7rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 150%;
  background-color: ${(props) =>
    props.active ? "var(--clr-blue-chalk)" : "transparent"};
  color: ${(props) =>
    props.active ? "var(--clr-primary)" : "var(--clr-smokey-grey)"};

  &:hover * {
    color: var(--clr-primary);
  }
`;

export default TabButton;
