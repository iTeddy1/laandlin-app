import { FlashList } from '@shopify/flash-list'
import { Stack } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'

import { OrderCard, ShowWrapper, EmptyOrdersList, OrderSkeleton } from '@/components'
import { useGetUserOrdersQuery } from '@/services'

const OrdersScreen = () => {
  //? Assets
  const [page, setPage] = useState(1)

  //? Get Orders Data
  const { data, hasNextPage, isSuccess, isFetching, error, isError, refetch, originalArgs } =
    useGetUserOrdersQuery(
      {
        pageSize: 5,
        page,
      },
      {
        selectFromResult: ({ data, ...args }) => {
          return {
            hasNextPage: data?.data?.pagination?.hasNextPage ?? false,
            data,
            ...args,
          }
        },
      }
    )

  //? Handlers
  const onEndReachedThreshold = () => {
    if (!hasNextPage) return
    setPage(Number(page) + 1)
  }

  //? Render
  return (
    <>
      <Stack.Screen
        options={{
          title: 'My order',
          headerBackTitleVisible: false,
        }}
      />
      <View className="bg-white">
        <ShowWrapper
          error={error}
          isError={isError}
          refetch={refetch}
          isFetching={isFetching}
          isSuccess={isSuccess}
          dataLength={data ? data.length : 0}
          emptyComponent={<EmptyOrdersList />}
          loadingComponent={<OrderSkeleton />}
          originalArgs={originalArgs}
        >
          <View className="px-4 py-3 space-y-3 h-full bg-white">
            <FlashList
              data={data}
              renderItem={({ item }) => <OrderCard key={item._id} order={item} />}
              onEndReached={onEndReachedThreshold}
              onEndReachedThreshold={0}
              estimatedItemSize={200}
            />
          </View>
        </ShowWrapper>
      </View>
    </>
  )
}
export default OrdersScreen
