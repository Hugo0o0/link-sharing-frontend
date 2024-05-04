import { FC, PropsWithChildren, createContext, useState } from "react";
import useOutsideClick from "../../utils/hooks/useOutsideClick";

const DropdownContext = createContext({
  isOpen: false,
  toggle: () => {},
  close: () => {},
  open: () => {},
  item: null,
  handleItemChange: (value: any) => {},
});

export default DropdownContext;
