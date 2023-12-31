import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* renders nested routes (/cities, /countries) */}
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
