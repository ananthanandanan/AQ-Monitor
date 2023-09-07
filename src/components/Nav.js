import styles from "./Nav.module.css";

function Nav({ title, children: filters }) {
  // Left items: Title of view
  // Right items: Filter
  return (
    <nav className={styles["container"]}>
      <div className={styles["left-items"]}>
        <header>
          <h2>{title}</h2>
        </header>
      </div>
      <div className={styles["right-items"]}>{filters}</div>
    </nav>
  );
}

export default Nav;
