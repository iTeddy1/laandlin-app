import React, { useState } from "react";
import { Box, Text, HStack, Pressable, VStack } from "@/components/ui";
import { Category } from "@/shared/interfaces/Category";
import { Product } from "@/shared/interfaces/Product";
import { ScrollView } from "react-native";

interface CategoryTabsProps {
  categories: Category[];
  products: Product[];
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]?._id || "");

  const filteredProducts = products.filter((product) => product.category._id === selectedCategory);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="bg-white" scrollEventThrottle={50}>
      {/* Category Tabs */}
      <HStack space="md" className="h-14 px-4 py-2">
        {categories.map((cat) => (
          <Pressable className="min-w-16 text-center" key={cat._id} onPress={() => setSelectedCategory(cat._id)}>
            <Text
              bold={selectedCategory === cat._id}
              className={`text-base ${selectedCategory === cat._id ? "border-b border-black text-black" : "text-gray-500"} pb-1 text-center`}
              // color={selectedCategory === cat._id ? '' : 'gray'}
              // borderBottomWidth={selectedCategory === cat._id ? 2 : 0}
              // borderColor="black"
              // pb="$1"
            >
              {cat.name}
            </Text>
          </Pressable>
        ))}
      </HStack>
    </ScrollView>
  );
};
