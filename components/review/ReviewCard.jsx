import { Text, View } from 'react-native'

const ReviewCard = props => {
  //? Props
  const { item } = props

  //? Render(s)
  return (
    <>
      <View className="flex flex-row py-4 space-y-3 border-b border-gray-200 gap-x-3">
        {/* image */}
        <View>
          <View
            className={`w-5 h-5 text-center pt-0.5 inline-block rounded-md ml-10 mt-2  ${
              item.rating <= 2 ? 'bg-red-500' : item.rating === 3 ? 'bg-amber-500' : 'bg-green-500'
            }`}
          >
            <Text className="text-white text-center">{item.rating}</Text>
          </View>
        </View>

        <View className="flex-1 ">
          {/* header */}
          <View className="flex flex-row  pb-1 border-b border-gray-100 gap-2 gap-y-2">
            <Text>{item.product.name} -</Text>
            <Text className="">{item.title}</Text>
          </View>

          {/* content */}
          <View className="py-4 space-y-2">
            <Text>{item.comment}</Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default ReviewCard
