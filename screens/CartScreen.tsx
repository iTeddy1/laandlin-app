import React, { useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import {
  Heading,
  HStack,
  VStack,
  Button,
  ButtonText,
  Icon,
  Actionsheet,
  ActionsheetContent,
  Box,
  Card,
  Image,
} from "@/components/ui"; // Adjust import path if needed
import { Trash2, Plus, Minus, Heart } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { formatCurrency } from "@/libs/functions"; // Assuming you have this
import { ICartItem } from "@/shared/interfaces/Cart"; // Import your cart types
import QuantitySelector from "@/components/cart/quantity-selector";
import { Link } from "expo-router";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

import {
  GestureHandlerRootView,
  TouchableOpacity as GHTouchableOpacity, // Renamed to avoid conflict
} from "react-native-gesture-handler";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { EmptyCart } from "@/components/cart/empty-cart";

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
      prevItems.map((item) =>
        item._id === itemId
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item,
      ),
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

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingTop: insets.top,
      }}
    >
      <GestureHandlerRootView className="flex-1 p-4">
        <Heading size="lg" className="mb-4 p-4">
          Cart ({cartItems.length})
        </Heading>
        {cartItems.length !== 0 ? (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CartItem item={item} handleRemoveItem={handleRemoveItem} handleQuantityChange={handleQuantityChange} />
              )}
            />
            <VStack>
              <HStack className="mt-4 pt-4">
                <Text className="font-semibold">Subtotal:</Text>
                <Text className="font-semibold">{formatCurrency(calculateSubTotal())}</Text>
              </HStack>
              <HStack className="mt-2 border-t border-gray-200 pt-4">
                <Text className="font-semibold">Shipping:</Text>
                <Text className="font-semibold">{formatCurrency(0)}</Text>
              </HStack>
            </VStack>
          </>
        ) : (
          <EmptyCart />
        )}
      </GestureHandlerRootView>

      {cartItems.length > 0 ? (
        <View className="border-t border-gray-200 p-4">
          <Button size="md" className="h-16 rounded-full bg-black">
            <ButtonText className="font-semibold text-white">Checkout</ButtonText>
          </Button>
        </View>
      ) : (
        <View className="border-t border-gray-200 p-4">
          <Button size="md" className="h-16 rounded-full bg-black">
            <ButtonText className="font-semibold text-white">Go to shop</ButtonText>
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
          <HStack className="flex gap-4 p-4">
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

interface CartItemProps {
  item: any; // Replace with your actual item type
  handleRemoveItem: (itemId: string) => void;
  handleQuantityChange: (itemId: string, newQuantity: number) => void;
}

const ACTION_WIDTH = 80; // Width of the action buttons

const CartItem: React.FC<CartItemProps> = ({ item, handleRemoveItem, handleQuantityChange }) => {
  const swipeableRef = useRef<any>(null);

  const renderRightActions = () => {
    return (
      <View style={{ width: 160 }} className="flex flex-row items-start justify-start bg-gray-300">
        <TouchableOpacity
          className="flex h-full w-[80px] items-center justify-center border bg-base-100"
          onPress={() => {
            swipeableRef.current?.close();
            console.log("Yêu thích:", item._id);
          }}
          style={{ width: 80 }}
        >
          <Icon as={Heart} size="md" color="black" className="" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex h-full w-[80px] items-center justify-center bg-red-500"
          onPress={() => {
            swipeableRef.current?.close();
            handleRemoveItem(item._id);
          }}
          style={{ width: 80 }}
        >
          <Icon as={Trash2} size="md" color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ReanimatedSwipeable
      ref={swipeableRef}
      renderRightActions={renderRightActions}
      overshootRight={false}
      friction={2}
      rightThreshold={ACTION_WIDTH}
      onSwipeableClose={() => {
        console.log("Đã đóng"); // khi vuốt ngược lại bên trái
      }}
    >
      <Card className="gap-4 border-b border-gray-200 py-4">
        <Link
          href={{ pathname: `/shop/[slug]`, params: { slug: item.slug } }}
          className="flex w-full flex-row justify-between gap-4"
        >
          <HStack space="xs" className="flex w-full flex-row gap-4">
            <Box className="w-fit rounded-md bg-gray-100">
              <Image
                className="h-[154px] w-[154px]"
                alt={item.color.color}
                source={require("assets/images/shop/product.png")}
                resizeMode="cover"
              />
            </Box>

            <Box className="ml-4">
              <Text className="font-semibold">{item.name}</Text>
              {item.size && <Text className="text-sm text-gray-600">Size: {item.size.size}</Text>}
            </Box>
          </HStack>
        </Link>
        <HStack className="flex-row items-center justify-between">
          <QuantitySelector
            currentQuantity={item.quantity}
            onQuantityChange={(newQuantity) => handleQuantityChange(item._id, newQuantity)}
          />
          {item.salePrice > 0 ? (
            <HStack space="xs">
              <Text className="text-sm text-red-500">{formatCurrency(item.salePrice)}</Text>
              <Text className="text-xs text-gray-400 line-through">{formatCurrency(item.price)}</Text>
            </HStack>
          ) : (
            <Text className="text-sm text-gray-800">{formatCurrency(item.price)}</Text>
          )}
        </HStack>
      </Card>
    </ReanimatedSwipeable>
  );
};
