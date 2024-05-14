import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Heading } from "../UI";
import IllustrationPhone from "../IllustrationPhone/IllustrationPhone";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.main__phone}>
          <IllustrationPhone />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
