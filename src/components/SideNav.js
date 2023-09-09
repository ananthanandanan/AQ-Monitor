import { Switch, useMantineColorScheme } from "@mantine/core";

import styles from "./SideNav.module.css";
import MantineThemeButton from "./MantineThemeButton";
import { IconChartArea, IconChartLine, IconWind } from "@tabler/icons-react";

/**
 * SideNav is a component that is used to display the side nav for all views.
 * @param {Object} props
 * @param {string} props.isActive - The active view
 * @param {function} props.toggleView - Function to toggle the view
 * @param {function} props.toggleDataset - Function to toggle the dataset
 * @returns {JSX.Element}
 *
 */
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
            <li
              onClick={() => {
                toggleView("Wind");
              }}
              className={isActive === "Wind" ? styles.active : ""}
            >
              <IconWind />
              Wind
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
