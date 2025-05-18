import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  VStack,
  Checkbox,
  CheckboxGroup,
  Button,
  ButtonText,
  Heading,
  Icon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/";
import { X } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WINDOW_HEIGHT } from "@/shared/constants/window";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableCategories: string[];
  selectedCategories: string[];
  onCategoryChange: (values: string[]) => void;
  onApplyFilters: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  availableCategories,
  selectedCategories,
  onCategoryChange,
  onApplyFilters,
}) => {
  const insets = useSafeAreaInsets();

  if (!isOpen) {
    return null;
  }

  return (
    <View className="relative z-50" style={{ height: WINDOW_HEIGHT - insets.top - 52 }}>
      {/* Header của Modal */}
      <View className="flex-row items-center justify-between border-b border-gray-200 p-4">
        <Heading size="md">Bộ lọc</Heading>
        <TouchableOpacity onPress={onClose}>
          <Icon as={X} size="md" className="rounded-full bg-black p-4" color="white" />
        </TouchableOpacity>
      </View>

      {/* Nội dung bộ lọc có thể cuộn */}
      <ScrollView className="bg-white p-4">
        <VStack space="md">
          {/* Sort By */}
          <VStack space="sm">
            <Text className="font-semibold">Sắp xếp theo</Text>
            <CheckboxGroup onChange={() => {}} value={["feature", "newest"]}>
              <Checkbox value="featured" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Nổi bật</CheckboxLabel>
              </Checkbox>
              <Checkbox value="newest" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Mới nhất</CheckboxLabel>
              </Checkbox>
              <Checkbox value="price-low-high" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Giá: Thấp - Cao</CheckboxLabel>
              </Checkbox>
              <Checkbox value="price-high-low" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Giá: Cao - Thấp</CheckboxLabel>
              </Checkbox>
            </CheckboxGroup>
          </VStack>

          {/* Gender */}
          <VStack space="sm">
            <Text className="font-semibold">Giới tính (1)</Text>
            <CheckboxGroup onChange={onCategoryChange} value={selectedCategories}>
              <Checkbox value="boys" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Bé trai</CheckboxLabel>
              </Checkbox>
              <Checkbox value="girls" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Bé gái</CheckboxLabel>
              </Checkbox>
              <Checkbox value="babies" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Trẻ sơ sinh</CheckboxLabel>
              </Checkbox>
            </CheckboxGroup>
          </VStack>

          {/* Shop by Price */}
          <VStack space="sm">
            <Text className="font-semibold">Mua theo giá</Text>
            <CheckboxGroup onChange={onCategoryChange} value={selectedCategories}>
              <Checkbox value="0-100k" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>0đ - 100.000đ</CheckboxLabel>
              </Checkbox>
              <Checkbox value="100k-150k" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>100.000đ - 150.000đ</CheckboxLabel>
              </Checkbox>
              <Checkbox value="over-150k" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Trên 150.000đ</CheckboxLabel>
              </Checkbox>
            </CheckboxGroup>
          </VStack>

          {/* Color */}
          <VStack space="sm">
            <Text className="font-semibold">Màu sắc</Text>
            <View className="flex-row flex-wrap gap-2">
              {/* Render các tùy chọn màu sắc ở đây */}
              {/* Ví dụ: */}
              <TouchableOpacity className="h-10 w-10 rounded-full bg-purple-500" />
              <Text>Purple</Text>
              <TouchableOpacity className="h-10 w-10 rounded-full bg-black" />
              <Text>Black</Text>
              {/* ... Thêm các màu khác */}
            </View>
          </VStack>

          {/* Available */}
          <VStack space="sm">
            <Text className="font-semibold">Tình trạng</Text>
            <CheckboxGroup onChange={onCategoryChange} value={selectedCategories}>
              <Checkbox value="in-stock" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Còn hàng</CheckboxLabel>
              </Checkbox>
              <Checkbox value="out-of-stock" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Hết hàng</CheckboxLabel>
              </Checkbox>
            </CheckboxGroup>
          </VStack>

          {/* Tags */}
          <VStack space="sm">
            <Text className="font-semibold">Tags</Text>
            <CheckboxGroup onChange={onCategoryChange} value={selectedCategories}>
              <Checkbox value="suits" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Suits</CheckboxLabel>
              </Checkbox>
              <Checkbox value="baby-shirt" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Baby Shirt</CheckboxLabel>
              </Checkbox>
              <Checkbox value="dress" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Dress</CheckboxLabel>
              </Checkbox>
              <Checkbox value="accessories" size="sm">
                <CheckboxIndicator />
                <CheckboxLabel>Accessories</CheckboxLabel>
              </Checkbox>
            </CheckboxGroup>
          </VStack>
        </VStack>
      </ScrollView>

      {/* Footer của Modal */}
      <View className="flex flex-row justify-between gap-3 border-t border-gray-200 p-4">
        <Button
          variant="outline"
          className="mb-2 h-14 w-1/2 rounded-full"
          onPress={() => {
            /* Logic reset filter */
          }}
        >
          <ButtonText>Reset (1)</ButtonText>
        </Button>
        <Button className="mb-2 h-14 w-1/2 rounded-full bg-base-300" size="lg" onPress={onApplyFilters}>
          <ButtonText className="">Áp dụng</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default FilterModal;
