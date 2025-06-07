import { FlashList } from '@shopify/flash-list'
import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

import { Filter, ProductCard, ProductSkeleton, Sort } from '@/components'
import { useChangeRoute } from '@/hooks'
import { useGetProductsQuery } from '@/services'

export default function ProductsScreen() {
  //? Assets
  const params = useLocalSearchParams()

  const title = params?.title?.toString() ?? 'Products'
  const category = params?.category?.toString() ?? ''
  const limit = params?.limit?.toString() ?? 10
  const page = params?.page?.toString() ?? 1
  const sort = params?.sort?.toString() ?? ''
  const search = params?.search?.toString() ?? ''
  const inStock = params?.inStock?.toString() ?? ''
  const discount = params?.discount?.toString() ?? ''
  const price = params?.price?.toString() ?? ''

  //* Get Products Data
  const {
    data,
    products,
    hasNextPage,
    isFetching: isFetchingProduct,
  } = useGetProductsQuery(
    {
      category,
      limit,
      page,
      sort,
      search,
      inStock,
      discount,
      price,
    },
    {
      selectFromResult: ({ data, ...args }) => ({
        hasNextPage: data?.data?.pagination?.hasNextPage ?? false,
        data,
        products: data?.data?.products,
        ...args,
      }),
    }
  )

  console.log('ProductsScreen data:', data?.data.products)

  //? Handlers
  const changeRoute = useChangeRoute()

  const onEndReachedThreshold = () => {
    if (!hasNextPage) return
    changeRoute({
      page: Number(page) + 1,
    })
  }

  const handleChangeRoute = newQueries => {
    changeRoute({
      ...params,
      page: 1,
      ...newQueries,
    })
  }

  return (
    <>
      <Stack.Screen
        options={{
          title,
        }}
      />
      <View className="bg-white h-full flex">
        <View className="px-1 flex-1">
          <View id="_products" className="w-full h-[100%] flex px-4 py-2 mt-2">
            {/* Filters & Sort */}
            <View className="divide-y-2 divide-neutral-200">
              <View className="flex flex-row py-2 gap-x-3">
                <Filter
                  mainMaxPrice={data?.data?.mainMaxPrice}
                  mainMinPrice={data?.data?.mainMinPrice}
                  handleChangeRoute={handleChangeRoute}
                />
                <Sort handleChangeRoute={handleChangeRoute} />
              </View>

              <View className="flex flex-row justify-between py-2">
                <Text className="text-base text-neutral-600">All Products</Text>

                <Text className="text-base text-neutral-600">
                  {data?.data.productsLength} Product
                </Text>
              </View>
            </View>
            {/* Products */}
            {isFetchingProduct && page === 1 && <ProductSkeleton />}
            {products && products.length > 0 ? (
              <FlashList
                data={products}
                renderItem={({ item }) => <ProductCard product={item} key={item._id} />}
                onEndReached={onEndReachedThreshold}
                onEndReachedThreshold={0}
                estimatedItemSize={200}
              />
            ) : (
              <Text className="text-center text-red-500">No product found</Text>
            )}
          </View>
        </View>
      </View>
    </>
  )
}
