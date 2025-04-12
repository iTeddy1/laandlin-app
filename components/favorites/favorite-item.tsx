import { formatCurrency } from "@/libs/functions";
import { Heart } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "../ui";

interface FavoriteItemProps {
  item: any;

  // isEditing: boolean;
  // selectedFavorites: string[];
  onPress: (item: { _id: string }) => void;
}

export default function FavoriteItem({ item, onPress }: FavoriteItemProps) {
  console.log("FavoriteItem - item:", item); // Debug log
  return (
    <TouchableOpacity
      className={`relative flex h-[270px] w-1/2 flex-col items-center`}
      onPress={() => onPress(item._id)}
      // style={{ opacity: isEditing && !selectedFavorites.includes(item._id) ? 0.6 : 1 }}
      // disabled={isEditing && !selectedFavorites.includes(item._id)}
    >
      <Image className="size-[190px]" source={require("assets/images/shop/product.png")} resizeMode="cover" />
      <View className="flex flex-col justify-center gap-2">
        <Text className="font-semibold">{item.name}</Text>
        <Text className="text-gray-600">{formatCurrency(item.price)}</Text>
      </View>
      {1 && (
        <TouchableOpacity
          className="absolute right-2 top-2"
          onPress={() => console.log("Remove from favorites:", item._id)}
        >
          <Icon as={Heart} size="md" color="red" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}
