import { FC, PropsWithChildren } from "react";
import styles from "./PageMain.module.css";

const PageMain: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles["page-main"]}>{children}</main>;
};

export default PageMain;
