import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      aria-label="Toggle dark mode"
      position="fixed"
      top="1rem"
      right="1rem"
      size="sm"
      isRound={true}
      color={isDark ? "orange.500" : "yellow.300"}
      backgroundColor={isDark ? "gray.50" : "gray.700"}
      _hover={{ backgroundColor: isDark ? "gray.200" : "gray.900" }}
      icon={
        isDark ? <SunIcon boxSize="1.25em" /> : <MoonIcon boxSize="1.25em" />
      }
      onClick={toggleColorMode}
    />
  );
};
