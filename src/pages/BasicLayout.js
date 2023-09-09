import { useMantineColorScheme } from "@mantine/core";
import styles from "./BasicLayout.module.css";
import SideNav from "../components/SideNav";

/**
 * BasicLayout is a wrapper component that provides a consistent layout for all pages.
 *
 * @param {Object} props
 * @param {boolean} props.isActive - Whether the side nav is active or not
 * @param {function} props.toggleView - Function to toggle the side nav
 * @param {function} props.toggleDataset - Function to toggle the dataset
 *
 * @returns {JSX.Element}
 */

function BasicLayout(props) {
  // Set the color scheme to dark if the user has selected dark mode
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <div className={styles.container}>
      <SideNav
        toggleView={props.toggleView}
        isActive={props.isActive}
        toggleDataset={props.toggleDataset}
      />
      <div className={`${styles.content} ${isDark ? styles.dark : ""}`}>
        {props.children}
      </div>
    </div>
  );
}

export default BasicLayout;
