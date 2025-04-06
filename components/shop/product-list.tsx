import React from "react";
import { FlatList, ScrollView } from "react-native";
import { Box } from "../ui/box";
import ProductItem from "./product-item";
import { View } from "../Themed";
import { CategoryTabs } from "./category-tabs";
import { sampleCategories } from "@/data/category";

type Props = {
  products: any[];
};

function ProductList({ products }: Props) {
  return (
    <View className="bg-white py-2">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item._id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
}

export default ProductList;
