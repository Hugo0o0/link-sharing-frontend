import React, { Children, useEffect, useRef, useState } from "react";
import SelectButton from "./SelectButton";
import SelectItems from "./SelectItems";
import SelectItem from "./SelectItem";
import styles from "./Select.module.css";
import SelectContext from "../../../context/SelectContext";
import useOutsideClick from "../../../../utils/hooks/useOutsideClick";
import useKeyPress from "../../../../utils/hooks/useKeyPress";

interface SelectProps {
  children: React.ReactNode;
  onChange?: (value: any) => void;
  value?: any;
}

const Select = ({ children, onChange, value: itemValue }: SelectProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(itemValue);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  useOutsideClick(divRef, () => {
    close();
  });

  useKeyPress("Escape", () => {
    close();
  });

  const handleSelect = (value: any) => {
    setValue(value);
    onChange && onChange(value);
    close();
  };

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        toggle,
        close,
        open,
        value,
        handleSelect,
      }}
    >
      <div ref={divRef} className={styles.select} data-testid="select">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

Select.Button = SelectButton;
Select.Items = SelectItems;
Select.Item = SelectItem;

export default Select;
