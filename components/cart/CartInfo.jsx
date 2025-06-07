import { Text, View } from 'react-native'

import { useAppSelector } from '@/hooks'
import { formatNumber } from '@/utils'

const CartInfo = () => {
  //? Store
  const { totalItems, totalPrice, totalDiscount } = useAppSelector(state => state.cart)

  //? Render(s)
  return (
    <View className="px-4 py-2 mt-2 space-y-5 lg:mt-0 lg:h-fit lg:py-4">
      {/* total cart price */}
      <View className="pb-2 border-b border-gray-200 flex flex-row justify-between">
        <Text className="text-sm">Product price ({totalItems} Product)</Text>
        <View className="flex-center flex-row">
          <Text className="">{formatNumber(totalPrice)}</Text>
        </View>
      </View>

      {/* total cart items */}
      <View className="flex flex-row justify-between">
        <Text>Total shopping carts</Text>
        <View className="flex-center flex-row">
          <Text className="text-sm">{formatNumber(totalPrice - totalDiscount)}</Text>
        </View>
      </View>

      {/* total cart profit */}
      {totalDiscount > 0 && (
        <View className="flex flex-row justify-between">
          <Text className="text-red-500">The amount you save from your purchase</Text>
          <View className="flex-center flex-row gap-x-1">
            <Text className="text-red-500 text-sm">
              ({((totalDiscount / totalPrice) * 100).toFixed(1)}%)
            </Text>
            <Text className="text-red-500">{formatNumber(totalDiscount)}</Text>
          </View>
        </View>
      )}
    </View>
  )
}

export default CartInfo
