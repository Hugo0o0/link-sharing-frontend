import styles from "./PageHead.module.css";
import { FC, PropsWithChildren } from "react";

const PageHead: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles["page-head"]}>{children}</div>;
};

export default PageHead;
