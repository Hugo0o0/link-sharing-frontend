import { FC } from "react";
import { Button } from "components/UI";
import styles from "./PageFooter.module.css";

const PageFooter: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <footer className={styles["page-footer"]}>
      <Button {...props}>Save</Button>
    </footer>
  );
};

export default PageFooter;
