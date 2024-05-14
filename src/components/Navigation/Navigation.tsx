import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import TabButton from "../TabButton/TabButton";
import { Button } from "../UI";
import styles from "./Navigation.module.css";
import { FaLink } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      <Logo size="l" className={styles["nav__logo-large"]} />
      <Logo size="s" className={styles["nav__logo-small"]} />
      <div className={styles.nav__links}>
        <TabButton to="/links" active={pathname === "/links"}>
          <FaLink size={20} />
          <span className={styles["nav__links-text"]}>Links</span>
        </TabButton>
        <TabButton to="/profile" active={pathname === "/profile"}>
          <FaRegCircleUser size={20} />
          <span className={styles["nav__links-text"]}>Profile Details</span>
        </TabButton>
      </div>
      <Button variant="secondary">
        <span className={styles["nav__button-text"]}>Preview</span>
        <LuEye size={20} className={styles["nav__button-icon"]} />
      </Button>
    </nav>
  );
};

export default Navigation;
