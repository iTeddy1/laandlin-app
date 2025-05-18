import { sampleWishlist } from "@/data/product";
import { FlatList } from "react-native";
import FavoriteItem from "./favorite-item";

interface FavoriteListProps {
  items: any;
}

export default function FavoriteList({ items }: FavoriteListProps) {
  return (
    <FlatList
      horizontal={false}
      numColumns={2}
      data={items}
      renderItem={({ item }) => <FavoriteItem onPress={() => {}} item={item} />}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}
