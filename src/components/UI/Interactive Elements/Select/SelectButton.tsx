import styles from "./Select.module.css";
import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import useSelect from "../../../../utils/hooks/useSelect";

interface SelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AnimatedChevronIcon = motion(
  forwardRef<HTMLSpanElement>((_, ref) => {
    return (
      <span ref={ref}>
        <FaChevronDown />
      </span>
    );
  })
);

const SelectButton: FC<SelectButtonProps> = ({ children, ...props }) => {
  const { toggle, isOpen } = useSelect();

  return (
    <button
      {...props}
      onClick={() => {
        toggle();
      }}
      type="button"
      className={styles["select-button"]}
    >
      {children}
      <AnimatedChevronIcon
        style={{ marginLeft: "auto" }}
        animate={{
          rotate: isOpen ? 180 : 0,
        }}
      />
    </button>
  );
};

export default SelectButton;
