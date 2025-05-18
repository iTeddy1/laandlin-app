import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "@/libs/functions";
import { Heart } from "lucide-react-native";
import { Heading, HStack, Icon, VStack, Card } from "../ui";
import { useRouter } from "expo-router";
import { Product } from "@/shared/interfaces/Product";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const router = useRouter();
  const handleProductPress = () => {
    // Navigate to product details screen
    router.push(`/shop/${product.slug}`);
  };

  return (
    <TouchableOpacity onPress={handleProductPress} className="w-1/2">
      <Card className="flex h-[270px] w-full flex-col overflow-hidden rounded-lg bg-white shadow-md">
        <View className="p-0">
          <View className="relative overflow-hidden rounded-lg border border-base-800">
            <Image
              className="size-[165px] w-full"
              source={require("/assets/images/shop/product.png")}
              resizeMode="cover"
            />
            <TouchableOpacity className="absolute right-2 top-2 z-10">
              <Icon as={Heart} size="md" color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="p-2">
          <VStack space="sm">
            <Heading size="xs">{product.name}</Heading>
            <HStack space="sm">
              {product.salePrice ? (
                <>
                  <Text className="font-semibold text-red-500">{formatCurrency(product.salePrice)}</Text>
                  <Text className="text-gray-400 line-through">{formatCurrency(product.price)}</Text>
                </>
              ) : (
                <Text className="font-semibold">{formatCurrency(product.price)}</Text>
              )}
              {/* {product.status === "New" && (
                <Badge variant="solid" size="sm">
                 
                  <BadgeText>New</BadgeText>
                </Badge>
              )} */}
            </HStack>
          </VStack>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductItem;
