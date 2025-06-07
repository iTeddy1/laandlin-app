import * as SecureStore from 'expo-secure-store'
import { useState, useEffect } from 'react'

export default function useVerify() {
  const [isVerify, setIsVerify] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await SecureStore.getItemAsync('access-token')
        setIsVerify(!!token)
      } catch (error) {
        console.error('Error checking token:', error)
        setIsVerify(false)
        await SecureStore.deleteItemAsync('access-token')
      }
    }
    checkToken()
  }, [])
  return isVerify
}
