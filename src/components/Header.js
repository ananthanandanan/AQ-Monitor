import { useMantineColorScheme } from "@mantine/core";
import styles from "./Header.module.css";

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
