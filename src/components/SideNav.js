import styles from "./SideNav.module.css";

function SideNav() {
  return (
    <aside className={styles.container}>
      <header>
        <h2>AQ Monitor</h2>
      </header>
      <nav>
        <ul>
          <li>Comparative</li>
          <li>Overlay</li>
          <li>Wind</li>
          <li>Table</li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideNav;
