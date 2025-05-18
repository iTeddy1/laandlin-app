// app/favorite/_layout.tsx
import { Stack } from "expo-router";
import { VStack } from "../../components/ui/vstack";

export default function FavoriteLayout() {
  return (
    <VStack className="flex-1 bg-red-100">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </VStack>
  );
}
