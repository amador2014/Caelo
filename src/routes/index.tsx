import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";

export function AppNavigation() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
