import { PropsWithChildren, forwardRef } from "react";
import { motion } from "framer-motion";
import styles from "./PageMainContent.module.css";

const PageMainContent = motion(
  forwardRef<HTMLDivElement, PropsWithChildren>(({ children }, ref) => {
    return (
      <div ref={ref} className={styles["page-main-content"]}>
        {children}
      </div>
    );
  })
);

export default PageMainContent;
