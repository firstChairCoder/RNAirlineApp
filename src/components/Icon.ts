/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Icon = createIconSetFromIcoMoon(
  require("@assets/fonts/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default Icon;
