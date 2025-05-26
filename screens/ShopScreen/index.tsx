import { Text, View } from "@/components/Themed";
import ProductList from "@/components/shop/product-list";
import { sampleProducts } from "@/data/product";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import ShopHeader from "@/components/shop/header";
import { sampleCategories } from "@/data/category";
import { CategoryTabs } from "@/components/shop/category-tabs";
import { VStack } from "@/components/ui";

export default function ShopScreen() {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const availableCategories = ["Áo", "Quần", "Phụ kiện", "Trẻ em"];

  const handleSearch = (text: string) => {
    setSearchText(text);
    console.log("Searching for:", text);
    // Thực hiện logic tìm kiếm và cập nhật filteredProducts
    const results = sampleProducts.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredProducts(results);
  };

  const handleCategoryChange = useCallback((values: string[]) => {
    setSelectedCategories(values);
    console.log("Selected Categories (in ShopScreen):", values);
    // Logic lọc (có thể trì hoãn đến khi "Áp dụng")
  }, []);

  const handleApplyFilters = useCallback(() => {
    console.log("Applying filters with categories:", selectedCategories);
    let results = [...sampleProducts];
    if (selectedCategories.length > 0) {
      results = results.filter((product) =>
        // Giả sử mỗi product có một thuộc tính 'category'
        availableCategories.some((cat) => selectedCategories.includes(cat)),
      );
    }
    setFilteredProducts(results);
  }, [selectedCategories, availableCategories]);

  return (
    <VStack className="flex-1 bg-white pt-12" style={{ paddingTop: insets.top }}>
      <ShopHeader
        onSearch={handleSearch}
        availableCategories={availableCategories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
        onApplyFilters={handleApplyFilters}
      />

      <View>
        <CategoryTabs categories={sampleCategories} products={sampleProducts} />
      </View>
      <View className="flex-1">
        <ProductList products={filteredProducts} />
      </View>
    </VStack>
  );
}
