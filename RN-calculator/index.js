import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("RN-calculator", () => App);

AppRegistry.runApplication("RN-calculator", {
  initialProps: {},
  rootTag: document.getElementById("root"),
});
