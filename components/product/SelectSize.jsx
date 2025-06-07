import { Pressable, Text, View } from 'react-native'

import { useAppDispatch, useAppSelector } from '@/hooks'
import { setTempSize } from '@/store'

const SelectSize = props => {
  //? Props
  const { sizes } = props

  //? Assets
  const dispatch = useAppDispatch()

  //? Store
  const { tempSize } = useAppSelector(state => state.cart)

  //? Render(s)
  return (
    <View className="">
      <View className="flex flex-row justify-between p-4">
        <Text className="text-sm text-gray-700">Size: {tempSize?.size}</Text>
        <Text className="text-sm">{sizes.length} Type size</Text>
      </View>
      <View className="flex flex-row flex-wrap gap-y-3 space-x-3 px-5 my-3">
        {sizes.map(item => (
          <Pressable
            key={item._id}
            onPress={() => dispatch(setTempSize(item))}
            className={`rounded-full  flex items-center cursor-pointer  ${
              tempSize?.size === item.size ? 'border-2 border-sky-500' : ' border-2 border-gray-300'
            }`}
          >
            <Text className="p-4 rounded-full">{item.size}</Text>
          </Pressable>
        ))}
      </View>
      <View className="section-divide-y" />
    </View>
  )
}

export default SelectSize
