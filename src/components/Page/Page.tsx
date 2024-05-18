import { FC, PropsWithChildren } from "react";
import { Form } from "formik";
import IllustrationPhone from "components/IllustrationPhone/IllustrationPhone";
import styles from "./Page.module.css";

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.page}>
      <div className={styles.page__phone}>
        <IllustrationPhone />
      </div>

      <Form className={styles.page__content}>{children}</Form>
    </div>
  );
};

export default Page;
