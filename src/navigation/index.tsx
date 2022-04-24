import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import { Booking, Connections } from "src/screens";
import { t } from "@translations";

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
        <Stack.Screen
          name={"BookingScreen"}
          component={() => <Booking />}
          options={{ title: t.myBooking.title }}
        />
      </Stack.Navigator>
    </>
  );
};
