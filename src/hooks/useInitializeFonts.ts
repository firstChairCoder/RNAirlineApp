import { useFonts } from "expo-font";

export const useInitializeFonts = () => {
  const [loaded] = useFonts({
    "Muli-Regular": require("@assets/fonts/Muli-Regular"),
    "Muli-SemiBold": require("@assets/fonts/Muli-SemiBold"),
    "Muli-Bold": require("@assets/fonts/Muli-Bold"),
    "Muli-ExtraBold": require("@assets/fonts/Muli-ExtraBold"),
    IcoMoon: require("@assets/fonts/icomoon/icomoon"),
  });

  return { isLoaded: loaded };
};
