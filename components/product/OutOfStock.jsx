import { Text, View } from 'react-native'

export default function OutOfStock() {
  return (
    <View className="mx-3 p-1.5 rounded bg-gray-50/50 my-5">
      <View className="flex items-center justify-between gap-x-2">
        <View className="h-[3px] bg-gray-300 flex-1" />
        <Text className="text-base font-bold text-gray-500">Insufficient inventory</Text>
        <View className="h-[3px] bg-gray-300 flex-1" />
      </View>
      <Text className="px-3 text-sm text-gray-700">
        This product is currently unavailable and in stock is insufficient. You can call us and
        notify you immediately after its inventory exists.
      </Text>
    </View>
  )
}
