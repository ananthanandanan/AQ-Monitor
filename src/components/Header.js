import { useMantineColorScheme } from "@mantine/core";
import styles from "./Header.module.css";

/**
 * Header is a component that is used to display the header for all views.
 * @param {Object} props
 * @param {string} props.title - The title of the view
 * @param {JSX.Element} props.children - The filters for the view
 *
 * @returns {JSX.Element}
 *
 */
function Header({ title, children: filters }) {
  // Left items: Title of view
  // Right items: Filter
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <header className={`${styles["container"]} ${isDark ? styles.dark : ""}`}>
      <div className={styles["left-items"]}>
        <header>
          <h2>{title}</h2>
        </header>
      </div>
      <div className={styles["right-items"]}>{filters}</div>
    </header>
  );
}

export default Header;
