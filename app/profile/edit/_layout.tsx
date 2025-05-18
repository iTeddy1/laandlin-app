import { VStack } from "@/components/ui";
import { Stack } from "expo-router";
import { useState } from "react";

const ProfileEditLayout = () => {
  return (
    <VStack className="flex-1 bg-white">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </VStack>
  );
};

export default ProfileEditLayout;
