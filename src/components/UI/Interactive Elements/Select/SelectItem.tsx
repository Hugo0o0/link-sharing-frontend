import { FC, PropsWithChildren } from "react";
import styles from "./Select.module.css";
import useSelect from "../../../../utils/hooks/useSelect";

interface SelectItemProps {
  value?: any;
}

const SelectItem: FC<PropsWithChildren<SelectItemProps>> = ({
  children,
  value,
}) => {
  const { handleSelect } = useSelect();
  return (
    <li
      className={styles["select-item"]}
      onClick={() => {
        handleSelect(value);
      }}
    >
      {children}
    </li>
  );
};

export default SelectItem;
