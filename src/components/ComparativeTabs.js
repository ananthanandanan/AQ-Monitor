import { Tabs } from "@mantine/core";

/**
 * ComparativeTabs is a component that is used to display the comparative tabs for the comparative view.
 * @param {Object} props
 * @param {function} props.toggleTabs - Function to toggle the tabs
 * @returns {JSX.Element}
 *
 */
function ComparativeTabs({ toggleTabs }) {
  return (
    <Tabs defaultValue="P1" inverted color="violet" variant="pills">
      <Tabs.List position="center">
        <Tabs.Tab onClick={() => toggleTabs("p1")} value="P1">
          P1
        </Tabs.Tab>
        <Tabs.Tab onClick={() => toggleTabs("p2_5")} value="P2.5">
          P2.5
        </Tabs.Tab>
        <Tabs.Tab onClick={() => toggleTabs("p10")} value="P10">
          P10
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default ComparativeTabs;
