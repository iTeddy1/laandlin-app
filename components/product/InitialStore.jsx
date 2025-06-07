import { useEffect } from 'react'

import { useAppDispatch } from '@/hooks'
import { setTempColor, setTempSize, addToLastSeen } from '@/store'

const InitialStore = props => {
  const { product } = props

  const dispatch = useAppDispatch()
  useEffect(() => {
    if (product.colors.length > 0) {
      dispatch(setTempColor(product?.colors[0]))
      dispatch(setTempSize(null))
    } else if (product.sizes.length > 0) {
      dispatch(setTempSize(product?.sizes[0].size))
      dispatch(setTempColor(null))
    } else {
      dispatch(setTempColor(null))
      dispatch(setTempSize(null))
    }
  }, [])

  useEffect(() => {
    dispatch(
      addToLastSeen({
        productID: product._id,
        image: product?.images[0].url,
        name: product.name,
      })
    )
  }, [product])
  return null
}

export default InitialStore
