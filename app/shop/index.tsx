// app/shop/index.tsx
import { Text } from "@/components/ui";
import ShopScreen from "@/screens/ShopScreen";
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <>
      <ShopScreen />
    </>
  );
}
