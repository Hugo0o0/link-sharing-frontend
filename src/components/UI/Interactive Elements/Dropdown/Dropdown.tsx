import React, { useEffect, useRef, useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownItems from "./DropdownItems";
import DropdownItem from "./DropdownItem";
import styles from "./Dropdown.module.css";
import DropdownContext from "../../../context/DropdownContext";
import useOutsideClick from "../../../../utils/hooks/useOutsideClick";
import useKeyPress from "../../../../utils/hooks/useKeyPress";

interface DropdownProps {
  children: React.ReactNode;
  onChange?: (value: any) => void;
}

const Dropdown = ({ children, onChange }: DropdownProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(null);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  const handleItemChange = (value: any) => {
    setItem(value);
    onChange && onChange(value);
    close();
  };

  useOutsideClick(divRef, () => {
    close();
  });

  useKeyPress("Escape", () => {
    close();
  });

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggle,
        close,
        open,
        item,
        handleItemChange,
      }}
    >
      <div ref={divRef} className={styles.dropdown}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Button = DropdownButton;
Dropdown.Items = DropdownItems;
Dropdown.Item = DropdownItem;

export default Dropdown;
