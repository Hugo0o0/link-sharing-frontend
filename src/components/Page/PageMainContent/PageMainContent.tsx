import { FC, PropsWithChildren, forwardRef } from "react";
import styles from "./PageMainContent.module.css";
import { motion } from "framer-motion";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
