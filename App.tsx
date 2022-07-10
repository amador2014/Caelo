import React from "react";
import { extendTheme } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppNavigation } from "./src/routes";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

type MyThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export const theme = extendTheme({ config });

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}
