/* eslint-disable import/extensions */
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
// import { Provider } from "react-redux";
// import { store } from "@store/store";

// import { useInitializeFonts } from "./src/hooks/useInitializeFonts";
import { PaperTheme } from "./src/theme";
import { MainNavigator } from "./src/navigation";
import { LoadAssets } from "./src/components";

const fonts = {
  "Muli-Regular": require("@assets/fonts/Muli-Regular.ttf"),
  "Muli-SemiBold": require("@assets/fonts/Muli-SemiBold.ttf"),
  "Muli-Bold": require("@assets/fonts/Muli-Bold.ttf"),
  "Muli-ExtraBold": require("@assets/fonts/Muli-ExtraBold.ttf"),
  IcoMoon: require("@assets/fonts/icomoon/icomoon.ttf"),
};

export default function App() {
  // const { isLoaded } = useInitializeFonts();

  // if (!isLoaded) {
  //   return null;
  // }

  return (
    // <Provider store={store}>
    <LoadAssets {...{ fonts }}>
      <PaperProvider theme={PaperTheme}>
        <MainNavigator />
      </PaperProvider>
    </LoadAssets>
    // </Provider>
  );
}
