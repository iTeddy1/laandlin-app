import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

import Depot from './Depot'
import DiscountProduct from './DiscountProduct'
import ProductPrice from './ProductPrice'
import SpecialSell from './SpecialSell'
import Icons from '../common/Icons'
import ResponsiveImage from '../common/ResponsiveImage'

import { truncate } from '@/utils'

const ProductCard = props => {
  //? Props
  const { product } = props

  //? Render(s)
  return (
    <Link href={`/products/${product._id}`} asChild>
      <Pressable className="py-2 border-b border-gray-100 relative">
        <View className="absolute top-0 left-0 z-10">
          <SpecialSell discount={product.discount} inStock={product.stockQuantity} />
        </View>

        <View className="flex flex-row items-center gap-3 space-x-3">
          <View className="flex p-1">
            <ResponsiveImage
              dimensions="h-[28vw] w-[26vw] mb-8"
              imageStyles="h-[28vw] w-[26vw]"
              source={product.images[0].url}
              alt={product.name}
            />

            <View className="p-2 flex flex-row gap-1.5 items-end">
              {product.colors &&
                product.stockQuantity !== 0 &&
                product.colors.map(color => (
                  <View
                    key={color.id}
                    className="inline-block w-2.5 h-2.5 rounded-xl border-gray-300 shadow border "
                    style={{ backgroundColor: color.hashCode }}
                  />
                ))}
              {product.stockQuantity !== 0 && (
                <Icons.AntDesign name="plus" className="w-2.5 h-2.5" />
              )}
            </View>
          </View>
          <View className="flex-1 space-y-3 w-full">
            <Text className="text-sm leading-6 text-gray-800 break-all h-14">
              {truncate(product.name, 70)}
            </Text>
            <View className="flex flex-row justify-between">
              <View>
                <Depot inStock={product.stockQuantity} />
              </View>
              <View className="flex flex-row items-center gap-x-1">
                <Text className=" text-neutral-500">{product?.rating?.toFixed(1) || 5}</Text>
                <Icons.AntDesign name="star" size={16} className="text-amber-400" />
              </View>
            </View>
            <View className="flex flex-row justify-between">
              <View>
                {product.salePrice > 0 && product.stockQuantity !== 0 && (
                  <DiscountProduct discount={product?.discount || 10} />
                )}
              </View>
              {product.stockQuantity !== 0 ? (
                <ProductPrice inStock={product.stockQuantity} discount={10} price={product.price} />
              ) : (
                <Text className="h-12 my-0.5">Not available</Text>
              )}
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  )
}

export default ProductCard
