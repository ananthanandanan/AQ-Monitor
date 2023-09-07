import { Switch, useMantineColorScheme } from "@mantine/core";

import styles from "./SideNav.module.css";
import MantineThemeButton from "./MantineThemeButton";

function SideNav({ toggleView, isActive }) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <aside
      className={`${styles.container} ${
        colorScheme === "dark" ? styles.dark : ""
      }`}
    >
      <nav>
        <div className={styles["top-items"]}>
          <header>
            <h2>AQ Monitor</h2>
          </header>
          <ul>
            <li
              onClick={() => {
                toggleView("Comparative");
              }}
              className={isActive === "Comparative" ? styles.active : ""}
            >
              Comparative
            </li>
            <li
              onClick={() => {
                toggleView("Overlay");
              }}
              className={isActive === "Overlay" ? styles.active : ""}
            >
              Overlay
            </li>
            <li
              onClick={() => {
                toggleView("Wind");
              }}
              className={isActive === "Wind" ? styles.active : ""}
            >
              Wind
            </li>
            <li
              onClick={() => {
                toggleView("Table");
              }}
              className={isActive === "Table" ? styles.active : ""}
            >
              Table
            </li>
          </ul>
        </div>
        <div className={styles["bottom-items"]}>
          <div>
            <Switch
              styles={{ trackLabel: { fontSize: 15 } }}
              onLabel="1"
              offLabel="2"
              size="md"
            />
            <p>Dataset</p>
          </div>
          <div>
            <MantineThemeButton />
            <p>{colorScheme === "dark" ? "Dark" : "Light"} Mode</p>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
