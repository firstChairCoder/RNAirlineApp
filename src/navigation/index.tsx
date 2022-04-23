import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import { Connections } from "src/screens";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    // <NavigationContainer>
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={"Connections"}
          component={Connections}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};
