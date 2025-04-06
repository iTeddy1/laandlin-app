import { ScrollView, StyleSheet, Text } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import HomeTitle from "@/components/home/title";
import { Image } from "@/components/ui/image";
import ProductCarousel from "@/components/home/product-carousel";
import { sampleProducts } from "@/data/product";

export default function TabOneScreen() {
  return (
    <ScrollView className="bg-white">
      <HomeTitle title="Discover" desc="Tuesday, 3 May" />
      <VStack>
        <Box>
          <Image className="h-[200px] w-full" source={require("/assets/images/home/hero.png")} alt="image" />
        </Box>
        <HomeTitle title="Featured" desc="Best Selling Products" />
        <ProductCarousel products={sampleProducts} />
        <HomeTitle title="Featured" desc="Best Selling Products" />
        <ProductCarousel products={sampleProducts} />
        <HomeTitle title="Featured" desc="Best Selling Products" />
        <ProductCarousel products={sampleProducts} />
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </VStack>
    </ScrollView>
  );
}
