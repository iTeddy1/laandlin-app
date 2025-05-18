import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { Input, InputIcon, InputField, Icon, HStack } from "@/components/ui";
import { Search, Filter, X } from "lucide-react-native";
import FilterModal from "./product-filter";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ShopHeaderProps {
  onSearch: (text: string) => void;
  availableCategories: string[];
  selectedCategories: string[];
  onCategoryChange: (values: string[]) => void;
  onApplyFilters: () => void;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({
  onSearch,
  availableCategories,
  selectedCategories,
  onCategoryChange,
  onApplyFilters,
}) => {
  const insets = useSafeAreaInsets();

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleSearchIconPress = () => {
    setIsSearchActive(true);
  };

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  const handleCancelSearch = () => {
    setIsSearchActive(false);
    setSearchText("");
    onSearch(""); // Clear search results
  };

  const handleFilterToggle = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleCloseFilter = () => {
    setIsFilterVisible(false);
  };

  return (
    <View className="border-b border-gray-200 bg-white px-[10px]">
      {!isFilterVisible &&
        (isSearchActive ? (
          // Thanh tìm kiếm toàn màn hình
          <HStack className="items-center space-x-2 p-4">
            <View className="flex-1">
              <Input>
                <InputField placeholder="Tìm kiếm" value={searchText} onChangeText={handleSearchTextChange} autoFocus />
              </Input>
            </View>
            <TouchableOpacity onPress={handleCancelSearch}>
              <Icon as={X} size="md" color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancelSearch}>
              <Text className="font-semibold text-blue-500">Hủy</Text>
            </TouchableOpacity>
          </HStack>
        ) : (
          // Header ban đầu với icon Search và Filter
          <HStack className="items-center justify-between p-2">
            <TouchableOpacity onPress={handleSearchIconPress}>
              <Icon as={Search} size="md" color="black" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold">Shop</Text>
            {/* Icon Filter */}
            <TouchableOpacity onPress={handleFilterToggle} className="rounded-md bg-gray-100 p-2">
              <Icon as={Filter} size="md" color="black" />
            </TouchableOpacity>
          </HStack>
        ))}

      <FilterModal
        isOpen={isFilterVisible}
        onClose={handleCloseFilter}
        availableCategories={availableCategories}
        selectedCategories={selectedCategories}
        onCategoryChange={onCategoryChange}
        onApplyFilters={onApplyFilters}
      />
    </View>
  );
};

export default ShopHeader;
