import { formatCurrency } from "@/libs/functions";
import { Trash2 } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { View, HStack, Text, VStack, Icon } from "../ui";
import QuantitySelector from "./quantity-selector";

interface CartItemProps {
  item: any;
  onPress: (item: { _id: string }) => void;
}

export function CartItem({ item, onPress }: CartItemProps) {
  const handleRemoveItem = (productId: string) => {
    // Logic to remove item from cart
    console.log("Remove item with ID:", productId);
  };
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    // Logic to update item quantity in cart
    console.log("Update item with ID:", productId, "to new quantity:", newQuantity);
  };
  return (
    <View className="border-b border-gray-200 py-4">
      <HStack space="md">
        {/* Placeholder for Image - You'll need to fetch and display the image based on productId or a dedicated image field */}
        <View className="flex size-[200px] flex-1 items-center justify-center rounded-md bg-gray-100">
          <Text className="text-xs text-gray-400">Ảnh</Text>
        </View>
        <VStack space="sm">
          <Text className="font-semibold">{item.name}</Text>
          {item.size && <Text className="text-sm text-gray-600">Size: {item.size.size}</Text>}
          {item.salePrice > 0 ? (
            <HStack space="xs">
              <Text className="text-sm text-red-500">{formatCurrency(item.salePrice)}</Text>
              <Text className="text-xs text-gray-400 line-through">{formatCurrency(item.price)}</Text>
            </HStack>
          ) : (
            <Text className="text-sm text-gray-800">{formatCurrency(item.price)}</Text>
          )}
          <QuantitySelector
            currentQuantity={item.quantity}
            onQuantityChange={(newQuantity) => handleQuantityChange(item._id, newQuantity)}
          />
        </VStack>
        <TouchableOpacity className="" onPress={() => handleRemoveItem(item._id)}>
          <Icon as={Trash2} size="md" color="black" />
        </TouchableOpacity>
      </HStack>
    </View>
  );
}
