import React, { useState, useRef, useEffect, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetFlatList,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetScrollView,
  Button,
  ButtonText,
  Heading,
  Pressable,
  VStack,
} from "@/components/ui"; // Adjust import path if needed
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

interface QuantitySelectorProps {
  currentQuantity: number;
  onQuantityChange: (quantity: number) => void;
}
const ITEM_HEIGHT = 50; // Adjust this based on your item design
const VISIBLE_ITEMS = 3; // Show only 3 items at a time
const SNAP_INTERVAL = ITEM_HEIGHT * VISIBLE_ITEMS;
const flatListHeight = ITEM_HEIGHT * VISIBLE_ITEMS;

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ currentQuantity, onQuantityChange }) => {
  const [isQuantityVisible, setIsQuantityVisible] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Default value set to 4
  const flatListRef = useRef<any>(null); // Ref to control FlatList scrolling
  const availableQuantities = Array.from({ length: 10 }, (_, i) => i + 1);
  const defaultIndex = availableQuantities.indexOf(selectedQuantity);

  const handleQuantitySelect = (quantity: number) => {
    setSelectedQuantity(quantity);
    onQuantityChange(quantity); // Call the parent function to update the quantity
    setIsQuantityVisible(false);
  };

  // Handle scroll end to auto-select the middle item
  const handleScrollEnd = (event: any) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const currentIndex = Math.round(contentOffsetY / ITEM_HEIGHT); // Closest item index

    // Calculate the middle item of the visible 3 items
    const middleIndex = currentIndex + 1; // Middle of the 3 visible items (0, 1, 2 -> 1 is middle)

    // Ensure the middle index is within bounds
    if (middleIndex >= 0 && middleIndex < availableQuantities.length) {
      setSelectedQuantity(availableQuantities[middleIndex]);
    }
  };

  const Item = ({ quantity, onSelect, isSelected }: any) => (
    <Pressable
      onPress={onSelect}
      style={{
        paddingVertical: 15,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        backgroundColor: isSelected ? "#f0f0f0" : "#fff", // Highlight selected item
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: isSelected ? "bold" : "normal" }}>{quantity}</Text>
    </Pressable>
  );

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsQuantityVisible(true)}
        className="w-24 items-center justify-center rounded-md border border-gray-300 px-3 py-2"
      >
        <Text>{currentQuantity}</Text>
      </TouchableOpacity>

      <Actionsheet isOpen={isQuantityVisible} onClose={() => setIsQuantityVisible(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent className="">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetFlatList
            ref={flatListRef}
            style={{ height: flatListHeight, paddingTop: 48 }} // Show only 3 items
            data={availableQuantities}
            renderItem={({ item }) => (
              <Item
                quantity={item}
                onSelect={() => handleQuantitySelect(item as number)} // Select the item when pressed
                isSelected={item === selectedQuantity} // Highlight the selected item
              />
            )}
            keyExtractor={(item) => item as string}
            showsVerticalScrollIndicator={true}
            initialScrollIndex={defaultIndex - 1 >= 0 ? defaultIndex - 1 : 0} // Start with the default in the middle
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })} // Optimize scrolling performance
            snapToInterval={SNAP_INTERVAL} // Snap to 3 items at a time
            snapToAlignment="start" // Snap to the top of the 3 items
            decelerationRate="fast" // Make snapping feel snappy
            onMomentumScrollEnd={handleScrollEnd} // Detect when scrolling stops to select the middle item
          />
          <Button onPress={() => setIsQuantityVisible(false)}>
            <ButtonText> Done</ButtonText>
          </Button>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default QuantitySelector;
