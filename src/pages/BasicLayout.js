/* Side Menu */
// Dashboard
import { useMantineColorScheme } from "@mantine/core";
import styles from "./BasicLayout.module.css";
import SideNav from "../components/SideNav";

function BasicLayout(props) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <div className={styles.container}>
      <SideNav />
      <div className={`${styles.content} ${isDark ? styles.dark : ""}`}>
        {props.children}
      </div>
    </div>
  );
}

export default BasicLayout;
