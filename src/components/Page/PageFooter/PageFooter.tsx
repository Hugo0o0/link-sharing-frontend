import { Button } from "../../UI";
import styles from "./PageFooter.module.css";
import { FC, PropsWithChildren } from "react";

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
