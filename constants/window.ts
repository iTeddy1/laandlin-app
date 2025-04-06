import { Dimensions, Platform } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const IS_IOS_DEVICE = Platform.OS === "ios";
const IS_ANDROID_DEVICE = Platform.OS === "android";

export { WINDOW_WIDTH, WINDOW_HEIGHT, IS_IOS_DEVICE, IS_ANDROID_DEVICE };
