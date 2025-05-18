// add-to-cart-action-sheet.tsx
import React, { useState } from "react";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from "@/components/ui/actionsheet";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { VStack, HStack, Image, Box, Card } from "@/components/ui";
import { Text } from "@/components/ui/text";
import { ScrollView, View } from "react-native";
import { Sizes } from "@/shared/interfaces/Product";
import { IWishlistItem } from "@/shared/interfaces/Wishlist";

interface AddToCartActionsheetProps {
  item: IWishlistItem | null;
  onAddToCart: (size: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const AddToCartActionsheet: React.FC<AddToCartActionsheetProps> = ({ item, onAddToCart, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Sample sizes (you can adjust this based on your product data)
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCartPress = () => {
    if (selectedSize) {
      onAddToCart(selectedSize);
      setSelectedSize(null);
      onClose();
    } else {
      alert("Please select a size.");
    }
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent className="">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <VStack className="w-full pb-8">
          {/* Product Info */}
          <Box className="mb-2 flex h-[200px] flex-row items-center justify-between gap-4 overflow-auto p-0">
            <Image
              className="h-[154px] w-[154px] rounded-xl"
              alt="fav"
              source={require("assets/images/shop/product.png")}
              resizeMode="cover"
            />
            <Box className="flex w-3/4 flex-col">
              <Heading size="md" className="flex-shrink-1 mb-2 flex break-words font-semibold">
                {item?.name}
              </Heading>

              <Text className="mb-4 text-gray-600">{item?.price}</Text>
            </Box>
          </Box>

          {/* Size Selection */}
          {item?.sizes.length != 0 && <Heading className="mb-2 font-medium">Size</Heading>}
          <ScrollView horizontal className="max-h-48 py-4" showsHorizontalScrollIndicator={false}>
            {item?.sizes &&
              item?.sizes?.map((size: Sizes) => (
                <Button
                  key={size._id}
                  variant="outline"
                  onPress={() => handleSizeSelect(size.size)}
                  className={`mr-4 h-14 w-fit min-w-28 rounded-md border border-gray-300 text-center ${selectedSize === size.size ? "border-base-700 bg-base-200" : ""}`}
                >
                  <Text className={selectedSize === size.size ? "font-semibold" : ""}>{size.size}</Text>
                </Button>
              ))}
          </ScrollView>

          {/* Add to Cart Button */}
          <Button
            onPress={handleAddToCartPress}
            className="mx-auto h-16 w-[90%] rounded-full bg-base-300 py-4"
            disabled={!selectedSize}
          >
            <ButtonText size="lg" className="font-bold text-black">
              Add to Cart
            </ButtonText>
          </Button>
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default AddToCartActionsheet;
