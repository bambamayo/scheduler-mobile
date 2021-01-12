import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./screens/Landing";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import Home from "./screens/Home";

import theme from "./theme";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: theme.colors.colorWhite,
          headerStyle: {
            backgroundColor: theme.colors.colorPrimaryDark,
          },
        }}
      >
        <Stack.Screen
          name=" "
          component={Landing}
          options={{
            headerStyle: {
              shadowColor: "transparent",
              backgroundColor: theme.colors.colorPrimaryDark,
            },
          }}
        />
        <Stack.Screen name="Sign up" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
