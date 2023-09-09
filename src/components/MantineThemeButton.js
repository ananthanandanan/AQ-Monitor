import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
/**
 * MantineThemeButton is a component that is used to display the theme button.
 * @returns {JSX.Element}
 *
 */
function MantineThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Switch
        size="md"
        color={colorScheme === "dark" ? "dark" : "light"}
        onLabel={
          <IconSun size="1rem" stroke={2.5} color={theme.colors.yellow[4]} />
        }
        offLabel={
          <IconMoonStars
            size="1rem"
            stroke={2.5}
            color={theme.colors.blue[6]}
          />
        }
        onChange={() => toggleColorScheme()}
      />
    </Group>
  );
}

export default MantineThemeButton;
