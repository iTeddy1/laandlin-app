import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Heading, HStack, VStack, Button, ButtonText, Icon, Actionsheet, ActionsheetContent } from "@/components/ui"; // Adjust import path if needed
import { Trash2, Plus, Minus } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { formatCurrency } from "@/libs/functions"; // Assuming you have this
import { ICartItem } from "@/shared/interfaces/Cart"; // Import your cart types
import QuantitySelector from "@/components/cart/quantity-selector";

// Dummy Cart Data based on ICartItem
const initialCartData: ICartItem[] = [
  {
    _id: "cartItem3",
    productId: "product3",
    name: "Jordan 1 Retro High OG",
    price: 170,
    salePrice: 150,
    color: {
      id: "color1",
      color: "#FF5733",
      images: [
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b359f1b-9498-4241-8157-97947621137f/air-zoom-pegasus-38-mens-road-running-shoes-J1D8rv.jpg",
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1036a321-8a0c-482f-b22f-31a10399613d/sportswear-club-fleece-pullover-hoodie-lK2f1n.jpg",
      ],
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b359f1b-9498-4241-8157-97947621137f/air-zoom-pegasus-38-mens-road-running-shoes-J1D8rv.jpg",
    },
    size: {
      _id: "size1",
      size: "US 10",
      price: 170,
      salePrice: 150,
      stockQuantity: 10,
    },
    slug: "jordan-1-retro-high-og",
    quantity: 1,
  },
  {
    _id: "cartIt2em3",
    productId: "product3",
    name: "Jordan 1 Retro High OG",
    price: 170,
    salePrice: 150,
    color: {
      id: "color1",
      color: "#FF5733",
      images: [
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b359f1b-9498-4241-8157-97947621137f/air-zoom-pegasus-38-mens-road-running-shoes-J1D8rv.jpg",
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1036a321-8a0c-482f-b22f-31a10399613d/sportswear-club-fleece-pullover-hoodie-lK2f1n.jpg",
      ],
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b359f1b-9498-4241-8157-97947621137f/air-zoom-pegasus-38-mens-road-running-shoes-J1D8rv.jpg",
    },
    size: {
      _id: "size1",
      size: "US 10",
      price: 170,
      salePrice: 150,
      stockQuantity: 10,
    },
    slug: "jordan-1-retro-high-og",
    quantity: 1,
  },
  {
    _id: "cartIte4m3",
    productId: "product3",
    name: "Jordan 1 Retro High OG",
    price: 170,
    salePrice: 150,
    color: {
      id: "color1",
      color: "#FF5733",
      images: [
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b359f1b-9498-4241-8157-97947621137f/air-zoom-pegasus-38-mens-road-running-shoes-J1D8rv.jpg",
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1036a321-8a0c-482f-b22f-31a10399613d/sportswear-club-fleece-pullover-hoodie-lK2f1n.jpg",
      ],
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b359f1b-9498-4241-8157-97947621137f/air-zoom-pegasus-38-mens-road-running-shoes-J1D8rv.jpg",
    },
    size: {
      _id: "size1",
      size: "US 10",
      price: 170,
      salePrice: 150,
      stockQuantity: 10,
    },
    slug: "jordan-1-retro-high-og",
    quantity: 1,
  },
];

const CartScreen = () => {
  const insets = useSafeAreaInsets();
  const [cartItems, setCartItems] = useState<ICartItem[]>(initialCartData);
  const [isRemoveVisible, setIsRemoveVisible] = useState(false);
  const [itemToRemoveId, setItemToRemoveId] = useState<string | null>(null);

  const calculateSubTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.salePrice > 0 ? item.salePrice : item.price) * item.quantity, 0);
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item._id === itemId ? { ...item, quantity: newQuantity } : item)),
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setItemToRemoveId(itemId);
    setIsRemoveVisible(true);
  };

  const confirmRemoveItem = () => {
    if (itemToRemoveId) {
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemToRemoveId));
      setIsRemoveVisible(false);
      setItemToRemoveId(null);
    }
  };

  const renderCartItem = ({ item }: { item: ICartItem }) => (
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
        <TouchableOpacity onPress={() => handleRemoveItem(item._id)}>
          <Icon as={Trash2} size="md" color="black" />
        </TouchableOpacity>
      </HStack>
    </View>
  );

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      <View className="flex-1 p-4">
        <Heading size="lg" className="mb-4">
          Cart ({cartItems.length})
        </Heading>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text className="text-gray-500">Giỏ hàng của bạn đang trống.</Text>
        )}
      </View>

      {cartItems.length > 0 && (
        <View className="border-t border-gray-200 p-4">
          <Button size="md" className="h-16 rounded-full bg-black">
            <ButtonText className="font-semibold text-white">Checkout</ButtonText>
          </Button>
        </View>
      )}

      {/* Remove Confirmation Action Sheet */}
      <Actionsheet isOpen={isRemoveVisible} onClose={() => setIsRemoveVisible(false)}>
        <ActionsheetContent className="rounded-t-xl">
          <Heading size="md" className="border-b border-gray-200 p-4">
            Xóa khỏi giỏ hàng?
          </Heading>
          <Text className="p-4">Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?</Text>
          <HStack className="space-x-2 p-4">
            <Button variant="outline" onPress={() => setIsRemoveVisible(false)}>
              <ButtonText>Hủy</ButtonText>
            </Button>
            <Button onPress={confirmRemoveItem}>
              <ButtonText className="text-white">Xóa</ButtonText>
            </Button>
          </HStack>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default CartScreen;
