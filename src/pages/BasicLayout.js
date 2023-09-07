/* Side Menu */
// Dashboard

import styles from "./BasicLayout.module.css";
import SideNav from "../components/SideNav";

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <SideNav />
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default BasicLayout;
