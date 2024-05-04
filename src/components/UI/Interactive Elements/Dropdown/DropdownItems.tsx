import { FC, PropsWithChildren } from "react";
import styles from "./Dropdown.module.css";
import useDropdown from "../../../../utils/hooks/useDropdown";
import { AnimatePresence, motion } from "framer-motion";

const DropdownItems: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen } = useDropdown();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles["dropdown-items"]}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default DropdownItems;
