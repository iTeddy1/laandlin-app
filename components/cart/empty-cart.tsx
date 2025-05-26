import { ShoppingBasket } from "lucide-react-native";
import { Heading, Icon, View, VStack } from "../ui";

export function EmptyCart() {
  return (
    <VStack className="my-auto flex flex-col items-center justify-center gap-6">
      <Heading className="text-2xl font-bold text-black">Your cart is empty</Heading>
      <View className="size-16">
        <Icon as={ShoppingBasket} className="size-full text-black" width={60} height={60} />
      </View>
    </VStack>
  );
}
