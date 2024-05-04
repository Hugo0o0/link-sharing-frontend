import styles from "./Dropdown.module.css";
import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import useDropdown from "../../../../utils/hooks/useDropdown";

interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AnimatedChevronIcon = motion(
  forwardRef<HTMLSpanElement>((props, ref) => {
    return (
      <span ref={ref}>
        <FaChevronDown />
      </span>
    );
  })
);

const DropdownButton: FC<DropdownButtonProps> = ({ children, ...props }) => {
  const { toggle, isOpen, item } = useDropdown();

  return (
    <button
      {...props}
      onClick={() => {
        toggle();
      }}
      className={styles["dropdown-button"]}
    >
      {children}
      <AnimatedChevronIcon
        animate={{
          rotate: isOpen ? 180 : 0,
        }}
      />
    </button>
  );
};

export default DropdownButton;
