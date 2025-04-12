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
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <VStack className="w-full pt-4">
          {/* Product Info */}
          <Card className="mb-2 flex h-[200px] flex-row items-center justify-between gap-4 p-0">
            <Image
              className="h-[154px] w-[154px]"
              alt="fav"
              source={require("assets/images/shop/product.png")}
              resizeMode="cover"
            />
            <VStack className="">
              <Heading size="md" className="mb-2 font-semibold">
                {item?.name}
              </Heading>

              <Text className="mb-4 text-gray-600">{item?.price}</Text>
            </VStack>
          </Card>

          {/* Size Selection */}
          {item?.sizes.length != 0 && <Heading className="mb-2 font-medium">Size</Heading>}
          <ScrollView horizontal className="max-h-48 py-4">
            {item?.sizes &&
              item?.sizes?.map((size: Sizes) => (
                <Button
                  key={size._id}
                  onPress={() => setSelectedSize(size.size)}
                  className={`mr-4 w-fit min-w-28 rounded-md border py-3 text-center ${selectedSize === size.size ? "bg-base-200" : ""}`}
                >
                  <Text className={selectedSize === size.size ? "font-semibold" : ""}>{size.size}</Text>
                </Button>
              ))}
          </ScrollView>

          {/* Add to Cart Button */}
          <Button
            onPress={handleAddToCartPress}
            className="h-14 w-full rounded-full bg-base-300"
            disabled={!selectedSize}
          >
            <ButtonText className="font-bold text-black">Add to Cart</ButtonText>
          </Button>
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default AddToCartActionsheet;
