import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import {
  Heading,
  Button,
  ButtonText,
  Icon,
  Select,
  SelectTrigger,
  SelectInput,
  SelectItem,
  SelectIcon,
  ChevronDownIcon,
  SelectContent,
  VStack,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
} from "@/components/ui"; // Import từ Gluestack UI
import { Heart, Share2 } from "lucide-react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { sampleProducts } from "@/data/product";
import { formatCurrency } from "@/libs/functions";
import { useLocalSearchParams } from "expo-router";
import { WINDOW_WIDTH } from "@/shared/constants/window";
import { AddProductToCart, AddProductToCartSchema } from "@/schema/AddProductToCartSchema";
import { useAppDispatch } from "@/store/hooks";
import { addItemToCartAsync } from "@/store/reducers/cart/cartSlice";
import SizeSelectActionsheet from "@/components/shop/size-select-action-sheet";
import { Product } from "@/shared/interfaces/Product";

export interface ProductDetailsScreenProps {
  product: Product;
}

const ProductDetailsScreen = ({ product }: ProductDetailsScreenProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isSizeSelectOpen, setIsSizeSelectOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0].color);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductToCart>({
    resolver: zodResolver(AddProductToCartSchema),
    defaultValues: {
      productId: product._id,
      size: selectedSize,
      quantity: 1,
      color: selectedColor,
    },
  });
  console.log(errors);
  const onSubmit: SubmitHandler<AddProductToCart> = (data) => {
    const formData = {
      productId: product._id,
      size: selectedSize,
      quantity: 1,
      color: selectedColor,
    };
    console.log("Form data:", formData);
    // dispatch(addItemToCartAsync(formData))
  };

  const handleFavorite = () => {
    console.log("Adding to favorites:", product.name);
  };

  const handleSelectSize = () => {
    setIsSizeSelectOpen(true);
  };

  const handleShare = () => {
    console.log("Sharing product:", product.name);
  };

  return (
    <VStack className={`bg-white`}>
      <ScrollView>
        {/* Product Images Carousel */}
        <ScrollView snapToAlignment="center" horizontal showsHorizontalScrollIndicator={false} className="mb-4">
          {product.colors[0].images.map((image, index) => (
            <Image
              key={index}
              source={require("assets/images/shop/product.png")}
              className={`h-[300px]`}
              style={{ width: WINDOW_WIDTH, height: 300 }}
              resizeMode="cover"
            />
          ))}
        </ScrollView>

        {/* Product Info */}
        <View className="p-6">
          <Heading size="lg" bold className="mb-2">
            {product.name}
          </Heading>
          <Text className="mb-4 text-gray-600">{product.description}</Text>
          <View className="mb-4 flex-row items-center space-x-4">
            {product.salePrice ? (
              <>
                <Text className="mr-2 font-semibold text-red-500">{formatCurrency(product.salePrice)}</Text>
                <Text className="text-gray-400 line-through">{formatCurrency(product.price)}</Text>
              </>
            ) : (
              <Text className="font-semibold">{formatCurrency(product.price)}</Text>
            )}
          </View>

          {/* Select Size Button */}
          {product.sizes && (
            <ButtonGroup>
              <Button onPress={handleSelectSize} className="mb-4 h-14 rounded-full bg-base-300">
                <ButtonText className="font-semibold text-black">
                  {!selectedSize ? "Select Size" : selectedSize}
                </ButtonText>
                {/* <ButtonSpinner /> */}
                <ButtonIcon as={ChevronDownIcon} size="lg" className="text-black" />
              </Button>
            </ButtonGroup>
          )}

          {/* Add to Bag Button */}
          <Button onPress={handleSubmit(onSubmit)} className="mb-4 h-14 rounded-full bg-base-300">
            <ButtonText className="font-semibold text-black">Add to cart</ButtonText>
          </Button>

          {/* Favorite Button */}
          <Button variant="outline" onPress={handleFavorite} className="mb-4 h-14 rounded-full border border-gray-300">
            <View className="flex flex-row items-center gap-2">
              <ButtonText className="font-semibold text-black">Favorite</ButtonText>
              <Icon as={Heart} size="xl" className="text-black" />
            </View>
          </Button>

          {/* Product Details Section */}
          <View className="mb-6">
            <Text className="mb-2 font-semibold">Chi tiết sản phẩm</Text>
            <Text className="text-gray-700">{product.description}</Text>
            {product.material && product.material.length > 0 && (
              <Text className="text-gray-700">Chất liệu: {product.material.join(", ")}</Text>
            )}
            {product.ages && <Text className="text-gray-700">Độ tuổi: {product.ages}</Text>}
            {product.gender && <Text className="text-gray-700">Giới tính: {product.gender}</Text>}
            {product.sku && <Text className="text-gray-700">SKU: {product.sku}</Text>}
          </View>

          {/* Reviews Section (Placeholder) */}
          <View className="mb-6">
            <View className="mb-2 flex-row items-center justify-between">
              <Text className="font-semibold">Đánh giá (20)</Text>
              <TouchableOpacity>
                <Text className="text-blue-500">Xem tất cả</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-700">Chưa có đánh giá nào.</Text>
          </View>

          {/* More Information Section (Collapsible) */}
          <View className="mb-6">
            <TouchableOpacity className="flex-row items-center justify-between border-b border-gray-200 py-2">
              <Text className="font-semibold">Thêm thông tin</Text>
              <Icon as={ChevronDownIcon} size="sm" color="black" />
            </TouchableOpacity>
            {/* Nội dung thêm thông tin (ẩn/hiện) */}
          </View>

          {/* You Might Also Like Section (Placeholder - Use a Carousel here) */}
          <View className="mb-6">
            <Text className="mb-2 font-semibold">Bạn cũng có thể thích</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ width: 150, height: 200, backgroundColor: "#f0f0f0", marginRight: 10 }} />
              <View style={{ width: 150, height: 200, backgroundColor: "#e0e0e0", marginRight: 10 }} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Bar (Share Icon) */}
      <View className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
        <TouchableOpacity className="items-center justify-center">
          <Icon as={Share2} size="md" color="black" />
          <Text className="text-xs text-gray-700">Chia sẻ</Text>
        </TouchableOpacity>
      </View>

      {/* Size Selection */}
      {product.sizes && (
        <SizeSelectActionsheet
          isOpen={isSizeSelectOpen}
          onClose={() => setIsSizeSelectOpen(false)}
          sizes={product.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      )}
    </VStack>
  );
};

export default ProductDetailsScreen;
