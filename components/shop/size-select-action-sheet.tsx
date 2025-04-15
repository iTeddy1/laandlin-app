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

interface SizeSelectActionsheetProps {
  isOpen: boolean;
  onClose: () => void;
  sizes: Sizes[];
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
}

const SizeSelectActionsheet: React.FC<SizeSelectActionsheetProps> = ({
  isOpen,
  onClose,
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    onClose();
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <VStack className="w-full pt-4">
          {/* Size Selection */}
          <Heading className="mb-2 font-medium">Size</Heading>
          <ScrollView horizontal className="max-h-48 py-4">
            {sizes?.map((size: Sizes) => (
              <ActionsheetItem
                key={size._id}
                onPress={() => handleSizeSelect(size.size)}
                className={`mr-4 w-fit min-w-28 rounded-md border py-3 text-center ${selectedSize === size.size ? "bg-base-200" : ""}`}
              >
                <ActionsheetItemText className={selectedSize === size.size ? "font-semibold" : ""}>
                  {size.size}
                </ActionsheetItemText>
              </ActionsheetItem>
            ))}
          </ScrollView>
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default SizeSelectActionsheet;
