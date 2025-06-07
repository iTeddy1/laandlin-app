import { View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'

export default function Slider() {
  return (
    <View className="mt-3 rounded-lg overflow-hidden">
      <Swiper style={styles.wrapper} showsPagination activeDotColor="#1D4ED8" dotColor="#E5E7EB">
        <Image
          alt="slider-1"
          source={require('@/assets/images/slider/slider 1.png')}
          className="w-full h-full object-contain aspect-[400/200]"
        />
        <Image
          alt="slider-2"
          source={require('@/assets/images/slider/slider 2.png')}
          className="w-full h-full"
        />
        <Image
          alt="slider-3"
          source={require('@/assets/images/slider/slider 3.png')}
          className="w-full h-full"
        />
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
})
