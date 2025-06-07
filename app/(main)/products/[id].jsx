import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
  AddToCartOperation,
  Description,
  FreeShipping,
  Icons,
  ImageGallery,
  Info,
  InitialStore,
  OutOfStock,
  Reviews,
  SelectColor,
  SelectSize,
  ShowWrapper,
  SimilarProductsSlider,
} from '@/components'
import { useAppSelector } from '@/hooks'
import { useGetSingleProductDetailQuery } from '@/services'
import { formatNumber } from '@/utils'

export default function SingleProductScreen() {
  //? Assets
  const { id } = useLocalSearchParams()
  const insets = useSafeAreaInsets()

  //? Store
  const { totalItems } = useAppSelector(state => state.cart)

  //? Get Feeds Query
  const {
    data: { product = {}, similarProducts = {} },
    isSuccess,
    isFetching,
    error,
    isError,
    refetch,
  } = useGetSingleProductDetailQuery(
    { id },
    {
      selectFromResult: ({ data, ...args }) => {
        console.log('Single Product Data:', data?.data.product)
        return {
          data: {
            product: data?.data?.product,
            similarProducts: data?.data?.similarProducts || {},
          },
          ...args,
        }
      },
    }
  )
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <>
              <Link href="/cart" asChild className="relative">
                <Pressable>
                  <Icons.AntDesign
                    name="shoppingcart"
                    size={24}
                    color="#1F2937"
                    className="px-2 py-1"
                  />
                  {formatNumber(totalItems) && (
                    <Pressable className="absolute outline outline-2 bottom-3.5 left-5 bg-red-500 rounded-md w-5 h-5 p-0.5">
                      <Text className=" text-center text-xs text-white">
                        {formatNumber(totalItems)}
                      </Text>
                    </Pressable>
                  )}
                </Pressable>
              </Link>

              <Icons.Feather name="heart" size={20} color="#1F2937" className="px-2 py-1" />
            </>
          ),
          title: product?.name || '',
          headerBackTitleVisible: false,
        }}
      />
      <ShowWrapper
        error={error}
        isError={isError}
        refetch={refetch}
        isFetching={isFetching}
        isSuccess={isSuccess}
        type="detail"
      >
        <View className="h-full bg-white relative">
          <ScrollView className="">
            <View className="py-4 flex gap-y-4 ">
              <View className="h-fit">
                <InitialStore product={product} />
                <ImageGallery images={product?.images || []} productName={product?.name} />
                <View className="lg:col-span-4 ">
                  {/* title */}
                  <Text className="p-4 text-base font-semibold leading-8 tracking-wide text-black/80 ">
                    {product?.name}
                  </Text>

                  <View className="section-divide-y h-2 bg-gray-100" />

                  {product.stockQuantity > 0 && product.colors.length > 0 && (
                    <SelectColor colors={product.colors} />
                  )}

                  {product.stockQuantity > 0 && product.sizes.length > 0 && (
                    <SelectSize sizes={product.sizes} />
                  )}
                  {product.stockQuantity === 0 && <OutOfStock />}

                  <Info infos={product?.material} />

                  <FreeShipping />
                </View>
              </View>
              <View>
                {product?.description?.length > 0 && (
                  <Description description={product.description} />
                )}
              </View>
              <SimilarProductsSlider similarProducts={similarProducts} />
              <View className="section-divide-y h-2 bg-gray-100" />

              <Reviews
                numReviews={product?.numReviews}
                productId={id}
                productTitle={product.name}
              />
            </View>
          </ScrollView>
          {product.stockQuantity > 0 && (
            <View className="fixed left-0 right-0 z-20" style={{ bottom: insets.bottom }}>
              <AddToCartOperation product={product} />
            </View>
          )}
        </View>
      </ShowWrapper>
    </>
  )
}
