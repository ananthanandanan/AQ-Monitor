import { useMantineColorScheme } from "@mantine/core";
import styles from "./ChartCard.module.css";

/**
 * ChartCard is a component that is used to display apex charts for different views.
 *
 * @param {Object} props
 * @param {string} props.subtitles - The subtitles for the chart
 *
 * @returns {JSX.Element}
 *
 */
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
