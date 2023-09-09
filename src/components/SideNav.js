import { Switch, useMantineColorScheme } from "@mantine/core";

import styles from "./SideNav.module.css";
import MantineThemeButton from "./MantineThemeButton";
import { IconChartArea, IconChartLine } from "@tabler/icons-react";

function SideNav({ toggleView, isActive, toggleDataset }) {
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
              <IconChartArea />
              Comparative
            </li>
            <li
              onClick={() => {
                toggleView("Overlay");
              }}
              className={isActive === "Overlay" ? styles.active : ""}
            >
              <IconChartLine />
              Overlay
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
              onClick={toggleDataset}
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
