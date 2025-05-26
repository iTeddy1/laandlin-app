import { Icon, Text, View } from "@/components/ui";
import { Stack, useRouter } from "expo-router";
import { ArrowLeft, Share } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductDetailsLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: () => <ProductDetailsHeader />,
      }}
    >
      <Stack.Screen name="index" options={{ header: () => <ProductDetailsHeader /> }} />
    </Stack>
  );
};

// create for me header for the product details screen with back button and title
// import { useRouter } from 'expo-router';

export const ProductDetailsHeader = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View
      className="flex-row items-center justify-between bg-white px-4 py-2 shadow-md"
      style={{ paddingTop: insets.top }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Icon as={ArrowLeft} size="md" color="black" />
      </TouchableOpacity>
      <Text className="text-lg font-semibold">Product Details</Text>
      <TouchableOpacity onPress={() => console.log("Share product")}>
        <Icon as={Share} size="xl" color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailsLayout;
