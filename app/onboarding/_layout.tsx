import { Stack } from "expo-router";
import { VStack } from "../../components/ui/vstack";

export default function OnboardingLayout() {
  return (
    <VStack className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </VStack>
  );
}
