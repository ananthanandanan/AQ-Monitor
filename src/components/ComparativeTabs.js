import { Tabs } from "@mantine/core";

function ComparativeTabs() {
  return (
    <Tabs defaultValue="P1" inverted color="violet" variant="pills">
      <Tabs.List position="center">
        <Tabs.Tab value="P1">P1</Tabs.Tab>
        <Tabs.Tab value="P2.5">P2.5</Tabs.Tab>
        <Tabs.Tab value="P10">P10</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default ComparativeTabs;
