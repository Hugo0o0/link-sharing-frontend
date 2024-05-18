import { FC, PropsWithChildren } from "react";
import { FormikProps } from "formik";
import styles from "./PageMain.module.css";

interface Props<Values> {
  children: ((props: FormikProps<Values>) => React.ReactNode) | React.ReactNode;
}
const PageMain: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles["page-main"]}>{children}</main>;
};

export default PageMain;
