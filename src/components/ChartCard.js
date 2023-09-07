import { useMantineColorScheme } from "@mantine/core";
import styles from "./ChartCard.module.css";

function ChartCard(props) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <section className={`${styles["container"]} ${isDark ? styles.dark : ""}`}>
      <div className={styles["chart"]}>{props.children}</div>
      <p>{props.subtitles}</p>
    </section>
  );
}

export default ChartCard;
