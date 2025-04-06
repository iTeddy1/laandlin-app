import { ScrollView, Image } from "react-native";
import { Box } from "../ui/box";
import { Text } from "../Themed";
import { Product } from "@/types/Product";

type ProductSliderProps = {
  products: Product[];
};

export default function ProductSlider({ products }: ProductSliderProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {products.map((product) => (
        <Box key={product._id} className="mr-4">
          <Image
            source={{ uri: product.colors[0].images[0] }}
            className="h-36 w-48 rounded-lg"
            resizeMode="cover"
            alt={product.name}
          />
          <Text className="text-text-primary mt-2 text-base font-semibold">{product.name}</Text>
          <Text className="text-card-price text-sm">US${product.price}</Text>
        </Box>
      ))}
    </ScrollView>
  );
}
