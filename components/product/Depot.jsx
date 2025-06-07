import { Text, View } from 'react-native'

import Icons from '../common/Icons'

const Depot = ({ inStock }) => {
  //? Render(s)
  if (inStock < 10 && inStock !== 0) {
    return <Text className="text-red-500">Only {inStock} left !</Text>
  } else if (inStock > 10) {
    return (
      <View className="flex flex-row items-center text-teal-400 gap-x-1">
        <Icons.FontAwesome name="save" size={16} className="text-teal-500" />
        <Text className="text-teal-700">Available</Text>
      </View>
    )
  } else if (inStock === 0) {
    return null
  }
}

export default Depot
