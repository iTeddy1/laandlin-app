import { VStack } from "@/components/ui";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <VStack className="flex-1 bg-white">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </VStack>
  );
};

export default ProfileLayout;
