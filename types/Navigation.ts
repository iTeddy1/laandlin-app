import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  "shop/[slug]": { slug: string };
  // Add other routes here
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
