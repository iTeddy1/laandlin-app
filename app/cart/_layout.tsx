// app/favorite/_layout.tsx
import { Stack } from "expo-router";
import { Text } from "../../components/ui/text";
import { VStack } from "../../components/ui/vstack";

export default function CartLayout() {
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
