import { Stack } from 'expo-router'
import { ScrollView, View } from 'react-native'

import {
  BannerOne,
  BannerTwo,
  BestSellsSlider,
  Categories,
  DiscountSlider,
  Slider as MainSlider,
  MostFavoriteProducts,
  FeedHeader,
  ShowWrapper,
} from '@/components'
import { useGetCategoriesQuery } from '@/services'

const bannerOneType = [
  require('../../../assets/images/Banner1/banner 1.png'),
  require('../../../assets/images/Banner1/banner 1 (2).png'),
  require('../../../assets/images/Banner1/banner 1 (3).png'),
  require('../../../assets/images/Banner1/banner 1 (4).png'),
]
const bannerTwoType = [
  require('../../../assets/images/Banner2/banner 2.png'),
  require('../../../assets/images/Banner2/banner 2 (2).png'),
  require('../../../assets/images/Banner2/banner 2 (3).png'),
  require('../../../assets/images/Banner2/banner 2 (4).png'),
]

export default function FeedScreen() {
  //? Assets
  //? Get Feeds Query
  const { data, categories, isSuccess, isFetching, error, isError, refetch } =
    useGetCategoriesQuery(
      {},
      {
        selectFromResult: ({ data, ...args }) => ({
          data: data?.data || {},
          categories: data?.data?.categories || [],
          ...args,
        }),
      }
    )

  //? Render(s)
  return (
    <>
      <Stack.Screen
        options={{
          header: props => <FeedHeader {...props} title="Home" icon="menu-outline" />,
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
        <ScrollView className="bg-white flex h-full px-3">
          <View>
            <MainSlider />
            <Categories childCategories={{ categories, title: 'All Categories' }} />
            <DiscountSlider currentCategory="68417b20c417231c205139c7" />
            <BannerOne data={bannerOneType} />
            <BestSellsSlider categorySlug="68417b36c417231c205139cd" />
            <BannerTwo data={bannerTwoType} />
            <MostFavoriteProducts categorySlug="68417b3ec417231c205139d0" />
          </View>
        </ScrollView>
      </ShowWrapper>
    </>
  )
}
