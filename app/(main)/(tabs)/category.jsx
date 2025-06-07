import { Link, Stack, router } from 'expo-router'
import { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

import { Icons, ShowWrapper } from '@/components'
import { useGetCategoriesQuery } from '@/services'

export default function CategoryScreen() {
  //? Get Categories Query
  const { categories, isSuccess, isFetching, error, isError, refetch } = useGetCategoriesQuery(
    undefined,
    {
      selectFromResult: ({ data, ...args }) => ({
        categories: data?.data?.categories || [],
        ...args,
      }),
    }
  )
  //? State
  const [activeMinCat, setActiveMinCat] = useState({})

  //? Handlers
  const handleActive = cat => {
    setActiveMinCat(cat)
  }

  const handleSearch = () => {
    router.push('/search')
  }

  //? Re-Renders
  useEffect(() => {
    if (categories?.length) setActiveMinCat(categories?.filter(category => category.level === 1)[0])
  }, [categories])

  //? Render(s)
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Icons.EvilIcons
              name="search"
              size={30}
              color="#1F2937"
              className="px-2 py-1"
              onPress={handleSearch}
            />
          ),
        }}
      />
      <ShowWrapper
        error={error}
        isError={isError}
        refetch={refetch}
        isFetching={isFetching}
        isSuccess={isSuccess}
        type="list"
        dataLength={categories?.length ?? 0}
      >
        <View className="flex h-full flex-row bg-white">
          <ScrollView className="bg-neutral-100 h-full w-3/12 shrink-0">
            {categories.length
              ? categories.map(category => (
                  <Link
                    key={category._id}
                    href={{
                      pathname: '/products',
                      params: { category: category._id, title: category.name },
                    }}
                    asChild
                  >
                    <TouchableOpacity
                      className={`flex flex-col items-center py-3 px-2 space-y-2 border-b border-r border-neutral-200 bg-neutral-100 ${activeMinCat?._id === category._id ? 'bg-white border-r-0' : ''}`}
                      onPress={() => handleActive(category)}
                    >
                      <View className="rounded-full border-solid border-2 border-slate-200 overflow-hidden">
                        <Image
                          source={{
                            uri: category?.image,
                          }}
                          className="w-7 h-7"
                        />
                      </View>
                      <Text className="text-gray-700">{category.name}</Text>
                    </TouchableOpacity>
                  </Link>
                ))
              : null}
          </ScrollView>
        </View>
      </ShowWrapper>
    </>
  )
}
