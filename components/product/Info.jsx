import { Text, View } from 'react-native'

const Info = props => {
  //? Props
  const { infos } = props
  if (!infos || infos.length === 0) return null
  //? Render(s)
  return (
    <View className="px-4 pb-2">
      <Text className="py-3">Materials</Text>
      <View className="ml-1 gap-y-2">
        {infos.map((item, i) => (
          <View key={i} className="flex flex-row gap-x-2 tracking-wide text-gray-500">
            <Text className="text-gray-900 flex-1 leading-6">{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Info
