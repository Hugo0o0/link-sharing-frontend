import { FC, PropsWithChildren } from "react";
import styles from "./PageHead.module.css";

const PageHead: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles["page-head"]}>{children}</div>;
};

export default PageHead;
