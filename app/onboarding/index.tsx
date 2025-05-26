import { View, ImageBackground } from "react-native";
import { Button, ButtonText, Image, Text, VStack } from "@/components/ui";
import { Stack, useRouter } from "expo-router";
import { SafeAreaInsetsContext, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Onboarding() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <>
      <View className="absolute inset-0 z-10">
        <Image className="h-full w-full" source={require("assets/images/overlay.png")} />
      </View>

      <ImageBackground
        source={require("assets/images/onboard.png")}
        style={{ flex: 1, justifyContent: "flex-end", paddingBottom: insets.bottom + 100 }}
      >
        <VStack className="mx-4 mb-10" space="md">
          <Text className="mb-2 text-3xl font-bold text-white">Laandlin App</Text>
          <Text className="mb-6 text-white">Design and Handmade children’s clothes by Alex’s mother.</Text>

          <View className="relative z-20 mb-10 flex-row justify-between gap-4">
            <Button
              size="xl"
              className="h-14 flex-1 rounded-full bg-white"
              // onPress={() => router.push('/register/step-1')}
            >
              <ButtonText className="text-primary-500">Get Started</ButtonText>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="h-14 flex-1 rounded-full border-white"
              // onPress={() => router.push('/login')}
            >
              <ButtonText className="text-white">Login</ButtonText>
            </Button>
          </View>
        </VStack>
      </ImageBackground>
    </>
  );
}
