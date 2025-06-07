import moment from 'moment-jalaali'
import { Text, View } from 'react-native'

const ReviewProductCard = props => {
  //? Props
  const { item } = props

  //? Render(s)
  return (
    <View className="flex flex-row py-3">
      <Text
        className={`w-5 h-5 text-center p-0.5 inline-block rounded-md text-white  ${
          item.rating <= 2 ? 'bg-red-500' : item.rating === 3 ? 'bg-amber-500' : 'bg-green-500'
        }`}
      >
        {item.rating}
      </Text>
      <View className="flex-1 px-2.5 space-y-3 lg:px-6">
        <View className="w-full flex flex-row items-center border-b border-gray-100">
          <Text className="mb-1">{item.title}</Text>
          <View className="inline-block w-1 h-1 mx-3 bg-gray-400 rounded-full" />
          <Text className="text-xs">{moment(item.updatedAt).format('YYYY-MM-DD')}</Text>
        </View>

        <Text>{item.comment}</Text>
      </View>
    </View>
  )
}

export default ReviewProductCard
