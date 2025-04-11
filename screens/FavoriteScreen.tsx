// FavoriteScreen.tsx
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ActionSheetIOS } from "react-native";

import { Heading, Button, ButtonText, Icon, VStack } from "@/components/ui";
import { Heart } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { sampleProducts, sampleWishlist } from "@/data/product";
import { formatCurrency } from "@/libs/functions";
import FavoriteItem from "@/components/favorites/favorite-item";
import { Product } from "@/types/Product";
import AddToCartActionsheet from "@/components/favorites/add-to-cart-action-sheet";
import { IWishlistItem } from "@/types/Wishlist";
import { CartItemAddRequest } from "@/types/Cart";
import SuccessModal from "@/components/common/success-modal";

const FavoriteScreen = () => {
  const insets = useSafeAreaInsets();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFavorites, setSelectedFavorites] = useState<string[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IWishlistItem | null>(null);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
    setSelectedFavorites([]);
  };

  const handleFavoriteSelect = (productId: string) => {
    if (isEditing) {
      if (selectedFavorites.includes(productId)) {
        setSelectedFavorites(selectedFavorites.filter((id) => id !== productId));
      } else {
        setSelectedFavorites([...selectedFavorites, productId]);
      }
    }
  };
  const handleProductPress = (item: IWishlistItem) => {
    // const newItem: CartItemAddRequest = {
    //   productId: item._id,
    //   quantity: 1,
    //   color: selectedColor!,
    //   size: selectedSize || "",
    // };
    setSelectedProduct(item);
    setIsDrawerOpen(true);
  };

  const handleAddToBag = (size: string) => {
    setIsDrawerOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleViewBag = () => {
    setIsSuccessModalOpen(false);
    // Điều hướng đến trang giỏ hàng (có thể dùng React Navigation)
    console.log("Navigate to Bag");
  };

  return (
    <>
      <VStack className="bg-white" style={{ paddingTop: insets.top }}>
        <View className="flex-row justify-end p-4">
          <TouchableOpacity onPress={handleEditPress}>
            <Text className="font-semibold text-blue-500">{isEditing ? "Xong" : "Sửa"}</Text>
          </TouchableOpacity>
        </View>
        <View className="p-4">
          <Heading size="xl" className="mb-4">
            Favourites
          </Heading>
          {sampleWishlist.length === 0 && <Text className="text-gray-500">Không có sản phẩm yêu thích.</Text>}
        </View>
        <FlatList
          data={sampleWishlist}
          renderItem={({ item }) => <FavoriteItem item={item} onPress={() => handleProductPress(item)} />}
          keyExtractor={(item) => item._id}
          horizontal={false}
          numColumns={2}
        />

        {isEditing && selectedFavorites.length > 0 && (
          <TouchableOpacity
            className="m-4 items-center rounded-md bg-red-500 py-3"
            onPress={() => {
              console.log("Removing selected favorites:", selectedFavorites);
            }}
          >
            <Text className="font-semibold text-white">Xóa ({selectedFavorites.length})</Text>
          </TouchableOpacity>
        )}

        <AddToCartActionsheet
          isOpen={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
            setSelectedProduct(null);
          }}
          item={selectedProduct}
          onAddToCart={handleAddToBag}
        />
      </VStack>
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        onViewBag={handleViewBag}
        message="Sản phẩm đã được thêm vào giỏ hàng."
      />
    </>
  );
};

export default FavoriteScreen;
