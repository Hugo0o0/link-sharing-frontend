import { FC, PropsWithChildren } from "react";
import styles from "./Dropdown.module.css";
import useDropdown from "../../../../utils/hooks/useDropdown";

interface DropdownItemProps {
  value: any;
}

const DropdownItem: FC<PropsWithChildren<DropdownItemProps>> = ({
  children,
  value,
}) => {
  const { handleItemChange } = useDropdown();
  return (
    <li
      onClick={handleItemChange.bind(null, value)}
      className={styles["dropdown-item"]}
    >
      <button>{children}</button>
    </li>
  );
};

export default DropdownItem;
