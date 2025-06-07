import { FlashList } from '@shopify/flash-list'
import { Stack } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'

import { ReviewCard, ShowWrapper, EmptyCommentsList, ReviewSkeleton } from '@/components'
import { useGetUserReviewsQuery } from '@/services'

const ReviewsScreen = () => {
  //? Assets
  const [page, setPage] = useState(1)

  //*   Get Reviews
  const { data, hasNextPage, isSuccess, isFetching, error, isError, refetch, originalArgs } =
    useGetUserReviewsQuery(
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

  console.log('ReviewsScreen data:', data)

  //? Handlers
  const onEndReachedThreshold = () => {
    if (!hasNextPage) return
    setPage(Number(page) + 1)
  }

  //? Render(s)
  return (
    <>
      <Stack.Screen
        options={{
          title: 'My comment',
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
          dataLength={data ? data?.data?.reviews.length : 0}
          emptyComponent={<EmptyCommentsList />}
          loadingComponent={<ReviewSkeleton />}
          originalArgs={originalArgs}
        >
          <View className="px-4 py-3 space-y-3 h-full">
            <FlashList
              data={data?.data?.reviews}
              renderItem={({ item, index }) => <ReviewCard key={item._id} item={item} />}
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

export default ReviewsScreen
