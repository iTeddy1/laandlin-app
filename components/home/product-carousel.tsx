import React, { useRef, useState, useContext } from "react";
import { Box, HStack, Center, Image, Icon, Pressable, Card, VStack, Heading, Badge, BadgeText } from "@/components/ui/";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react-native";
import { formatCurrency } from "@/libs/functions";
import { Link } from "expo-router";

type Props = {
  products: any[];
};

const ProductCarousel = ({ products }: Props) => {
  return (
    <Box className="w-full">
      <ScrollView horizontal style={{ width: "100%" }} showsHorizontalScrollIndicator={false} scrollEventThrottle={50}>
        <HStack space="md" className="w-full">
          {products.map((item, index) => {
            return (
              <Link
                href={{
                  pathname: "/shop/[slug]",
                  params: { slug: item.slug },
                }}
                key={index}
                className=""
              >
                <Card className="h-[350px] w-[250px] overflow-hidden rounded-lg bg-white p-0 shadow-md">
                  <View className="size-[250px] p-2">
                    <View className="relative">
                      <Image
                        source={require("/assets/images/shop/product.png")}
                        alt="image"
                        resizeMode="cover"
                        className="h-full w-full object-cover"
                      />
                      <TouchableOpacity className="absolute right-2 top-2">
                        <Icon as={Heart} size="md" className="" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="p-2 text-black">
                    <VStack space="xs">
                      <Heading size="sm" className="font-semibold">
                        {item.name}
                      </Heading>
                      <HStack space="md">
                        {item.salePrice ? (
                          <>
                            <Text className="font-semibold text-red-500">{formatCurrency(item.salePrice)}</Text>
                            <Text className="text-black line-through">{formatCurrency(item.price)}</Text>
                          </>
                        ) : (
                          <Text className="font-semibold">{formatCurrency(item.price)}</Text>
                        )}
                        {/* {item.status === "New" && (
                          <Badge className="">
                            <BadgeText>New</BadgeText>
                          </Badge>
                        )} */}
                      </HStack>
                    </VStack>
                  </View>
                </Card>
              </Link>
            );
          })}
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default ProductCarousel;
