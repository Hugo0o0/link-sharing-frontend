import { createContext } from "react";

interface SelectContextProps {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
  handleSelect: (value: any) => void;
  value?: any;
}

const SelectContext = createContext<SelectContextProps>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
  open: () => {},
  handleSelect: () => {},
  value: null,
});

export default SelectContext;
