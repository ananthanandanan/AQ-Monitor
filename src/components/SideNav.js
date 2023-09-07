import styles from "./SideNav.module.css";
import { Switch } from "@mantine/core";

function SideNav() {
  return (
    <aside className={styles.container}>
      <nav>
        <div className={styles["top-items"]}>
          <header>
            <h2>AQ Monitor</h2>
          </header>
          <ul>
            <li>Comparative</li>
            <li>Overlay</li>
            <li>Wind</li>
            <li>Table</li>
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
            <Switch
              styles={{ trackLabel: { fontSize: 15 } }}
              onLabel="1"
              offLabel="2"
              size="md"
            />
            <p>Dataset</p>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
