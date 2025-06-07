import { yupResolver } from '@hookform/resolvers/yup'
import Slider from '@react-native-community/slider'
import { useLocalSearchParams, router } from 'expo-router'
import Stack from 'expo-router/stack'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { View, Text, ScrollView } from 'react-native'

import { HandleResponse, SubmitModalBtn, TextField } from '@/components'
import { useCreateReviewMutation } from '@/services'
import { ratingStatus, reviewSchema } from '@/utils'

export default function ReviewCommentScreen() {
  //? Assets
  const { productId, productTitle } = useLocalSearchParams()

  //? State
  const [rating, setRating] = useState(5)

  //? Form Hook
  const {
    handleSubmit,
    formState: { errors: formErrors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(reviewSchema),
    defaultValues: {
      comment: '',
      title: '',
      rating: 1,
      product: '',
    },
  })

  //? Create Review Query
  const [createReview, { isSuccess, isLoading, data, isError, error }] = useCreateReviewMutation()

  const submitHandler = data => {
    console.log('Review Data:', data)
    createReview({
      body: { ...data, rating, productId },
    })
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: productTitle || 'Write a review',
          headerBackTitleVisible: false,
        }}
      />
      {/* Handle Create Review Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message={data?.message}
          onSuccess={() => {
            reset()
            setRating(1)
            router.back()
          }}
          onError={() => {}}
        />
      )}
      <ScrollView className="bg-white">
        <View className="bg-white">
          <View className="flex flex-col justify-between flex-1 p-4 gap-y-5">
            {/* rating */}
            <View>
              <View className="my-2 flex flex-row justify-center text-center">
                <Text className="text-sm text-black">Rating score!:‌</Text>
                <Text className="px-1 text-sm text-sky-500">{ratingStatus[rating]}</Text>
              </View>
              <Slider
                step={1}
                maximumValue={5}
                minimumValue={1}
                style={{ width: '100%' }}
                value={rating}
                onValueChange={value => {
                  setRating(value)
                }}
                disabled={false}
                maximumTrackTintColor="#CCCCCC"
              />
              <View className="flex flex-row justify-between">
                {Array(5)
                  .fill('_')
                  .map((_, i) => (
                    <View key={i} className="h-1 w-1 rounded-full bg-gray-300 inline-block" />
                  ))}
              </View>
            </View>

            {/* title */}
            <View>
              <TextField label="Title" control={control} errors={formErrors.title} name="title" />
            </View>

            {/* comment */}
            <View>
              <TextField
                label="Comment"
                control={control}
                errors={formErrors.comment}
                name="comment"
              />
            </View>
            <View className="py-3">
              <SubmitModalBtn onPress={handleSubmit(submitHandler)} isLoading={isLoading}>
                Submit a review
              </SubmitModalBtn>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
