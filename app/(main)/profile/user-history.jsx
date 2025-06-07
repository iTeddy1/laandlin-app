import { Link, Stack } from 'expo-router'
import { Pressable, Text, View, ScrollView } from 'react-native'

import { EmptyCart, ResponsiveImage } from '@/components'
import { useAppSelector } from '@/hooks'
import { truncate } from '@/utils'

const UserHistoryScreen = () => {
  //? Store
  const { lastSeen } = useAppSelector(state => state.user)
  //? selector
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Recent visits',
          headerBackTitleVisible: false,
        }}
      />
      {lastSeen.length > 0 ? (
        <ScrollView className="px-3 space-y-4 bg-white">
          {lastSeen.map((item, index) => (
            <View className="border-b border-gray-200 " key={index}>
              <Link href={`/products/${item.productID}`} asChild>
                <Pressable className="flex flex-row items-center gap-4 py-4 ">
                  <ResponsiveImage
                    className="w-36 h-36 md:mx-auto"
                    imageStyles="w-36 h-36"
                    source={item.image}
                    alt={item.name}
                  />

                  <Text className="flex-1 px-3 text-left text-gray-800 leading-6 ">
                    {truncate(item.name, 80)}
                  </Text>
                </Pressable>
              </Link>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View className="py-20">
          <EmptyCart className="mx-auto h-52 w-52" />
          <Text className="text-center">Your recent visit list is empty</Text>
        </View>
      )}
    </>
  )
}

export default UserHistoryScreen
